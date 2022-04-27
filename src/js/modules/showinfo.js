export default class Showinfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.querySelector('svg').children[0].classList.add('animated', 'rotateOutDownLeft');


                const sibling = btn.closest('.module__info-show').nextElementSibling;
                sibling.style.marginTop = '20px';
                sibling.classList.toggle('msg');
                if (sibling.classList.contains('msg')) {
                    btn.querySelector('svg').children[0].classList.remove('rotateOutDownLeft');
                    btn.querySelector('svg').children[0].classList.add('rotateInUpLeft');



                }
            });

        });
    }



}