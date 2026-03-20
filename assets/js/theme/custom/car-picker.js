export default function () {
    const root = document.querySelector("[data-cp]");
    if (!root) return;

    const els = {
        start: root.querySelector("[data-cp-start]"),
        edit: root.querySelector("[data-cp-edit]"),
        closes: root.querySelectorAll("[data-cp-close]"),
        back: root.querySelector("[data-cp-back]"),
        clear: root.querySelector("[data-cp-clear]"),

        selectedWrap: root.querySelector("[data-cp-selected]"),
        chip: root.querySelector("[data-cp-chip]"),

        // NEW
        viewAllRow: root.querySelector("[data-cp-viewall-row]"),

        panel: root.querySelector("[data-cp-panel]"),
        backdrop: root.querySelector("[data-cp-backdrop]"),
        stepTitle: root.querySelector("[data-cp-stepTitle]"),
        crumbs: root.querySelector("[data-cp-crumbs]"),
        list: root.querySelector("[data-cp-list]"),

        popular: root.querySelector("[data-cp-popular]"),
        products: root.querySelector("[data-cp-products]"),
        viewAll: root.querySelector("[data-cp-viewall]"),

        data: root.querySelector("[data-cp-data]"),
    };

    if (!els.data) return;

    const STORE_KEY = "cp_selection_v1";

    const save = (state) =>
        localStorage.setItem(STORE_KEY, JSON.stringify(state));
    const load = () => {
        try {
            return JSON.parse(localStorage.getItem(STORE_KEY) || "null");
        } catch {
            return null;
        }
    };
    const clearSaved = () => localStorage.removeItem(STORE_KEY);

    const toLocalPath = (url) => {
        try {
            const u = new URL(url);
            return u.pathname + u.search;
        } catch {
            return url;
        }
    };

    const withBestSelling = (url) => {
        const u = new URL(url, window.location.origin);
        u.searchParams.set("sort", "featured");
        u.searchParams.set("order", "desc");
        return u.pathname + "?" + u.searchParams.toString();
    };

    // map[make][model] = { url, years: [{name,url}] }
    const buildMap = () => {
        const map = {};
        const makeNodes = els.data.querySelectorAll("[data-make]");
        makeNodes.forEach((makeNode) => {
            const make = makeNode.getAttribute("data-make");
            if (!make) return;

            map[make] = map[make] || {};

            const modelNodes = makeNode.querySelectorAll(
                ":scope > [data-model]",
            );
            modelNodes.forEach((modelNode) => {
                const model = modelNode.getAttribute("data-model");
                if (!model) return;

                const modelUrl = modelNode.getAttribute("data-model-url") || "";
                const yearLinks = Array.from(
                    modelNode.querySelectorAll(":scope > a[data-year]"),
                )
                    .map((a) => ({
                        name: a.getAttribute("data-year"),
                        url: a.getAttribute("href"),
                    }))
                    .filter((y) => y.name && y.url);

                map[make][model] = { url: modelUrl, years: yearLinks };
            });
        });
        return map;
    };

    const map = buildMap();

    const state = {
        step: "make", // make | model | year
        make: null,
        model: null,
        year: null,
        url: null,
    };

    const setSelectedUI = (text) => {
        els.chip.textContent = text || "—";
        els.selectedWrap.hidden = !text;
        els.start.hidden = !!text;

        // NEW: show/hide the big View all parts button
        if (els.viewAllRow) els.viewAllRow.hidden = !text;
    };

    const openPanel = () => {
        els.backdrop.hidden = false;
        els.panel.hidden = false;
        document.documentElement.style.overflow = "hidden";
    };

    const closePanel = () => {
        els.backdrop.hidden = true;
        els.panel.hidden = true;
        document.documentElement.style.overflow = "";
    };

    const hidePopular = () => {
        els.popular.hidden = true;
        els.products.innerHTML = "";
        els.viewAll.href = "#";
    };

    const showPopular = async (categoryUrl) => {
        if (!categoryUrl) return;

        els.viewAll.href = categoryUrl;
        els.popular.hidden = false;
        els.products.innerHTML =
            '<div style="opacity:.8;padding:10px">Loading popular products…</div>';

        try {
            const local = toLocalPath(categoryUrl);
            const urlToFetch = withBestSelling(local);

            const res = await fetch(urlToFetch, { credentials: "same-origin" });
            const html = await res.text();
            const doc = new DOMParser().parseFromString(html, "text/html");

            let cards = Array.from(
                doc.querySelectorAll(".productGrid .card"),
            ).slice(0, 8);
            if (!cards.length)
                cards = Array.from(
                    doc.querySelectorAll("[data-product-id]"),
                ).slice(0, 8);

            els.products.innerHTML = "";
            if (!cards.length) {
                els.products.innerHTML =
                    '<div style="opacity:.8;padding:10px">No products found.</div>';
                return;
            }

            cards.forEach((card) =>
                els.products.appendChild(document.importNode(card, true)),
            );
        } catch (e) {
            els.products.innerHTML =
                '<div style="opacity:.8;padding:10px">Could not load products.</div>';
        }
    };

    const crumbsHTML = () => {
        const parts = [];
        if (state.make)
            parts.push(
                `<span class="cp-crumb"><b>Make</b>: ${state.make}</span>`,
            );
        if (state.model)
            parts.push(
                `<span class="cp-crumb"><b>Model</b>: ${state.model}</span>`,
            );
        if (state.year)
            parts.push(
                `<span class="cp-crumb"><b>Year</b>: ${state.year}</span>`,
            );
        return parts.join("");
    };

    const render = () => {
        els.crumbs.innerHTML = crumbsHTML();

        if (state.step === "make") {
            els.stepTitle.textContent = "Select Make";
            const makes = Object.keys(map);
            els.list.innerHTML = makes
                .map(
                    (m) =>
                        `<button type="button" class="cp-item ${state.make === m ? "is-selected" : ""}" data-pick="make" data-value="${m}">${m}</button>`,
                )
                .join("");
            return;
        }

        if (state.step === "model") {
            els.stepTitle.textContent = "Select Model";
            const models = Object.keys(map[state.make] || {});
            els.list.innerHTML = models
                .map(
                    (m) =>
                        `<button type="button" class="cp-item ${state.model === m ? "is-selected" : ""}" data-pick="model" data-value="${m}">${m}</button>`,
                )
                .join("");
            return;
        }

        els.stepTitle.textContent = "Select Year/Submodel";
        const years = map[state.make]?.[state.model]?.years || [];
        els.list.innerHTML = years
            .map(
                (y) =>
                    `<button type="button" class="cp-item ${state.year === y.name ? "is-selected" : ""}" data-pick="year" data-url="${y.url}" data-value="${y.name}">${y.name}</button>`,
            )
            .join("");
    };

    const finalize = (finalUrl) => {
        state.url = finalUrl;

        const label = [state.make, state.model, state.year]
            .filter(Boolean)
            .join(" ");
        setSelectedUI(label);

        closePanel();
        showPopular(finalUrl);

        save({
            make: state.make,
            model: state.model,
            year: state.year,
            url: state.url,
        });
    };

    const resetAll = () => {
        state.step = "make";
        state.make = state.model = state.year = state.url = null;
        setSelectedUI(null);
        hidePopular();
        clearSaved();
        render();
        closePanel();
    };

    // --- events ---
    els.start?.addEventListener("click", () => {
        state.step = "make";
        openPanel();
        render();
    });

    els.edit?.addEventListener("click", () => {
        openPanel();
        state.step = state.year ? "year" : state.model ? "model" : "make";
        render();
    });

    els.closes.forEach((btn) => btn.addEventListener("click", closePanel));
    els.backdrop?.addEventListener("click", closePanel);

    els.back?.addEventListener("click", () => {
        if (state.step === "year") {
            state.step = "model";
            state.year = null;
            render();
            return;
        }
        if (state.step === "model") {
            state.step = "make";
            state.model = null;
            render();
            return;
        }
        closePanel();
    });

    els.clear?.addEventListener("click", resetAll);

    els.list?.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-pick]");
        if (!btn) return;

        const pick = btn.getAttribute("data-pick");

        if (pick === "make") {
            state.make = btn.getAttribute("data-value");
            state.model = state.year = state.url = null;
            hidePopular();
            state.step = "model";
            render();
            return;
        }

        if (pick === "model") {
            state.model = btn.getAttribute("data-value");
            state.year = state.url = null;
            hidePopular();

            const node = map[state.make]?.[state.model];
            const hasYears = (node?.years || []).length > 0;

            if (!hasYears) {
                finalize(node?.url);
                return;
            }

            state.step = "year";
            render();
            return;
        }

        if (pick === "year") {
            state.year = btn.getAttribute("data-value");
            finalize(btn.getAttribute("data-url"));
        }
    });

    // ESC closes
    document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        if (!els.panel.hidden) closePanel();
    });

    // restore saved selection
    const saved = load();
    if (saved?.url) {
        state.make = saved.make || null;
        state.model = saved.model || null;
        state.year = saved.year || null;
        state.url = saved.url;

        const label = [state.make, state.model, state.year]
            .filter(Boolean)
            .join(" ");
        setSelectedUI(label);
        showPopular(saved.url);
    }
}
