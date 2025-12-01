import $ from 'jquery';
import 'jquery-zoom';
import _ from 'lodash';
import 'fancybox';

export default class ImageGallery {
    constructor($gallery) {
        this.$mainImage = $gallery.find('[data-image-gallery-main]');
        this.$thumbnailsImage = $gallery.find('.productView-thumbnails');
        this.$buttonNextImage = $gallery.find('.slick-next');
        this.$buttonPrevImage = $gallery.find('.slick-prev');
        this.$selectableImages = $gallery.find('[data-image-gallery-item]');
        this.$swipThumbnails = $gallery.find('.productView-for.slick-slider');
        this.currentImage = {};
    }

    init() {
        this.bindEvents();
        this.setImageZoom();
        this.fancyboxZoom();
    }

    setMainImage(imgObj) {
        this.currentImage = _.clone(imgObj);
        this.setActiveThumb();
        this.swapMainImage();
    }

    setAlternateImage(imgObj) {
        if (!this.savedImage) {
            this.savedImage = {
                mainImageUrl: this.$mainImage.find('img').attr('src'),
                zoomImageUrl: this.$mainImage.attr('data-zoom-image'),
                $selectedThumb: this.currentImage.$selectedThumb,
            };
        }
        this.setMainImage(imgObj);
    }

    restoreImage() {
        if (this.savedImage) {
            this.setMainImage(this.savedImage);
            delete this.savedImage;
        }
    }

    selectNewImage(e) {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const imgObj = {
            mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
            zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
            $selectedThumb: $target,
        };

        this.setMainImage(imgObj);
    }

    selectNewImage2(e) {
        const $target = $(e.currentTarget).find('.slick-current [data-image-gallery-item]');
        const imgObj = {
            mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
            zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
            $selectedThumb: $(e.currentTarget).find('.slick-current'),
        };
        this.setMainImage(imgObj);
    }

    clickButtonSlick(e) {
        e.preventDefault();
        const $target = this.$thumbnailsImage.find('.slick-current [data-image-gallery-item]');
        const imgObj = {
            mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
            zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
            $selectedThumb: $(e.currentTarget).find('.slick-current'),
        };
        this.setMainImage(imgObj);
    }

    setActiveThumb() {
        this.$selectableImages.removeClass('is-active');
        if (this.currentImage.$selectedThumb) {
            this.currentImage.$selectedThumb.addClass('is-active');
        }
    }

    swapMainImage() {
        this.$mainImage.find('img.zoomImg').attr({src: this.currentImage.zoomImageUrl});

        this.$mainImage.attr({ 'data-zoom-image': this.currentImage.zoomImageUrl, })
            .find('a').attr({href: this.currentImage.mainImageUrl})
            .find('img').attr({src: this.currentImage.mainImageUrl});
    }

    checkImage() {
        const containerHeight = $('.productView-image').height();
        const containerWidth = $('.productView-image').width();
        const height = this.easyzoom.data('easyZoom').$zoom.context.height;
        const width = this.easyzoom.data('easyZoom').$zoom.context.width;
        if (height < containerHeight || width < containerWidth) {
            this.easyzoom.data('easyZoom').hide();
        }
    }

    setImageZoom() {
        if ($(window).width() > 1024) {
            this.$mainImage.zoom({ url: this.$mainImage.attr('data-zoom-image'), touch: false });
        }
    }

    imageSwap() {
      const $this = $(this).find('img[data-src-swap]');
      const newSource = $this.data('src-swap');
      $this.data('src-swap', $this.attr('src'));
      $this.attr('src', newSource);
   }

    bindEvents() {
        this.$selectableImages.on('click', this.selectNewImage.bind(this));
        this.$selectableImages.on('mouseenter', this.selectNewImage.bind(this));

        // click arrows
        this.$buttonPrevImage.on('click', this.clickButtonSlick.bind(this));
        this.$buttonNextImage.on('click', this.clickButtonSlick.bind(this));

        this.$swipThumbnails.on('afterChange', this.selectNewImage2.bind(this));

    }

    fancyboxZoom() {
        $('[data-fancybox]').fancybox({
            mobile : {
                clickContent : "close",
                clickSlide : "close"
            },
            buttons: [
                "zoom",
                //"share",
                "slideShow",
                //"fullScreen",
                //"download",
                // "thumbs",
                "close"
            ]
        });
    }
}
