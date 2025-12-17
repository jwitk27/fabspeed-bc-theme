import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';

/*=========================================
=            www.themevale.com            =
=========================================*/
import themevale_Global from './themevale/themevale_Global';
import themevale_AddToCart from './themevale/themevale_AddToCart';
import themevale_RecentlyBought from './themevale/themevale_RecentlyBought';
import themevale_Sticky from './themevale/themevale_StickyNavigation';

import themevaleMenu from './themevale/themevale_MegaMenu';
window.themevaleMenu = themevaleMenu;

import themevaleNewsletterPopup from './themevale/themevale_NewsletterPopup';
window.themevaleNewsletterPopup = themevaleNewsletterPopup;

/*=====  End of www.themevale.com  ======*/

import bulkExportMachine from './custom/bulk-export-machine';
import equalizeHeights from './custom/equalizeHeights';

export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        cartPreview(this.context.secureBaseUrl, this.context.cartId);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        // loadingProgressBar();
        svgInjector();

        // australia specific code
        // (async function () {
        //     const AU = 'AU';
        //     const CURRENCY_ID_AU = 4;
        //     const STORAGE_KEY = 'country';

        //     const country = localStorage.getItem(STORAGE_KEY);

        //     const showAU = () => $('body').addClass('is-au');
        //     const showDefault = () => $('.wait-to-show').show();

        //     // If we already know the country
        //     if (country) {
        //         country === AU ? showAU() : showDefault();
        //         return;
        //     }

        //     try {
        //         const response = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
        //         const { country: detectedCountry } = await response.json();

        //         localStorage.setItem(STORAGE_KEY, detectedCountry || '');

        //         if (detectedCountry === AU) {
        //             showAU();

        //             if (!location.search.includes(`setCurrencyId=${CURRENCY_ID_AU}`)) {
        //                 location.href = `/?setCurrencyId=${CURRENCY_ID_AU}`;
        //             }
        //         } else {
        //             showDefault();
        //         }
        //     } catch {
        //         showDefault();
        //     }
        // })();

        themevale_Global();
        themevale_Sticky(this.context);
        themevale_AddToCart();
        themevale_RecentlyBought(this.context);

        bulkExportMachine();
        equalizeHeights([]);
    }
}
