namespace Singleton{
    class MyMap{ // контейнер
        private static instance: MyMap;

        map: Map<number, string> = new Map();

        private constructor(){ // запрещает создавать его экземпляры

        }

        public static get(): MyMap{
            if(!MyMap.instance){
                MyMap.instance = new MyMap();
            }
            return MyMap.instance;
        }
    }

    class Servise1{ // сервис, который взаимодействует с контейнером
        addMap(key: number, value: string){
            const myMap = MyMap.get();
            myMap.map.set(key, value);
        }
    }

    class Servise2{ // сервис, который взаимодействует с контейнером
        getKeys(key: number){
            const myMap = MyMap.get();
            return myMap.map.get(key);
        }
    }

    // пример взаимодействия
    const s1 = new Servise1();
    const s2 = new Servise2();

    s1.addMap(1, 'sdg');
    s1.addMap(3, 'v');
    s1.addMap(12, 'AAAAAAAA');

    console.log(s2.getKeys(1));
    console.log(s2.getKeys(2));
    console.log(s2.getKeys(3));
}