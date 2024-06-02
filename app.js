const bmwX3 = 100000;
const fordFocus = 10000;
const budget = 30000;

let message = budget > bmwX3 ? 'BMW' : budget > fordFocus ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${message}`);