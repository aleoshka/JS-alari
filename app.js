'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.remove('notification_hidden');
    const textString = JSON.stringify({
        text: input
    });
    localStorage.setItem('text', textString);

}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}

