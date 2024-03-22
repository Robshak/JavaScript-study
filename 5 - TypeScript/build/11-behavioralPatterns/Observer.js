"use strict";
var Observer;
(function (Observer) {
    class Lead {
        constructor(name, phone) {
            this.name = name;
            this.phone = phone;
        }
    }
    class NewLead {
        constructor() {
            this.observers = [];
        }
        attach(observer) {
            if (this.observers.includes(observer)) {
                return;
            }
            this.observers.push(observer);
        }
        detach(observer) {
            const observerIndex = this.observers.indexOf(observer);
            if (observerIndex == -1) {
                return;
            }
            this.observers.splice(observerIndex, 1);
        }
        notify() {
            for (const observer of this.observers) {
                observer.update(this);
            }
        }
    }
    class NotificationServise {
        update(subject) {
            console.log('NotificationServise got notification');
            console.log(subject);
        }
    }
    class LeadServise {
        update(subject) {
            console.log('LeadServise got notification');
            console.log(subject);
        }
    }
    const subject = new NewLead();
    subject.state = new Lead('Bob', '124');
    const s1 = new NotificationServise();
    const s2 = new LeadServise();
    subject.attach(s1);
    subject.attach(s2);
    subject.notify();
    subject.detach(s1);
    subject.notify();
})(Observer || (Observer = {}));
