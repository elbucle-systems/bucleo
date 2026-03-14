import type { CognitiveProcessType } from "../types";
import { executing } from "./processes/executing";
import { implementing } from "./processes/implementing";

export const applyProcess: CognitiveProcessType = {
  category: "apply",
  definition: "Carry out or use a procedure in a given situation",
  characteristics: {
    focus: "using procedures and methods",
    complexity:
      "moderate; ranges from routine execution to adaptive implementation",
    learningOutcome:
      "ability to perform procedures correctly in appropriate contexts",
    cognitiveDepth:
      "action-oriented; moves from knowing to doing; requires procedural knowledge",
  },
  distinguishedFrom: {
    target: "understand and analyze",
    basis:
      "executing procedures vs constructing meaning or breaking down; doing vs comprehending or examining; procedural application vs conceptual understanding or structural analysis",
  },
  processes: {
    executing,
    implementing,
  },
};
