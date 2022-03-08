const fs = require('fs');

let users = require('data/users.json');

export const usersRepo = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

function getAll() {
    return users;
}

function getById(id) {
    return users.find(x => x.id.toString() === id.toString());
}

function create({ tipo, placa, marca, modelo, cor }) {
    const user = { tipo, placa, marca, modelo, cor };

    // validate
    if (users.find(x => x.placa === user.placa))
        throw `Veículo com a placa ${user.placa} já foi adicionado`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, { tipo, placa, marca, modelo, cor }) {
    const params = { tipo, placa, marca, modelo, cor };
    const user = users.find(x => x.id.toString() === id.toString());

    // validate
    if (params.placa !== user.placa && users.find(x => x.placa === params.placa))
        throw `Veículo com a placa ${params.placa} já foi adicionado`;

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}