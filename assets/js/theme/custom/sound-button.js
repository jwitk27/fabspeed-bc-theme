export default function() {
    if ($('#playButton').length) {
        const playButtonParent = $('#playButton').parent().clone();
        playButtonParent.find('#playButton').addClass('playButton');
        playButtonParent.find('#productAudio').addClass('productAudio');
        playButtonParent.find('span').hide();
        playButtonParent.css('display', 'block')
        playButtonParent.find('button').text('▶ PLAY SOUND');
        $('.productView-options').before(playButtonParent);
        const playButton = document.querySelector('.playButton');
        const audioElement = document.querySelector('.productAudio');
        playButton.addEventListener('click', () => {
            audioElement.currentTime = 0;
            audioElement.play();
        });
    }
}