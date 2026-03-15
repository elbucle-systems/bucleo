import { Router } from "express";
import { classifyKnowledge } from "../controllers/instructionalDesignController";
import {
  getCognitiveLevelSubprocesses,
  getCognitiveLevels,
  getKnowledgeDimensionSubtypes,
  getKnowledgeDimensions,
} from "../controllers/taxonomyController";

const router = Router();

router.post("/classify-knowledge", classifyKnowledge);

router.get("/knowledge-dimensions", getKnowledgeDimensions);
router.get(
  "/knowledge-dimensions/:dimension/subtypes",
  getKnowledgeDimensionSubtypes,
);
router.get("/cognitive-levels", getCognitiveLevels);
router.get(
  "/cognitive-levels/:level/subprocesses",
  getCognitiveLevelSubprocesses,
);

export default router;
