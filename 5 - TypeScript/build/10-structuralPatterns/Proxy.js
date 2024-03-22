"use strict";
var ProxyNamespace;
(function (ProxyNamespace) {
    class PaymentAPI {
        constructor() {
            this.data = [{ id: 1, sum: 10000 }];
        }
        getPaymentDetail(id) {
            return this.data.find(d => d.id == id);
        }
    }
    class PaymentAccessProxy {
        constructor(api, userId) {
            this.api = api;
            this.userId = userId;
        }
        getPaymentDetail(id) {
            if (this.userId == 1) {
                return this.api.getPaymentDetail(id);
            }
            console.log('alien user!');
            return undefined;
        }
    }
    const paymentProxy = new PaymentAccessProxy(new PaymentAPI(), 1);
    const paymentProxy2 = new PaymentAccessProxy(new PaymentAPI(), 234);
    console.log(paymentProxy.getPaymentDetail(1));
    console.log(paymentProxy.getPaymentDetail(2));
    console.log(paymentProxy2.getPaymentDetail(1));
    console.log(paymentProxy2.getPaymentDetail(2));
})(ProxyNamespace || (ProxyNamespace = {}));
