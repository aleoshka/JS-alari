const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation);
//     }
// }
// console.log(positiveOperations);

const positiveOperations = operations.filter(operation => operation > 0);
console.log(positiveOperations);

const positiveRubOperations = operations
    .filter(operation => operation > 0)
    .map(operation => operation * 60);
console.log(positiveRubOperations);

