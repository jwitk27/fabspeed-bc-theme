export default function () {
    $('.playButton').each((i, el) => {
        $(el).on('click', () => {
            $('.productAudio').each((i, el) => {
                $(el)[0].pause();
            });
            $(el).prev()[0].play();
        });
    });
}
