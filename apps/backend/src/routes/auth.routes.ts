import { Router } from "express";
import { login, getUsers } from "../controllers/auth.controller";
import { validateLogin } from "../middleware/validate.middleware";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.post("/login", validateLogin, login);
router.get("/users",authMiddleware, getUsers);

export default router;