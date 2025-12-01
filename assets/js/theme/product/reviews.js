import nod from '../common/nod';
import { CollapsibleEvents } from '../common/collapsible';
import forms from '../common/models/forms';

export default class {
    constructor($reviewForm) {
        this.validator = nod({
            submit: $reviewForm.find('input[type="submit"]'),
        });

        this.$reviewsContent = $('#product-reviews');
        this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
        this.$collapsible2 = $('.productView-reviewTabLink');

        this.initLinkBind();
        this.injectPaginationLink();
        this.collapseReviews();
    }

    /**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */
    initLinkBind() {
       const $content = $('#productReviews-content', this.$reviewsContent);
       const $content2 = $('#product-reviews');
        $('.review-link a').on('click', (e) => {
            e.preventDefault();
            $('.is-open[data-collapsible]', $('.tabs-vertical')).trigger(CollapsibleEvents.click);

            if($('.themevale_productDescription-3').length) {
                $('.is-open[data-collapsible]', $('.themevale_productDescription-3')).trigger(CollapsibleEvents.click);
                if ($(window).width() > 1024) {
                    $('html, body').animate({
                        scrollTop: $('#tab-review').offset().top - $('.header').height(),
                    }, 700);
                } else {
                    $('html, body').animate({
                        scrollTop: this.$reviewsContent.offset().top - $('.header').height(),
                    }, 700);
                }
            } else {
                $('html, body').animate({
                    scrollTop: this.$reviewsContent.offset().top - $('.header').height(),
                }, 700);
            }
            
            if (!$content.hasClass('is-open')) {
                this.$collapsible.trigger(CollapsibleEvents.click);
            }

            if($('.themevale_productDescription-3').length) {
                if (!$content2.hasClass('is-active')) {
                    this.$collapsible2.trigger('click');
                }
            }
        });
    }

    collapseReviews() {
        // We're in paginating state, do not collapse
        if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
            return;
        }

        // force collapse on page load
        // this.$collapsible2.trigger(CollapsibleEvents.click);
    }

    /**
     * Inject ID into the pagination link
     */
    injectPaginationLink() {
        const $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
        const $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

        if ($nextLink.length) {
            $nextLink.attr('href', `${$nextLink.attr('href')} #product-reviews`);
        }

        if ($prevLink.length) {
            $prevLink.attr('href', `${$prevLink.attr('href')} #product-reviews`);
        }
    }

    registerValidation(context) {
        this.context = context;
        this.validator.add([{
            selector: '[name="revrating"]',
            validate: 'presence',
            errorMessage: this.context.reviewRating,
        }, {
            selector: '[name="revtitle"]',
            validate: 'presence',
            errorMessage: this.context.reviewSubject,
        }, {
            selector: '[name="revtext"]',
            validate: 'presence',
            errorMessage: this.context.reviewComment,
        }, {
            selector: '[name="email"]',
            validate: (cb, val) => {
                const result = forms.email(val);
                cb(result);
            },
            errorMessage: this.context.reviewEmail,
        }]);

        return this.validator;
    }

    validate() {
        return this.validator.performCheck();
    }
}
