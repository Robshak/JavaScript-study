namespace Prototype{
    interface IPrototype<T>{
        clone(): T;
    }

    class UserHistory implements IPrototype<UserHistory>{ // класс
        createdAt: Date;

        constructor(public email: string, public name: string){
            this.createdAt = new Date();
        }

        clone(): UserHistory{ // метод обеспечивающий полное клонирование
            let target = new UserHistory(this.email, this.name);
            target.createdAt = this.createdAt;
            return target;
        }
    }

    // пример взаимодействия
    const userHistory = new UserHistory('Bob@gmail.com', 'Bob');
    const userHistory2 = userHistory.clone();
    console.log(userHistory2);
}