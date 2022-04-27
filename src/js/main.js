import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from './modules/playVideo';
import SliderMini from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Forms from './modules/forms';
import Mask from './modules/mask';
import Showinfo from './modules/showinfo';
import Download from './modules/download';


window.addEventListener('DOMContentLoaded', () => {

    const slider = new MainSlider({
        btns: '.next',
        container: '.page'
    });
    slider.render();


    const modulePageSlider = new MainSlider({
        container: '.moduleapp',
        mainPrev: '.module__info .prev',
        btns: '.next'
    });

    modulePageSlider.render();



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



    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();
    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Forms('.join__evolution form').init();
    new Forms('.schedule__form form').init();
    new Mask('input[name="phone"]').init();
    new Showinfo('.module__info-show .plus').init();
    new Download('.download').init();







});