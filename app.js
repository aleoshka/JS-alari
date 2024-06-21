// const arr = [1, 3, 4];
// const [z, x, y] = arr;
// console.log(y);

let user = {
    name: 'Вася',
    age: 30,
    city: 'Москва'
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '2344-4141-4312-5321'
};
user.test = 'sfds';

// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;

// user = {
//     ...user,
//     ...additionalData
// };
console.log(user);