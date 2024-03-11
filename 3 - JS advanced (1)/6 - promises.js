'use strict';

// const request = new XMLHttpRequest();
// request.open('GET', 'https://dummyjson.com/products');
// request.send();

// request.addEventListener('load', function(){
//     const data = JSON.parse(this.responseText);
//     const products = data.products;

//     let middlePrice = 0;

//     for(const product of products){
//         middlePrice += Number(product.price);
//     }

//     middlePrice /= products.length;
//     console.log(middlePrice);
// });


function getData(url, errorMessage){
    return fetch(url).then(
        response => {
            if(!response.ok){
                throw new Error(`${errorMessage} ${response.status}`);
            }
            return response.json();
        }
    );
}

getData('https://dummyjson.com/products', 'test message')
.then(({products}) => getData(`https://dummyjson.com/products/${products[0].id}`, 'second test message'))
.then(data => console.log(data))
.catch(error => {
    const element = document.querySelector('body');
    element.innerText = error;
});



// function createSelect(data){
//     const element = document.querySelector('body');
//     element.innerHTML = `<select>
//         ${data.map((el) => `<option value="${el}"> ${el} </option>`)}
//     </select>`;
// }

// function getCategories(){
//     fetch('https://dummyjson.com/products/categories').then(
//         response => response.json()
//     ).then(
//         (data) => {
//             createSelect(data);
//         }
//     ).catch(error => {
//         console.error(`Error: ${error}`);
//     })
// }

// getCategories();