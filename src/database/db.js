import mysql from 'mysql2/promise'
import dotenv from 'dotenv';

dotenv.config()

const pool = mysql.createPool(process.env.DB_URI);

async function conectDatabase() {
    console.log("Aguardando conexao...")
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();
        console.log("Conectado ao banco de dados!");
        return true;
    }
    catch (error) {
        console.error("Erro ao conectar no banco de dados:", error.message);
        throw error;
    }
}

async function execute(query, params = []) {
    try {
        const [rows] = await pool.query(query, params)
        return rows;
    }
    catch (error) {
        console.error("Erro ao executar a consulta:", error.message);
        throw error;
    }
}


export { conectDatabase, execute, pool };