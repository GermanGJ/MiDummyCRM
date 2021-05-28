const nanoid = require('nanoid');

const TABLA = 'client';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        console.log(`Llamado get() controller -> ${id}`);
        console.log(`TABLA -> ${TABLA}`);
        return store.get(TABLA,id);
    }

    function upsert(body) {
        const client = {
            name: body.name
        }

        if (body.id) {
            client.id = body.id;
        } else {
            client.id = nanoid();
        }

        return store.upsert(TABLA, client);
    }


    return {
        list,
        get,
        upsert,
    };
}