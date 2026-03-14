import type { CognitiveProcessType } from "../types";
import { checking } from "./processes/checking";
import { critiquing } from "./processes/critiquing";

export const evaluateProcess: CognitiveProcessType = {
  category: "evaluate",
  definition: "Make judgments based on criteria and standards",
  characteristics: {
    focus: "assessing quality, effectiveness, or value using criteria",
    complexity:
      "high; requires understanding criteria and making reasoned judgments",
    learningOutcome:
      "ability to assess and judge based on explicit or implicit standards",
    cognitiveDepth:
      "involves critical thinking; applies standards to make judgments; distinguishes quality levels",
  },
  distinguishedFrom: {
    target: "analyze and create",
    basis:
      "judging against criteria vs examining structure or producing products; assessment vs deconstruction or synthesis; evaluative vs analytical or generative",
  },
  processes: {
    checking,
    critiquing,
  },
};
