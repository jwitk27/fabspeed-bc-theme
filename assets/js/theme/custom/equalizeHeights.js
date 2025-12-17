export default function equalizeHeights(selectors = []) {
    selectors.forEach(selector => {
        const $els = $(selector);
        if (!$els.length) return;

        let max = 0;
        $els.css('height', 'auto');

        $els.each((_, el) => {
            max = Math.max(max, $(el).outerHeight());
        });

        $els.height(max);
    });
}