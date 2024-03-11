'use strict';

function myFetch(url){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        
        request.addEventListener('load', function(){
            if(this.status > 400){
                reject(new Error(this.status));
            }
            resolve(this.responseText);
        })

        request.addEventListener('error', function(){
            reject(new Error(this.status));
        })

        request.addEventListener('timeout', function(){
            reject(new Error('timeout'));
        })
    })
}

myFetch('https://dummyjson.com/products')
    .then(response => console.log(JSON.parse(response)))
    .catch(error => console.log(error));