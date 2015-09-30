$(document).ready(function() {
    // news slider
    (function() {
        var $slider = $('.b-slider.slider-news');

        $slider.slick({
            slidesToShow: 3,
            swipeToSlide: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    })();

    // kitchen slider
    (function() {

        var $slider = $('.b-slider.slider-kitchen .slider-list');

        $slider.each(function() {

            var $this = $(this);

            $this.slick({
                arrows: true,
                nextArrow: '<div class="slider-nav nav-right"></div>',
                prevArrow: '<div class="slider-nav nav-left"></div>',
                slidesToShow: 2,
                responsive: [
                    {
                        breakpoint: 850,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });

        });

    })();

    //popup
    (function() {

        var $popup = $('.js-popup');

        $popup.each(function() {

            var $this = $(this);
            if ($this.hasClass('popup-ajax')) {
                $this.magnificPopup({
                    type: 'ajax',
                    callbacks: {
                        ajaxContentAdded: function() {
                            console.log('ok');
                            $('.js-pickmeup').pickmeup();
                        }
                    }
                });
            }
        });

    })();
});

$(window).load(function() {
    // map
    (function() {

        $.getScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function(){
            ymaps.ready(init);
        });

        function init() {
            var behaviors = ['drag', 'dblClickZoom', 'multiTouch'];

            var point = {
                'coords': [59.938685,30.360038],
                'iconPath': 'img/map-marker.png',
                'iconSize': [38, 62],
                'iconOffset': [-19, -62]
            };

            var map = new ymaps.Map('map', {
                behaviors: behaviors,
                center: point.coords,
                zoom: 16,
                controls: []
            });

            map.geoObjects.add(new ymaps.Placemark(
                point.coords, {
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: point.iconPath,
                    iconImageSize: point.iconSize,
                    iconImageOffset: point.iconOffset
                }
            ));
        }
    })();

    // load bg
    (function() {
        $('html').addClass('js-load-bg');
    })();

    // instagram
    (function() {

        var $items = $('.instagram-image-holder'),
            itemCounter = 0;

        var setRandom = function () {
            var randomSeconds = Math.floor(Math.random()*5000) + 5000;
            return window.setTimeout(function () {
                var $item = $items.eq(itemCounter);
                if ( !$item.is(":visible")) {
                    itemCounter = 0;
                    $item = $items.eq(itemCounter);
                }

                $item.toggleClass('image-rotate');
                itemCounter+=1;
                setRandom();
            }, randomSeconds);
        };

        if ($items.length) {
            setRandom();
        }

    })();
});