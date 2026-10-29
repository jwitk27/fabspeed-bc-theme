export default function() {
    const $section = $('.specialist-contact');

    if (!$section.length) return;

    $('.specialist-contact').each(function() {
        const $section = $(this);
        const $button = $section.find('.specialist-contact__callback');

        if (!$button.length || $button.data('initialized')) return;
        $button.data('initialized', true);

        const phone = '2156466253';
        const isMobile =
            /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
            (navigator.maxTouchPoints > 1 &&
             /Macintosh/i.test(navigator.userAgent));

        function updateButton() {
            const parts = new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/New_York',
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h23'
            }).formatToParts(new Date());

            const get = type => parts.find(p => p.type === type).value;
            const day = get('weekday');
            const minutes = Number(get('hour')) * 60 +
                            Number(get('minute'));

            const isOpen =
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(day) &&
                minutes >= 540 && minutes < 1080;

            if (isOpen) {
                $button.text('CALL NOW')
                    .attr('href', `tel:${phone}`)
                    .data('mode', 'call');
            } else if (isMobile) {
                $button.text('REQUEST A CALLBACK')
                    .attr(
                        'href',
                        `sms:+1${phone}?body=${encodeURIComponent('requesting callback')}`
                    )
                    .data('mode', 'sms');
            } else {
                $button.text('REQUEST A CALLBACK')
                    .attr(
                        'href',
                        'mailto:sales@fabspeed.com?subject=Callback%20Request&body=I%20am%20requesting%20a%20callback.'
                    )
                    .data('mode', 'email-callback');
            }
        }

        updateButton();

        $button.on('click', function(event) {
            updateButton();

            if ($button.data('mode') === 'desktop-callback') {
                event.preventDefault();

                // Add desktop callback integration here later.
            }
        });
    });
}