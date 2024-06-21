const cities = {
    msk: {
        temp: {
            celcius: 25
        }
    },
    spb: {

    }
};

const city = 'krd';
if (cities[city] /* != undefined */ && cities[city].temp /* != undefined */) {
    console.log(cities[city].temp.celcius);
}

console.log(cities[city]?.temp?.celcius);