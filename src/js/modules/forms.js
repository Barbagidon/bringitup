export default class Forms {
    constructor(form) {
        this.form = document.querySelector(form);
        try {
            this.inputs = this.form.querySelectorAll('input');
        } catch (e) {

        }

        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Мы с вами свяжемся!',
            failure: 'Что - то пошло не так...'

        };

    }

    async postFetch(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });
        return await res.text();
    }



    postDataSettings() {
        this.inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.getAttribute('name') === 'email') {
                    if (input.value.match(/[а-яё]/)) {
                        input.value = "";
                        input.blur();
                    }
                }
            });

        });

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.style.cssText = `
            font-family: Mark;
            margin-top: 15px;
            font-size: 15px;
            color: black;
            text-align: center;

            
            `;
            this.form.parentNode.appendChild(statusMessage);
            statusMessage.textContent = this.message.loading;


            const data = new FormData(this.form);
            this.postFetch('assets/question.php', data)
                .then(res => {
                    

                    statusMessage.textContent = this.message.success;

                })
                .then(() => {

                })
                .catch(() => {
                    statusMessage.textContent = this.message.failure;
                })
                .finally(() => {
                    this.inputs.forEach(input => {
                        input.value = '';

                    });
                    setTimeout(() => {
                        statusMessage.remove();

                    }, 6000);

                });
        });

    }







    init() {
        try {
            this.postDataSettings();
        } catch (e) {

        }


    }
}