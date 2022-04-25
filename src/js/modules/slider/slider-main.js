import Slider from './slider';


export default class MainSlider extends Slider {
    constructor(btns, mainNext, mainPrev) {
        super(btns, mainNext, mainPrev);
    }

    showSlides(n) {
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        if (n > this.slides.length) {
            this.slideIndex = 1;

        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        try {
            this.slides[this.slideIndex - 1].style.display = 'block';

        } catch (e) {

        }





        try {
            if (this.slideIndex === 3) {

                setTimeout(() => {

                    try {
                        this.hanson.style.opacity = 1;
                        this.hanson.classList.add('animated', 'fadeInUp');
                    } catch (e) {

                    }

                }, 3000);

            } else {
                this.hanson.style.opacity = 0;
                this.hanson.classList.remove('fadeInUp');

            }

        } catch (e) {

        }

    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }


    nextPrevslide(btn, i) {
        btn.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(i);
            });
            if (this.btns) {
                item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                });
            }
        });
    }

    render() {
        if (this.container) {
            this.hanson = document.querySelector('.hanson');
            if (this.mainPrev) {
                this.nextPrevslide(this.mainPrev, -1);
                this.nextPrevslide(this.btns, 1);
                this.showSlides(this.slideIndex);

            } else {
                this.nextPrevslide(this.btns, 1);
            }
            this.showSlides(this.slideIndex);
        }

    }
}