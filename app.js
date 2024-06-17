const transactionsInUsd = [10, -7, 50, -10, 100];

const transactionsInRub = [];
for (const transaction of transactionsInUsd) {
    transactionsInRub.push(transaction * 60);
}

// console.log(transactionsInUsd);
// console.log(transactionsInRub);

const transactionsInRub2 = transactionsInUsd
    .map((transaction, i) => {
        console.log(i);
        return transaction * 60;
    });

console.log(transactionsInUsd);
console.log(transactionsInRub2);