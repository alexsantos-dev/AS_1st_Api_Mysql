import { execute } from '../database/db.js';

async function getAllUsers() {
    const query = "select * from usuarios";
    const result = await execute(query);
    try {
        if (result.affectedRows === 0) {
            throw new Error(`Nenhum usuário encontrado.`);
        }
        return result;
    }
    catch (error) {
        console.error(error.message);
        throw new Error;
    }
}

async function getUser(id) {
    const query = "select * from usuarios where id = ?";
    const params = [id];

    try {
        const result = await execute(query, params);
        if (!(result.length > 0)) {
            throw new Error(`Usuário com ID ${id} não encontrado.`);
        }
        return result;
    } catch (error) {
        console.error(error);
        throw new Error;
    }
}

async function addUser(nome, email, nasc, sexo) {
    const query = "insert into usuarios (nome, email, nasc, sexo) values (?, ?, ?, ?)";
    const params = [nome, email, nasc, sexo];

    try {
        const result = await execute(query, params);
        if (result.affectedRows === 0) {
            throw new Error(`Preecha todos os campos para a adicionar novo usuario!`);
        }
        return result;
    } catch (error) {
        console.error(error.message);
        throw new Error;
    }
}

async function updateUser(nome, email, nasc, sexo, id) {
    const query = "update usuarios set nome = ?, email = ?, nasc = ?, sexo = ? where id = ?";
    const params = [nome, email, nasc, sexo, id];

    try {
        const result = await execute(query, params);
        if (result.affectedRows === 0) {
            throw new Error(`Usuário com ID ${id} não encontrado.`);
        }
        return result;
    } catch (error) {
        console.error(error.message);
        throw new Error(error);
    }
}

async function deleteUser(id) {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    const params = [id];

    try {
        const result = await execute(query, params);

        if (result.affectedRows === 0) {
            throw new Error(`Usuário com ID ${id} não encontrado.`);
        }
        return result;

    } catch (error) {
        console.error(error);
        throw new Error;
    }
}

export { getAllUsers, getUser, addUser, updateUser, deleteUser };
