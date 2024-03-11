'use strict';

async function getAllProducts(){
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

async function getProduct(id){
    const res = await fetch('https://dummyjson.com/products/' + id);
    const product = await res.json();
    return product;
}

async function main(){
    const products = (await getAllProducts()).products;
    const promises = [];
    for(const product of products){
        // console.log(await getProduct(product.id));
        promises.push(getProduct(product.id));
    }
    const res = await Promise.all(promises);
    console.log(res);
}

main();