export default class Mask {
    constructor(input) {
        this.input = document.querySelector(input);

    }


    phoneMask() {


        let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            }
            if (elem.createTextRange) {
                let range = elem.createTextRange();

                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();

            }


        };

        let matrix = '+1 (___) ___-____',
            def = matrix.replace(/\D/g, ""),
            val = this.input.value.replace(/\D/g, ""),
            i = 0;
        if (val.length < def.length) {
            val = def;
        }

        this.input.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });



        if (this.input.value.charAt(1) != '1') {
            this.input.value = '';
            this.input.blur();
        }

        if (event.type === 'blur') {
            if (this.input.value.length < 2) {
                this.input.value = '';
            }
        } else {
            setCursorPosition(this.input.value.length, this.input);
        }


    }

    setEvent(event) {
        this.input.addEventListener(event, () => {
            this.phoneMask();

        });

    }


    init() {
        try {
            this.setEvent("input");
            this.setEvent("click");
            this.setEvent("focus");
            this.setEvent("blur");
        } catch (e) {

        }




    }
}