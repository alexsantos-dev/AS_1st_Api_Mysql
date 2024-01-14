import * as UserModel from "../models/usuarioModel.mjs";

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    }
    catch (error) {
        console.error('Erro ao obter usuarios:', error.message);
        res.status(500).send('Erro no servidor');
    }
}
async function getUser(req, res) {
    try {
        const { id } = req.params;
        const users = await UserModel.getUser(id);
        res.json(users);
    }
    catch (error) {
        console.error('Erro ao obter usuarios:', error.message);
        res.status(500).send('Erro no servidor');
    }
}


async function addUser(req, res) {
    try {
        const { nome, email } = req.body;
        await UserModel.addUser(nome, email)
        res.status(201).send('Usuário adicionado com sucesso!');
    }
    catch (error) {
        console.error("Erro ao adicionar usuario:", error.message)
        res.status(500).send('Erro no servidor');
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        await UserModel.updateUser(nome, email, id)
        res.send('Usuário atualizado com sucesso!');
    }
    catch (error) {
        console.error("Erro ao atualizar usuario:", error.message)
        res.status(500).send('Erro no servidor');
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        await UserModel.deleteUser(id);
        res.send("Usuario removido com sucesso!");

    }
    catch (error) {
        console.error('Erro ao remover usuario:', error.message);
        res.status(500).send('Erro interno no servidor');
    }
}

export { getAllUsers, getUser, addUser, updateUser, deleteUser };