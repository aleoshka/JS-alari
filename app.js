const tasks = ['Задача 1'];

function addTask(task) {
    tasks.push(task);
}

const delByName = function (task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}

const shiftToTop = task => {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
};

addTask('Задача 2');
addTask('Задача 3');
console.log(tasks);

delByName('Задача 4');
console.log(tasks);

shiftToTop('Задача 4');
console.log(tasks);

