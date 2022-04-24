import Slider from "./slider";


export default class SliderMini extends Slider {
    constructor(next, prev, container, activeClass, animate, autoplay) {
        super(next, prev, container, activeClass, animate, autoplay);
    }




    bindTriggers() {


        this.prev.addEventListener('click', () => {
            this.item = this.slides.splice(this.slides.length - 1, 1)[0];
            this.slides.unshift(this.item);
            this.container.insertBefore(this.item, this.slides[1]);
            this.decorizeSlides();
        });

    }

    nextSlide() {
        this.next.addEventListener('click', () => {

            this.container.appendChild(this.slides[0]);
            this.item = this.slides.splice(0, 1)[0];
            this.slides.splice(this.slides.length, 1, this.item);
            this.decorizeSlides();

        });

    }

    decorizeSlides() {

        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
                slide.querySelector('.card__title').style.opacity = '0.4';
            }

        });

        this.slides[0].classList.add(this.activeClass);





        if (this.animate) {

            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
            this.slides[0].querySelector('.card__title').style.opacity = '1';
        }



    }


    loops() {
        this.timer = setTimeout(() => {
            this.next.click();
            this.loops();
        }, 4000);
    }








    init() {

        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: start;
        
        `;



        this.bindTriggers();
        this.nextSlide();
        this.decorizeSlides();

        if (this.autoplay) {
            this.timer = '';
            this.loops();

            
            this.container.addEventListener('mouseover', () => {
                console.log(this.timer);
                clearInterval(this.timer);
            });

            this.container.addEventListener('mouseout', () => {
                this.loops();
            });








            // setInterval(() => this.next.click(), 4000);


        }

    }




}