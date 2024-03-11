'use strict';

class Enemy {
    #healthPoint;

    constructor(hp){
        this.#healthPoint = hp;
    }

    get hp() {
        return this.#healthPoint;
    }

    wound(value){
        this.#healthPoint -= value;

        console.log(`hp now ${this.hp}`);
        if(this.#healthPoint <= 0){
            console.log('monstor dead');
        }
    }

    gotDamage(value){
        this.wound(value);
    }
}

class Butterfly extends Enemy{
    #missChance;

    constructor(hp, missChanse){
        super(hp);
        this.#missChance = missChanse;
    }

    get missChanse(){
        return this.#missChance;
    }

    gotDamage(value){
        if(Math.ceil(Math.random() * 100) > this.missChanse){
            this.wound(value);
        }
        else{
            console.log('miss');
        }
    }
}

class Sword{
    #damagePoint;

    constructor(damagePoint){
        this.#damagePoint = damagePoint;
    }

    get damagePoint(){
        return this.#damagePoint;
    }

    hit(enemy){
        enemy.gotDamage(this.damagePoint);
    }
}

const enemy = new Enemy(50);
const coolEnemy = new Butterfly(20, 70);

const knife = new Sword(10);

knife.hit(enemy);
knife.hit(enemy);
knife.hit(coolEnemy);
knife.hit(coolEnemy);
knife.hit(coolEnemy);
