import type { Request, Response } from "express";
import { z } from "zod";
import {
  COGNITIVE_PROCESS_ORDER,
  KNOWLEDGE_DIMENSION_ORDER,
  cognitiveProcessRegistry,
  knowledgeDimensionRegistry,
} from "../taxonomy/taxonomyRegistry";

const dimensionParamSchema = z.object({
  dimension: z.enum([
    "factual",
    "conceptual",
    "procedural",
    "metacognitive",
  ]),
});

const cognitiveLevelParamSchema = z.object({
  level: z.enum([
    "remember",
    "understand",
    "apply",
    "analyze",
    "evaluate",
    "create",
  ]),
});

export const getKnowledgeDimensions = (_req: Request, res: Response) => {
  const result = KNOWLEDGE_DIMENSION_ORDER.map((key) => ({
    key,
    ...knowledgeDimensionRegistry[key],
  }));
  res.json(result);
};

export const getKnowledgeDimensionSubtypes = (req: Request, res: Response) => {
  const parsed = dimensionParamSchema.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }
  const dim = knowledgeDimensionRegistry[parsed.data.dimension];
  const result = Object.entries(dim.subtypes).map(([key, subtype]) => ({
    key,
    ...subtype!,
  }));
  res.json(result);
};

export const getCognitiveLevels = (_req: Request, res: Response) => {
  const result = COGNITIVE_PROCESS_ORDER.map((key) => ({
    key,
    ...cognitiveProcessRegistry[key],
  }));
  res.json(result);
};

export const getCognitiveLevelSubprocesses = (req: Request, res: Response) => {
  const parsed = cognitiveLevelParamSchema.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }
  const processType = cognitiveProcessRegistry[parsed.data.level];
  const result = Object.entries(processType.processes).map(
    ([key, subprocess]) => ({ key, ...subprocess! }),
  );
  res.json(result);
};
