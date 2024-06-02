const res = prompt('Сколько будет 7 + или - 15?');

// console.log(Number(message) === -8 ? 'Успех'
//     : Number(message) === 22 ? 'Успех'
//         : message === 'Я не робот' ? 'Успех'
//             : 'Вы робот!');

switch (true) {
    case res === 'Я не робот': /* || Number(res) === 22 || Number(res) === -8: */
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот!');
        break;
}