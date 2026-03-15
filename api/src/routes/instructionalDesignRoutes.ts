import { Router } from "express";
import { classifyKnowledge } from "../controllers/instructionalDesignController";

const router = Router();

router.post("/classify-knowledge", classifyKnowledge);

export default router;
