
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }


let sliderNames = ["<span>01</span> Intro", "<span>02</span> Work", "<span>03</span> About", "<span>04</span> Contacts"]

if (document.querySelector('.main-slider__body')) {
    let mainSlider = new Swiper('.main-slider__body', {
        slidesPerView: 1,
        allowTouchMove: true,
        speed: 800,
        loop: true,
        preloadImages: false,
        parallax: true,
        autoHeight: true,
        autoplay: {
            delay: 4200,
            disableOnInteraction: false,
        },
        //Dotts
        pagination: {
            el: '.controls-slider__dotts',
            disableOnInteraction: true,
            clickable: false,
            renderBullet: function (index, className) {
                return `<span class="${className}">${sliderNames[index]}</span>`;
            }
        },
    });
}

if (document.querySelector('.slider__body')) {
    let mainSlider = new Swiper('.slider__body', {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        reloadImages: false,
        autoplay: {
            delay: 4200,
        },
        navigation: {
            nextEl: '.slider__arrow_next',
            prevEl: '.slider__arrow_prev',
        },
    });
}

