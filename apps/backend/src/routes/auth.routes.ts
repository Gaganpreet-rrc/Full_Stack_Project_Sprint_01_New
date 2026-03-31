import { Router } from "express";
import { login, getUsers } from "../controllers/auth.controller";
import { validate } from "../middleware/validate.middleware";
import { loginSchema } from "../validators/auth.validation";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.get("/users", getUsers);

export default router;
