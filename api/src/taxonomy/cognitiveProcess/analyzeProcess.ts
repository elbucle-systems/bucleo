import type { CognitiveProcessType } from "../types";
import { differentiating } from "./processes/differentiating";
import { organizing } from "./processes/organizing";
import { attributing } from "./processes/attributing";

export const analyzeProcess: CognitiveProcessType = {
  category: "analyze",
  definition:
    "Break material into constituent parts and determine how parts relate to one another and to overall structure or purpose",
  characteristics: {
    focus: "examining structure, relationships, and underlying elements",
    complexity: "high; requires seeing beyond surface to internal organization",
    learningOutcome:
      "understanding of structure, relationships, and organization; ability to deconstruct wholes into parts",
    cognitiveDepth:
      "penetrates surface to see structure; identifies components and relationships; recognizes patterns and organization",
  },
  distinguishedFrom: {
    target: "understand and evaluate",
    basis:
      "breaking down and examining structure vs constructing meaning or making judgments; analytical deconstruction vs synthesis or assessment; structural focus vs evaluative focus",
  },
  processes: {
    differentiating,
    organizing,
    attributing,
  },
};
