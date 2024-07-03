'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY'

/* page */
const page = {
    menu: document.querySelector('.menu__list')
}

/* utils */
function getData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitsArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitsArray)) {
        habbits = habbitsArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* render */
function rerenderMenu(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            const element = document.createElement('button');
            element.classList.add('menu__item');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.innerHTML = `<img src="images/${habbit.icon}.svg" alt="${habbit.name}" />`
            if (activeHabbit.id === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            element.addEventListener('click', () => rerender(habbit));
        } else if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerender(activeHabbit) {
    rerenderMenu(activeHabbit);
}

/* init */
(() => {
    getData();
    rerenderMenu(habbits[0]);
})();
