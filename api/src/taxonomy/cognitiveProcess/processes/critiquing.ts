import type { CognitiveProcess } from "../../types";

export const critiquing: CognitiveProcess = {
  name: "critiquing",
  alternativeNames: ["judging"],
  definition:
    "Detecting inconsistencies between a product and external criteria; determining whether product meets standards; judging appropriateness",
  characteristics: {
    cognitiveAction: "judge against external criteria and standards",
    complexity: "high; requires understanding criteria and making judgments",
    typicalContext:
      "evaluate quality, judge appropriateness, assess against standards, make comparative judgments",
  },
  distinguishedFrom: {
    target: "checking",
    basis:
      "external criteria vs internal consistency; judging product against standards vs detecting internal flaws; outcome-oriented vs process-oriented",
  },
  buildsUpon:
    "Understanding both the product and the external criteria to make valid judgments",
  learningImplications:
    "Develops evaluative judgment; students apply criteria to make reasoned assessments; critical for quality evaluation and decision-making; requires understanding standards",
  expertiseIndicators:
    "Apply criteria consistently; make sound judgments; distinguish strengths and weaknesses; justify evaluations with reasoning",
  examples: {
    problemSolving:
      "Judge which of two methods is best way to solve a given problem",
    research: "Evaluate whether research design is appropriate for question",
    writing: "Critique essay for effectiveness in achieving purpose",
    engineering: "Determine if design meets specifications and constraints",
  },
};
