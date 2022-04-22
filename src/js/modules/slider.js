export default class SLider {
    constructor(page, btns, timeBlock) {
        this.page = document.querySelector(page);
        this.btns = document.querySelectorAll(btns);
        this.slides = this.page.children;
        this.slideIndex = 1;

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

        this.slides[this.slideIndex - 1].style.display = 'block';



        try {
            if (this.slideIndex === 3) {
                setTimeout(() => {
                    this.hanson.style.opacity = 1;
                    this.hanson.classList.add('animated', 'fadeInUp');
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

    render() {
        try {
            this.hanson = document.querySelector('.hanson');

        } catch (e) {

        }
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });


            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);


            });


        });

        this.showSlides(this.slideIndex);

    }
}