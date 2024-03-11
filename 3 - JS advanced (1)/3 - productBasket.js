'use strict';

const Basket = function() {
    this.products = new Map();
}

Basket.prototype.addProduct = function(product){
    if(this.products.has(product.id) || product.count == 0){
        return;
    }
    this.products.set(product.id, product);
}

Basket.prototype.upValue = function(productId, cnt){
    if(!this.products.has(productId)){
        return;
    }
    const product = this.products.get(productId);
    product.count += cnt;
    this.products.set(productId, product);
}

Basket.prototype.downValue = function(productId, cnt){
    if(!this.products.has(productId)){
        return;
    }
    const product = this.products.get(productId);
    product.count -= cnt;
    this.products.set(productId, product);
    if(product.count <= 0){
        this.products.delete(productId);
    }
}

const product1 = {
    id: 1,
    name: 'Bread',
    count: 2
}

const product2 = {
    id: 2,
    name: 'Milk',
    count: 10
}

const product3 = {
    id: 3,
    name: 'Butter',
    count: 1
}

const myBasket = new Basket;

myBasket.addProduct(product1);
myBasket.addProduct(product2);
myBasket.addProduct(product3);

myBasket.upValue(1, 13);
myBasket.downValue(1, 30);

console.log(myBasket);