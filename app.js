'use strict';

// addEventListener('load', () => {
//     console.log(document.head);
// })

const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text';
document.querySelector('.input').value = 'Text';

