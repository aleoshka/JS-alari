'use strict';

let succesMessage = 'Успех';
const user = {
    name: 'Вася',
    roles: []
};

function addRole(user, role) {
    if (role == 'admin') {
        const message = 'Ошибка';
        console.log(message);
        return user;
    }
    user.roles.push(role);
    let succesMessage = 'Ура';
    console.log(succesMessage);

    function logRoles() {
        console.log(user.roles);
    }
    logRoles();
    return user;
}

console.log(addRole(user, 'dev'));
console.log(succesMessage);