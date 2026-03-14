import type { CognitiveProcessType } from "../types";
import { recognizing } from "./processes/recognizing";
import { recalling } from "./processes/recalling";

export const rememberProcess: CognitiveProcessType = {
  category: "remember",
  definition:
    "Retrieve relevant knowledge from long-term memory when objective is to promote retention in much the same form as taught",
  characteristics: {
    focus:
      "retention of presented material; promoting remembering of factual, conceptual, procedural, or metacognitive knowledge",
    complexity:
      "foundational; simplest process category with basic retrieval operations",
    learningOutcome:
      "ability to recall or recognize information when needed; essential for meaningful learning and problem solving as foundation",
    cognitiveDepth:
      "surface level retrieval; recognizing or recalling without necessarily understanding; knowledge often used in more complex tasks",
  },
  distinguishedFrom: {
    target: "understand and other transfer processes",
    basis:
      "promoting retention vs constructing meaning or transfer; retrieving stored information vs using knowledge; reproduction vs application; rote learning focus vs meaningful learning integration",
  },
  processes: {
    recognizing,
    recalling,
  },
};
