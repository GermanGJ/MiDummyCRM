const db = {
    'client': [
        { id: '1', typeId: '01', firstName: 'Carlos', lastName: 'Martinez' },
        { id: '2', typeId: '01', name: 'Mariana', lastName: 'Florez' },
    ],
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    console.log(`Llamado get() dummy -> tabla: ${tabla}, id: ${id}`);
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;  
}

async function upsert(tabla, data) {
    db[collection].push(data);
}

async function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert, 
    remove,
}