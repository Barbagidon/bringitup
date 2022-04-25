export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        try {
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldItems = this.oldOfficer.querySelectorAll(items);

        } catch (e) {

        }

        this.oldCounter = 0;
        this.newCounter = 0;
        this.items = items;
    }



    hideContent(arr) {
        try {
            arr.forEach((item, i, arr) => {
                if (item != arr[arr.length - 1]) {
                    item.style.display = 'none';
                }
            });
        } catch (e) {

        }

    }

    bindTriggers(container, counter, items) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[items.length - 1].style.display = 'none';
                items[counter].style.display = 'flex';
            }
        });


    }



    init() {
        try {
            this.hideContent(this.newItems);
            this.hideContent(this.oldItems);
            this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems);
            this.bindTriggers(this.newOfficer, this.newCounter, this.newItems);
        } catch (e) {

        }


    }
}