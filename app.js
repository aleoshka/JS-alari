let balance = 1001;
let bonusBalance = 100;
let isBanned = false;
let isExist = false;
let isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
    && !isBanned
    && !isExist
    && isSelling;

console.log(`Can I buy the game? ${canBuy ? 'Yes' : 'No'}`);
