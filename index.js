import express from "express";
import { conectDatabase } from "./src/database/db.js"
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
conectDatabase();
app.use(express.json());
app.use("/api", userRoutes)

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));