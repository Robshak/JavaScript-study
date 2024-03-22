"use strict";
var Composite;
(function (Composite) {
    class DeliveryItem {
        constructor() {
            this.items = [];
        }
        addItem(item) {
            this.items.push(item);
        }
        getItemPrices() {
            return this.items.reduce((acc, i) => acc += i.getPrice(), 0);
        }
    }
    class DeliveryShop extends DeliveryItem {
        constructor(deliveryFee) {
            super();
            this.deliveryFee = deliveryFee;
        }
        getPrice() {
            return this.getItemPrices() + this.deliveryFee;
        }
    }
    class Package extends DeliveryItem {
        getPrice() {
            return this.getItemPrices();
        }
    }
    class Product extends DeliveryItem {
        constructor(price) {
            super();
            this.price = price;
        }
        getPrice() {
            return this.price;
        }
    }
    const shop = new DeliveryShop(100);
    const pack1 = new Package();
    pack1.addItem(new Product(500));
    pack1.addItem(new Product(200));
    const pack2 = new Package();
    pack2.addItem(new Product(70));
    pack2.addItem(new Product(20));
    pack2.addItem(new Product(20000));
    pack1.addItem(pack2);
    shop.addItem(new Product(1000));
    shop.addItem(new Product(1));
    shop.addItem(pack1);
    console.log(shop.getPrice());
})(Composite || (Composite = {}));
