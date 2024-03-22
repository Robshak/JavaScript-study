"use strict";
var Adapter;
(function (Adapter) {
    class KVDatabase {
        constructor() {
            this.db = new Map();
        }
        save(key, value) {
            this.db.set(key, value);
        }
    }
    class PersistentDB {
        savePersistent(data) {
            console.log(data);
        }
    }
    class PersistentDBAdapter extends KVDatabase {
        constructor(database) {
            super();
            this.database = database;
        }
        save(key, value) {
            this.database.savePersistent({ key, value });
        }
    }
    function run(base) {
        base.save('myKey', 'myValue');
    }
    const db = new PersistentDBAdapter(new PersistentDB());
    run(db);
})(Adapter || (Adapter = {}));
