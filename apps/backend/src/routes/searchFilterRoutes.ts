import { Router } from "express";
import {
  getSearchHistory,
  createSearch,
  deleteSearch,
} from "../controllers/searchFilterController";
import { validateSearch } from "../middleware/searchFilterValidation";

const router = Router();

router.get("/", getSearchHistory);
router.post("/", validateSearch, createSearch);
router.delete("/:id", deleteSearch);

export default router;