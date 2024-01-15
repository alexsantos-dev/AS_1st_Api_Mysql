import { execute } from '../database/db.js';

async function getAllUsers() {
    const query = "select * from usuarios order by nasc";
    return await execute(query);
}

async function getUser(id) {
    const query = "select * from usuarios where id = ?";
    const params = [id];

    try {
        const result = await execute(query, params);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function addUser(nome, email, nasc, sexo) {
    const query = "insert into usuarios (nome, email, nasc, sexo) values (?, ?, ?, ?)";
    const params = [nome, email, nasc, sexo];

    try {
        const result = await execute(query, params);
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateUser(nome, email, nasc, sexo, id) {
    const query = "update usuarios set nome = ?, email = ? where id = ?";
    const params = [nome, email, nasc, sexo, id];
    try {
        const results = await execute(query, params);
        return results;
    }
    catch (error) {
        throw error;
    }
}

async function deleteUser(id) {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    const params = [id];

    try {
        const result = await execute(query, params);
        return result;
    } catch (error) {
        throw error;
    }
}
export { getAllUsers, getUser, addUser, updateUser, deleteUser };