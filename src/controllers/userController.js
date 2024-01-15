import * as UserModel from "../models/userModel.js";

async function getAllUsers(req, res) {
    try {
        const users = await UserModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getUser(req, res) {
    try {
        const { id } = req.params;
        const user = await UserModel.getUser(id);
        if (!(user.length > 0)) {
            throw error;
        }
        res.json(user);
    } catch (error) {
        res.status(500).send('Usuario nao encontrado ;(');
    }
}

async function addUser(req, res) {
    try {
        const { nome, email, nasc, sexo } = req.body;
        await UserModel.addUser(nome, email, nasc, sexo);
        res.status(201).send('Usuário adicionado com sucesso!');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { nome, email, nasc, sexo } = req.body;
        await UserModel.updateUser(nome, email, nasc, sexo, id);
        res.send('Usuário atualizado com sucesso!');
    } catch (error) {
        res.status(500).send('Preencha todos os campos corretamente!');
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        await UserModel.deleteUser(id);
        res.send("Usuário removido com sucesso!");
    } catch (error) {
        res.status(500).send('Usuario nao encontrado ;(');
    }
}

export { getAllUsers, getUser, addUser, updateUser, deleteUser };
