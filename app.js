/*
    Сделать объект склад с методами добавления на склад, поиска
    по складку товара и расчёт веса
*/
const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(g => g.id == id);
    },
    addGood: function (good) {
        const existedGood = this.findGoodById(good.id);
        if (existedGood) {
            console.log('Этот товар уже существует');
            return;
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) =>
            acc += el.weight?.kg ? el.weight.kg : 0, 0
        )
    }
};

/* товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 3
    },
};

const paper = {
    id: 3,
    color: 'red'
};

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
console.log(warehouse.findGoodById(6));
console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeightKg());


