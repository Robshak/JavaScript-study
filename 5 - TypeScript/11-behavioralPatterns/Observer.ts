namespace Observer{
    interface IObserver{ // интерфейс подписчика
        update(subject: ISubject): void;
    }

    interface ISubject{ // интерфейс объекта, на которой можно подписаться
        attach(observer: IObserver): void;
        detach(observer: IObserver): void;
        notify(): void;
    }

    class Lead{ // класс для демонстрации
        constructor(public name: string, public phone: string){}
    }

    class NewLead implements ISubject{ // класс, на который можно подписаться
        private observers: IObserver[] = [];
        public state: Lead;

        attach ( observer: IObserver ): void { // подписка
            if(this.observers.includes(observer)){
                return;
            }
            this.observers.push(observer);
        }

        detach ( observer: IObserver ): void { // отписка
            const observerIndex = this.observers.indexOf(observer);
            if(observerIndex == -1){
                return;
            }
            this.observers.splice(observerIndex, 1);
        }

        notify (): void { // уведомление
            for(const observer of this.observers){
                observer.update(this);
            }
        }
    }

    class NotificationServise implements IObserver{ // класс - подписчик
        update ( subject: ISubject ): void {
            console.log('NotificationServise got notification');
            console.log(subject);
        }
    }

    class LeadServise implements IObserver{ // класс - подписчик
        update ( subject: ISubject ): void {
            console.log('LeadServise got notification');
            console.log(subject);
        }
    }


    // пример взаимодействия
    const subject = new NewLead();
    subject.state = new Lead('Bob', '124');
    const s1 = new NotificationServise();
    const s2 = new LeadServise();

    subject.attach(s1);
    subject.attach(s2);
    subject.notify();
    subject.detach(s1);
    subject.notify();
}