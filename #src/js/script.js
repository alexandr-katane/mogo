@@include('functions.js');
@@include('swiper.min.js');
@@include('sliders.js');
@@include('spoilers.js');
@@include('form.js');
@@include('scroll.js');

window.onscroll = function showHeader() {
    let header = document.querySelector(".header");

    if (window.pageYOffset > 20) {
        header.classList.add("_active");
    } else {
        header.classList.remove("_active");
    }
}


window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
        const targetElement = e.target;

        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active');
        }
    }

}


