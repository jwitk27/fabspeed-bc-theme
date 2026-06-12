export default function () {
    $('.playButton').each((i, el) => {
        $(el).on('click', () => {
            $('#productAudio')[0].play();
        });
    });
}
