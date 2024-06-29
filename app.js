'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').style.display = 'block';
    // document.querySelector('.notification').classList.add('notification_active');
    // document.querySelector('.notification').classList.remove('notification_hidden');
    console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('class', 'notification');
    document.querySelector('.notification').setAttribute('key', 1);
    document.querySelector('.notification').setAttribute('user-id', 1);
    console.log(Number(document.querySelector('.notification').getAttribute('user-id')));
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}

localStorage.setItem('token', 'сау');
localStorage.setItem('token1', 1);
localStorage.setItem('token1', true);
const token1 = localStorage.getItem('token1');
console.log(typeof token1);
localStorage.removeItem('token1');
localStorage.clear();


