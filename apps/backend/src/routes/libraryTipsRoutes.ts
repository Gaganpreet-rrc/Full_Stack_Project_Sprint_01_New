import express from "express";
import { getLibraryTips, createLibraryTip, deleteLibraryTip } from "../controllers/libraryTipsController";
import { validateLibraryTip } from "../middleware/validateLibraryTip";

const router = express.Router();

router.get("/", getLibraryTips);
router.post("/", validateLibraryTip, createLibraryTip);
router.delete("/:id", deleteLibraryTip);

export default router;