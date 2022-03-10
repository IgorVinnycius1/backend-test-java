const fs = require('fs');

let users = require('data/empresas.json');

export const empresasRepo = {
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

function create({ nome, cnpj, endereco, telefone, qtdvgcarro, qtdvgmoto }) {
    const user = { nome, cnpj, endereco, telefone, qtdvgcarro, qtdvgmoto };

    // validate
    if (users.find(x => x.cnpj === user.cnpj))
        throw `Empresa com a CNPJ ${user.cnpj} já foi adicionada`;

    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, { nome, cnpj, endereco, telefone, qtdvgcarro, qtdvgmoto }) {
    const params = { nome, cnpj, endereco, telefone, qtdvgcarro, qtdvgmoto };
    const user = users.find(x => x.id.toString() === id.toString());

    // validate
    if (params.cnpj !== user.cnpj && users.find(x => x.cnpj === params.cnpj))
        throw `Empresa com o CNPJ ${params.cnpj} já foi adicionada`;

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
    fs.writeFileSync('data/empresas.json', JSON.stringify(users, null, 4));
}