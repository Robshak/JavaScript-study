namespace Adapter{
    class KVDatabase{ // изначальный класс
        private db: Map<string, string> = new Map();
        save(key: string, value: string){
            this.db.set(key, value);
        }
    }

    class PersistentDB{ // новый класс
        savePersistent(data: Object){
            console.log(data);
        }
    }

    class PersistentDBAdapter extends KVDatabase{ // адаптер
        constructor(public database: PersistentDB){
            super();
        }

        override save ( key: string, value: string ): void {
            this.database.savePersistent({key, value});
        }
    }

    function run(base: KVDatabase){ // код, который заточен на прошлый класс
        base.save('myKey', 'myValue');
    }

    // пример взаимодействия
    const db = new PersistentDBAdapter(new PersistentDB());
    run(db);
}