import type { Request, Response } from "express";
import { z } from "zod";
import { classifyKnowledgeAgent } from "../agents/taxonomy/classifyKnowledgeAgent";

const classifyKnowledgeBodySchema = z.object({
  learningObjective: z.string().min(1),
});

export const classifyKnowledge = async (req: Request, res: Response) => {
  const parsed = classifyKnowledgeBodySchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  try {
    const result = await classifyKnowledgeAgent(parsed.data.learningObjective);
    res.json(result);
  } catch {
    res
      .status(500)
      .json({ error: "Failed to classify the learning objective" });
  }
};
