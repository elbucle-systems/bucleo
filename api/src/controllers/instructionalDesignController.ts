import type { Request, Response } from "express";
import { z } from "zod";
import { classifyKnowledgeAgent } from "../agents/taxonomy/classifyKnowledgeAgent";

const classifyKnowledgeBodySchema = z.object({
  learningObjective: z.string().min(1),
  subject: z.string().min(1),
  gradeLevel: z.string().min(1),
});

export const classifyKnowledge = async (req: Request, res: Response) => {
  const parsed = classifyKnowledgeBodySchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  try {
    const result = await classifyKnowledgeAgent({
      learningObjective: parsed.data.learningObjective,
      subject: parsed.data.subject,
      gradeLevel: parsed.data.gradeLevel,
    });
    res.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[classifyKnowledge]", err);
    res.status(500).json({
      error: "Failed to classify the learning objective",
      detail: message,
    });
  }
};
