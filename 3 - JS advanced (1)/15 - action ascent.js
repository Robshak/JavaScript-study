'use strict';

const button = document.querySelector('.button')
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function (event) {
    console.log(1);
    this.style.backgroundColor = 'purple';
})

inner.addEventListener('click', function (event) {
    console.log(2);
    this.style.backgroundColor = 'white';
})

wrapper.addEventListener('click', function (event) {
    console.log(3);
    this.style.backgroundColor = 'gray';
})