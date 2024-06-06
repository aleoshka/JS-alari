const arr = ['!', 'JS', 'люблю', 'Я'];
let newArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}

console.log(newArr.join(' '));

console.log(arr.reverse().join(' '));