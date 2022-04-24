import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from './modules/playVideo';
import SliderMini from './modules/slider/slider-mini';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        btns: '.next',
        container: '.page'
    });
    slider.render();

    const showupSlider = new SliderMini({
        next: '.showup__next',
        prev: '.showup__prev',
        container: '.showup__content-slider',
        activeClass: 'card-active',
        animate: true,

    });

    showupSlider.init();

    const modulesSlider = new SliderMini({
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        container: '.modules__content-slider',
        activeClass: 'card-active',
        animate: true,
        autoplay: true,

    });

    modulesSlider.init();

    const feedSlider = new SliderMini({
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        container: '.feed__slider',
        activeClass: 'feed__item-active',
        

    });

    feedSlider.init();



    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();




});