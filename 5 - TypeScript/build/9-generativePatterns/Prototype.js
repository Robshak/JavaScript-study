"use strict";
var Prototype;
(function (Prototype) {
    class UserHistory {
        constructor(email, name) {
            this.email = email;
            this.name = name;
            this.createdAt = new Date();
        }
        clone() {
            let target = new UserHistory(this.email, this.name);
            target.createdAt = this.createdAt;
            return target;
        }
    }
    const userHistory = new UserHistory('Bob@gmail.com', 'Bob');
    const userHistory2 = userHistory.clone();
    console.log(userHistory2);
})(Prototype || (Prototype = {}));
