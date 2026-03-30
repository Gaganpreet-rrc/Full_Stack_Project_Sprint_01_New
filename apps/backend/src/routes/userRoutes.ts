import express from "express";
import { getUsers, createUser, deleteUser } from "../controllers/userController";
import { validateUser } from "../middleware/validateUser";


const router = express.Router();

router.get("/", getUsers);
router.post("/", validateUser, createUser);
router.delete("/:id", deleteUser);

export default router;