import type {
  CognitiveProcessCategory,
  CognitiveProcessType,
  KnowledgeDimension,
  KnowledgeType,
} from "./types";
import { analyzeProcess } from "./cognitiveProcess/analyzeProcess";
import { applyProcess } from "./cognitiveProcess/applyProcess";
import { createProcess } from "./cognitiveProcess/createProcess";
import { evaluateProcess } from "./cognitiveProcess/evaluateProcess";
import { rememberProcess } from "./cognitiveProcess/rememberProcess";
import { understandProcess } from "./cognitiveProcess/understandProcess";
import { conceptualKnowledge } from "./knowledgeDimension/conceptualKnowledge";
import { factualKnowledge } from "./knowledgeDimension/factualKnowledge";
import { metacognitiveKnowledge } from "./knowledgeDimension/metacognitiveKnowledge";
import { proceduralKnowledge } from "./knowledgeDimension/proceduralKnowledge";

export const KNOWLEDGE_DIMENSION_ORDER: KnowledgeDimension[] = [
  "factual",
  "conceptual",
  "procedural",
  "metacognitive",
];

export const COGNITIVE_PROCESS_ORDER: CognitiveProcessCategory[] = [
  "remember",
  "understand",
  "apply",
  "analyze",
  "evaluate",
  "create",
];

export const knowledgeDimensionRegistry: Record<
  KnowledgeDimension,
  KnowledgeType
> = {
  factual: factualKnowledge,
  conceptual: conceptualKnowledge,
  procedural: proceduralKnowledge,
  metacognitive: metacognitiveKnowledge,
};

export const cognitiveProcessRegistry: Record<
  CognitiveProcessCategory,
  CognitiveProcessType
> = {
  remember: rememberProcess,
  understand: understandProcess,
  apply: applyProcess,
  analyze: analyzeProcess,
  evaluate: evaluateProcess,
  create: createProcess,
};
