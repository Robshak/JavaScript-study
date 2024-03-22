namespace Composite{
    abstract class DeliveryItem { // абстрактный класс, от которого всё будет наследоваться
        items: DeliveryItem[] = [];

        addItem(item: DeliveryItem){
            this.items.push(item);
        }

        protected getItemPrices():number {
            return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0);
        }

        abstract getPrice(): number;
    }

    class DeliveryShop extends DeliveryItem{ // объект с которым мы планируем взаимодействовать
        constructor(private deliveryFee: number){
            super();
        }

        getPrice (): number {
            return this.getItemPrices() + this.deliveryFee;
        }
    }

    class Package extends DeliveryItem{ // объект с которым мы планируем взаимодействовать
        getPrice (): number {
            return this.getItemPrices()
        }
    }

    class Product extends DeliveryItem{ // объект с которым мы планируем взаимодействовать
        constructor(public price: number){
            super();
        }

        getPrice (): number {
            return this.price;
        }
    }


    // пример взаимодействия
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
}