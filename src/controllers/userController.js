import * as UserModel from "../models/userModel.js";

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
        const user = await UserModel.getUser(id);
        res.json(user);
    }
    catch (error) {
        console.error('Erro ao obter usuarios:', error.message);
        res.status(500).send('Erro no servidor');
    }
}


async function addUser(req, res) {
    try {
        const { nome, email, nasc, sexo } = req.body;
        await UserModel.addUser(nome, email, nasc, sexo)
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
        const { nome, email, nasc, sexo } = req.body;
        await UserModel.updateUser(nome, email, nasc, sexo, id)
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
        const user = await UserModel.getUser(id)
        if (req.id != user.id) {
            res.status(400).send("ID de usuario invalida!");
        } else {
            await UserModel.deleteUser(id);
            res.send("Usuario removido com sucesso!");
        }

    }
    catch (error) {
        console.error('Erro ao remover usuario:', error.message);
        res.status(500).send('Erro interno no servidor');
    }
}

export { getAllUsers, getUser, addUser, updateUser, deleteUser };