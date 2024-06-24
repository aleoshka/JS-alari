'use strict';

// console.log(this);
// console.log(window);

const user = {
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: 20,
    getUserInfo: function () {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Можно пить');
            } else {
                console.log('Nе может пить');
            }
        }
        const self = this;
        function canDrink() {
            if (this.age >= 18) {
                console.log('Можно пить');
            } else {
                console.log('Nе может пить');
            }
        }
        canDrink();
    },
    getUserInfoArrow: () => {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

user.getUserInfo();
// user.getUserInfoArrow();