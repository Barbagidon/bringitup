export default class VideoPlayer {
    constructor(trigger, overlay) {
        this.btns = document.querySelectorAll(trigger);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindTriggers();
        this.closeTriggers();


    }

    closeTriggers() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });

    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const path = btn.getAttribute('data-url');

                if (document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';

                } else {
                    this.overlay.style.display = 'flex';
                    this.createPlayer(path);
                }

               
            });

        });

    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
        });

    }
}