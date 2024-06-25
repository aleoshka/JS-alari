'use strict';
// IIFE

function init() {
    console.log('start');
}
init();

(function () {
    console.log('start IIFE');
    const a = 1;
})();

console.log(a);
