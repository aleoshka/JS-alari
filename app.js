const tasks = ['Задача 1'];

function addTask(task) {
    tasks.push(task);
}

const delByName = function (task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1);
}

const shiftToTop = task => {
    const result = delByName(task);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
}

addTask('Задача 2');
addTask('Задача 3');
console.log(tasks);

delByName('Задача 2');
console.log(tasks);

shiftToTop('Задача 3');
console.log(tasks);

