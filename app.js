const arr = [1, 4, 8, 7, 'стринк'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let element of arr) {
    console.log(element);
}

for (const index in arr) {
    console.log(index);
}