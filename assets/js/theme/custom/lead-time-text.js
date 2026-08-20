export default function() {
    $('.lead-time-link').each((i, el) => {
        setInterval(() => {
            const texts = $(el).find('.lead-time-text');
            const shown = $(el).find('.show');
            shown.removeClass('show');
            shown.addClass('exit');
            shown.index() === texts.length - 1 ? $(el).find('.lead-time-text').eq(0).addClass('show') : shown.next().addClass('show');
            shown.index() === 0 ? $(el).find('.lead-time-text').eq(texts.length - 1).removeClass('exit') : shown.prev().removeClass('exit');
        }, 4000);
    });
}