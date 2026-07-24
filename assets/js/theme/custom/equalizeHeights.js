export default function equalizeHeights(selectors = []) {
    selectors.forEach(selector => {
        const $els = $(selector);
        if (!$els.length) return;

        $els.css('height', 'auto');

        const rows = {};

        $els.each((_, el) => {
            const $el = $(el);
            const top = Math.round($el.offset().top);

            if (!rows[top]) {
                rows[top] = [];
            }

            rows[top].push($el);
        });

        Object.values(rows).forEach(row => {
            let maxHeight = 0;

            row.forEach($el => {
                maxHeight = Math.max(maxHeight, $el.outerHeight());
            });

            row.forEach($el => {
                $el.height(maxHeight);
            });
        });
    });
}