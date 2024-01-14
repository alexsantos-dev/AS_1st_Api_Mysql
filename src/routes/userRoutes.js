import express from "express";
import * as userController from "../controllers/userController.js"

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.addUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;


