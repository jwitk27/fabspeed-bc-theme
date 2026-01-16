export default function () {
    if ($('#playButton').length) {
        $('.productView-options').before(getPlayButtonClone('desktop'));
        $('.productView-brand').before(getPlayButtonClone('mobile'));
    }

    function getPlayButtonClone(format) {
        const $playClone = $('#playButton').parent().clone();

        $playClone.find('#playButton').addClass('playButton');
        $playClone.find('#productAudio').addClass('productAudio');
        $playClone.find('#playButton').removeAttr('id');
        $playClone.find('span').hide();
        $playClone.css('display', 'block');
        $playClone.find('button').text('▶ PLAY SOUND');
        $playClone.addClass(`sound-button ${format}`);
        $playClone.find('.playButton').on('click', function () {
            const $audio = $playClone.find('.productAudio').get(0);
            $audio.currentTime = 0;
            $audio.play();
        });
        return $playClone;
    }
}
