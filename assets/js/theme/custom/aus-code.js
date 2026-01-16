export default function () {
    (async function () {
        const AU = 'AU';
        const CURRENCY_ID_AU = 4;
        const STORAGE_KEY = 'country';

        const country = localStorage.getItem(STORAGE_KEY);

        const showAU = () => $('body').addClass('is-au');
        const showDefault = () => $('.wait-to-show').addClass('is-ready');
        
        // If we already know the country
        if (country) {
            country === AU ? showAU() : showDefault();
            return;
        }

        try {
            const response = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
            const { country: detectedCountry } = await response.json();

            localStorage.setItem(STORAGE_KEY, detectedCountry || '');

            if (detectedCountry === AU) {
                showAU();

                if (!location.search.includes(`setCurrencyId=${CURRENCY_ID_AU}`)) {
                    location.href = `/?setCurrencyId=${CURRENCY_ID_AU}`;
                }
            } else {
                showDefault();
            }
        } catch {
            showDefault();
        }
    })();
}