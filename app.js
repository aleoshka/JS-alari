const user = {
    name: 'Anton',
    id: 1,
    roles: ['Admin']
};

// const newUser = Object.assign({}, user);
// user.name = 'NewUser';
// console.log(user);
// console.log(newUser);

const newUser2 = {
    ...user
};
newUser2.name = 'NewUser';
newUser2.roles.push('User');
console.log(user);
console.log(newUser2);