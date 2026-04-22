import { Router } from "express";
import {
  getSearchHistory,
  createSearch,
  deleteSearch,
} from "../controllers/searchFilterController";
import { validateSearch } from "../middleware/searchFilterValidation";
import { requireAuth } from "@clerk/express"; 
const router = Router();

router.get("/", getSearchHistory);
router.post("/", validateSearch, createSearch);
router.delete("/:id", requireAuth(), deleteSearch);

export default router;