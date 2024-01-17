import mysql from 'mysql2/promise'
import dotenv from 'dotenv';

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

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