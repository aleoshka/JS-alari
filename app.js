const secretNumber = '7';

// использовать
if (Number(secretNumber) === 7) {
    console.log('Угадал строго');
}

// не использовать
if (secretNumber == 7) {
    console.log('Угадал нестрого');
}

const q = Number(prompt('Введите число: '));
if (q === 7) {
    console.log('!');
}