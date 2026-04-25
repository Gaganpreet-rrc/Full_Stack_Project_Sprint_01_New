import express from "express";
import { getAllBooks, addBook, removeBook } from "../controllers/bookController";
import { validateBook } from "../middleware/validateBook";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", validateBook, addBook);
router.delete("/:id", removeBook);

export default router;
