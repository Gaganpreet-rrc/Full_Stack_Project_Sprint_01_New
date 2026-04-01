import { Router } from "express";
import { login, getUsers } from "../controllers/auth.controller";
import { validateLogin } from "../middleware/validate.middleware";

const router = Router();

router.post("/login", validateLogin, login);
router.get("/users", getUsers);


export default router;