// class Product{
//     id: number;
//     name: string;
//     price: number;

//     constructor(id: number, name: string, price: number){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }

// class DeliveryToHome{
//     date: number;
//     adress: string;

//     constructor(date: number, adress:string){
//         this.date = date;
//         this.adress = adress;
//     }
// }

// class DeliveryToPlace{
//     date: number = new Date().getDay();
//     shopId: number;

//     constructor(shopId: number){
//         this.shopId = shopId;
//     }
// }

// interface IProductInCart{
//     productId: number;
//     count: number;
//     price: number;
// }

// class Cart{
//     private products: IProductInCart[] = [];
//     private deliveryParam: DeliveryToHome | DeliveryToPlace;

//     addProduct(product: Product, count: number): void{
//         let flag: boolean = false;
//         for(let i:number = 0; i < this.products.length; i++){
//             const productId: number = this.products[i].productId;
//             if(product.id == productId){
//                 this.products[i].count += count;
//                 flag = true;
//                 break;
//             }
//         }
//         if(!flag){
//             this.products.push({
//                 productId: product.id,
//                 count: count,
//                 price: product.price
//             });
//         }
//     }

//     delProduct(productId: number, count: number):void {
//         let flag: boolean = false;
//         for(let i:number = 0; i < this.products.length; i++){
//             const productCartId: number = this.products[i].productId;
//             if(productId == productCartId){
//                 this.products[i].count -= count;
//                 if(this.products[i].count <= 0){
//                     this.products = this.products.filter((p) => p.productId != productId);
//                 }
//                 flag = true;
//                 break;
//             }
//         }
//     }

//     getSum():number {
//         let sum:number = 0;
//         for(const product of this.products){
//             sum += product.count * product.price;
//         }
//         return sum;
//     }

//     setDelivery(deliveryType: DeliveryToHome | DeliveryToPlace): void{
//         this.deliveryParam = deliveryType;
//     }

//     checkout():boolean {
//         if(this.deliveryParam != undefined && this.products.length > 0){
//             return true;
//         }
//         return false;
//     }
// }

// const myCart = new Cart();
// const product1 = new Product(1, 'tomato', 150);
// const product2 = new Product(2, 'banana', 200);
// const delivery1 = new DeliveryToHome(2, 'here');

// myCart.addProduct(product1, 23);
// myCart.addProduct(product2, 12);
// myCart.delProduct(product1.id, 20);

// console.log(myCart.getSum());
// console.log(myCart.checkout());

// myCart.setDelivery(delivery1);

// console.log(myCart.checkout());