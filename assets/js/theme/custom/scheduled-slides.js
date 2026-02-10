export default function() {
    const $scheduledSlide = $('.scheduled-slide');

    const start = new Date($scheduledSlide.data('start-time'));
    const end = new Date($scheduledSlide.data('end-time'));
    const now = new Date();

    if (now <= start || now >= end) {
        $scheduledSlide.remove();
    }
}