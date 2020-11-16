(function ($) {
    //FIRST SECTION SLIDER
    function first_slider_init() {

        let $slider_for = $('.moto-slider-for');
        let $slider_nav = $('.moto-slider-nav');

        $slider_for.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            asNavFor: $('.moto-slider-nav')
        });
        $slider_nav.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor: $('.moto-slider-for'),
            vertical: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        vertical: false,
                        slidesToShow: 3,
                    }
                },
            ]
        });
    }

    function first_slider_destroy() {
        let $slider_block = $('.moto-slider-for');
        if ($slider_block.hasClass('slick-slider')) {
            $slider_block.slick('unslick');
        }
    }

    function first_slider_enable() {
        first_slider_destroy();
        first_slider_init();
    }


    //VIDEO SECTION SLIDER
    function video_slider_init() {

        let $slider_block = $('.moto-video-wrap');
        $slider_block.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrow: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    function video_slider_destroy() {
        let $slider_block = $('.moto-video-wrap');
        if ($slider_block.hasClass('slick-slider')) {
            $slider_block.slick('unslick');
        }
    }

    function video_slider_enable() {
        video_slider_destroy();
        video_slider_init();
    }

    //review SECTION SLIDER
    function review_slider_init() {

        let $slider_for = $('.moto-review-slider-for');
        let $slider_nav = $('.moto-review-slider-nav');

        $slider_for.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            asNavFor: $('.moto-review-slider-nav')
        });
        $slider_nav.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor: $('.moto-review-slider-for'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }

    function review_slider_destroy() {
        let $slider_block = $('.moto-review-slider-for');
        if ($slider_block.hasClass('slick-slider')) {
            $slider_block.slick('unslick');
        }
    }

    function review_slider_enable() {
        review_slider_destroy();
        review_slider_init();
    }

    function open_more_models () {
        let $remaining_models = $('.moto-models-wrap .moto-remaining');

        $(document).on('click', '.moto-more-link', function () {
            $remaining_models.toggleClass('moto-hidden');
        })
    }

    $(document).ready(function () {
        first_slider_enable();
        video_slider_enable();
        review_slider_enable();

        open_more_models ();
    });

    video_slider_enable();
    $(window).resize(function () {
        first_slider_enable();
        video_slider_enable();
        review_slider_enable();
    });

})(jQuery);