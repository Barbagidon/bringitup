export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        mainPrev = null,
        activeClass = '',
        animate,
        autoplay
    } = {}) {
        this.container = document.querySelector(container);
        this.btns = document.querySelectorAll(btns);
        this.mainPrev = document.querySelectorAll(mainPrev);
        this.slides = [];
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;

        try {
            this.x = () => {
                this.container.children.forEach(item => {
                    if (item.tagName != 'BUTTON') {
                        this.slides.push(item);
                    }
                });
            };
            this.x();

        } catch (e) {

        }



    }




}