/* вытащить имя и фамилию в отдельные перемнные */
const fullUserName = 'Вася aka Terminator Perdinator Пупкин';

const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
console.log(userName);
const surname = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1);
console.log(surname);