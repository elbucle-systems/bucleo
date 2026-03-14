import type { CognitiveProcessType } from "../types";
import { interpreting } from "./processes/interpreting";
import { exemplifying } from "./processes/exemplifying";
import { classifying } from "./processes/classifying";
import { summarizing } from "./processes/summarizing";
import { inferring } from "./processes/inferring";
import { comparing } from "./processes/comparing";
import { explaining } from "./processes/explaining";

export const understandProcess: CognitiveProcessType = {
  category: "understand",
  definition:
    "Construct meaning from instructional messages, including oral, written, and graphic communication",
  characteristics: {
    focus:
      "transfer-based learning; largest category emphasized in schools and colleges; making sense of lectures, books, computer monitors, and instructional messages",
    complexity:
      "moderate; requires active sense-making and integration with existing schemas",
    learningOutcome:
      "ability to construct meaning from instructional messages; incoming knowledge integrated with existing schemas and cognitive frameworks; conceptual knowledge provides basis for understanding",
    cognitiveDepth:
      "deeper than remembering; construct meaning by building connections between new knowledge and prior knowledge; integration rather than isolated retention",
  },
  distinguishedFrom: {
    target: "remember and apply",
    basis:
      "constructing meaning and building connections vs retrieving information or using procedures; integration with prior knowledge vs recall or execution; cannot answer correctly by memory alone - must require more than remembering",
  },
  processes: {
    interpreting,
    exemplifying,
    classifying,
    summarizing,
    inferring,
    comparing,
    explaining,
  },
};
