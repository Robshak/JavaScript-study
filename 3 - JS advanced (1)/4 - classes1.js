'use strict';

class User {
    #login;
    #_password;

    constructor(userName, password){
        this.#login = userName;
        this.#password = password;
    }

    #reversePassword(password){
        return [...password].reverse().join('');
    }

    set #password(pass) {
        this.#_password = this.#reversePassword(pass);
    }

    get #password(){
        return this.#reversePassword(this.#_password);
    }

    get userName() {
        return this.#login;
    }

    checkPassword(testPassword) {
        return testPassword === this.#password;
    }

    setPassword(oldPassword, newPassword) {
        if(this.checkPassword(oldPassword)){
            this.#password = newPassword;
            return true;
        }
        return false;
    }
}

const user1 = new User('Bob', '123');
console.log(user1.userName);
console.log(user1.checkPassword('123'));
console.log(user1.setPassword('123', 'wer'));
console.log(user1.checkPassword('wer'));
