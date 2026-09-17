import "./global/jquery-migrate";
import "./common/select-option-plugin";
import PageManager from "./page-manager";
import quickSearch from "./global/quick-search";
import currencySelector from "./global/currency-selector";
import mobileMenuToggle from "./global/mobile-menu-toggle";
import menu from "./global/menu";
import foundation from "./global/foundation";
import quickView from "./global/quick-view";
import cartPreview from "./global/cart-preview";
import privacyCookieNotification from "./global/cookieNotification";
import maintenanceMode from "./global/maintenanceMode";
import carousel from "./common/carousel";
import "lazysizes";
import loadingProgressBar from "./global/loading-progress-bar";
import svgInjector from "./global/svg-injector";
import soundButton from "./custom/sound-button";

/*=========================================
=            www.themevale.com            =
=========================================*/
import themevale_Global from "./themevale/themevale_Global";
import themevale_AddToCart from "./themevale/themevale_AddToCart";
import themevale_RecentlyBought from "./themevale/themevale_RecentlyBought";
import themevale_Sticky from "./themevale/themevale_StickyNavigation";

import themevaleMenu from "./themevale/themevale_MegaMenu";
window.themevaleMenu = themevaleMenu;

import themevaleNewsletterPopup from "./themevale/themevale_NewsletterPopup";
window.themevaleNewsletterPopup = themevaleNewsletterPopup;

/*=====  End of www.themevale.com  ======*/

import bulkExportMachine from "./custom/bulk-export-machine";
import equalizeHeights from "./custom/equalizeHeights";
import ausCode from "./custom/aus-code";
import categoryDescriptions from "./custom/category-descriptions";
import clickDescriptionTab from "./custom/click-description-tab";
import scheduledSlides from "./custom/scheduled-slides";
import backorder from "./custom/backorder";
import stickyAddToCart from "./custom/stickyAddToCart";
import customProductLogic from "./custom/custom-product-logic";
import tabAlert from "./custom/tab-alert";
import dynograph from "./custom/dynograph";
import priceSlashing from "./custom/price-slashing";
import analytics from "./custom/analytics";
import promoProductListing from "./custom/promo-product-listing";
import leadTimeText from "./custom/lead-time-text";
import searchToggle from "./custom/search-toggle";
import stickyHeader from "./custom/sticky-header";
import vehicleSelector from "./custom/vehicle-selector";

export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        scheduledSlides();
        ausCode();
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

        themevale_Global();
        themevale_Sticky(this.context);
        themevale_AddToCart();
        themevale_RecentlyBought(this.context);

        categoryDescriptions();
        equalizeHeights(['.card-title', '.card-wrapper']);
        vehicleSelector();
        clickDescriptionTab();
        soundButton();
        bulkExportMachine();
        backorder();
        stickyAddToCart();
        customProductLogic();
        tabAlert();
        dynograph();
        priceSlashing();
        analytics();
        promoProductListing();
        leadTimeText();
        searchToggle();
        stickyHeader();
    }
}
