import { execute } from '../database/db.js';

async function getAllUsers() {
    const query = "select * from users";
    return await execute(query);
}

async function getUser(id) {
    const query = "select * from users where id = ?";
    const params = [id];

    try {
        const result = await execute(query, params);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function addUser(nome, email) {
    const query = "insert into users (nome, email) values (?, ?)";
    const params = [nome, email];

    try {
        const result = await execute(query, params);
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateUser(nome, email, id) {
    const query = "update users set nome = ?, email = ? where id = ?";
    const params = [nome, email, id];
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