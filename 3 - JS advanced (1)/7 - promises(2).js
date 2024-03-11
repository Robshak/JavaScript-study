'use strict';

const prom = new Promise((resolve, reject) => {
    console.log(123);
    resolve('Success');
    // reject(new Error('Error'));
});

// console.log(prom);

prom
    .then(data => console.log(data))
    .catch(data => console.log(data));


function timeout(sec){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, sec * 1000);
    })
}

timeout(1).then(() => console.log(1));