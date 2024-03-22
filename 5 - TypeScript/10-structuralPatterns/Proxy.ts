namespace ProxyNamespace{
    interface IPaymentAPI{ // интерфейс нашего изначального класса
        getPaymentDetail(id: number): IPaymentDetail | undefined;
    }

    interface IPaymentDetail{ // просто интерфейс
        id: number;
        sum: number;
    }

    class PaymentAPI implements IPaymentAPI{ // изначальный класс
        private data = [{id: 1, sum: 10000}];

        getPaymentDetail ( id: number ): IPaymentDetail | undefined {
            return this.data.find(d => d.id == id);
        }
    }

    class PaymentAccessProxy implements IPaymentAPI{ // proxy класс с дополнительной логикой
        constructor(private api: PaymentAPI, private userId: number){} // обязательно тут получаем это api и дальше работаем с ним

        getPaymentDetail ( id: number ): IPaymentDetail | undefined {
            if(this.userId == 1){
                return this.api.getPaymentDetail(id);
            }
            console.log('alien user!');
            return undefined;
        }
    }

    // пример взаимодействия
    const paymentProxy = new PaymentAccessProxy(new PaymentAPI(), 1);
    const paymentProxy2 = new PaymentAccessProxy(new PaymentAPI(), 234);

    console.log(paymentProxy.getPaymentDetail(1));
    console.log(paymentProxy.getPaymentDetail(2));
    console.log(paymentProxy2.getPaymentDetail(1));
    console.log(paymentProxy2.getPaymentDetail(2));
}