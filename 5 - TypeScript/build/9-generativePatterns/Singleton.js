"use strict";
var Singleton;
(function (Singleton) {
    class MyMap {
        constructor() {
            this.map = new Map();
        }
        static get() {
            if (!MyMap.instance) {
                MyMap.instance = new MyMap();
            }
            return MyMap.instance;
        }
    }
    class Servise1 {
        addMap(key, value) {
            const myMap = MyMap.get();
            myMap.map.set(key, value);
        }
    }
    class Servise2 {
        getKeys(key) {
            const myMap = MyMap.get();
            return myMap.map.get(key);
        }
    }
    const s1 = new Servise1();
    const s2 = new Servise2();
    s1.addMap(1, 'sdg');
    s1.addMap(3, 'v');
    s1.addMap(12, 'AAAAAAAA');
    console.log(s2.getKeys(1));
    console.log(s2.getKeys(2));
    console.log(s2.getKeys(3));
})(Singleton || (Singleton = {}));
