import type { CognitiveProcess } from "../../types";

export const checking: CognitiveProcess = {
  name: "checking",
  alternativeNames: ["coordinating", "detecting", "monitoring", "testing"],
  definition:
    "Detecting inconsistencies or fallacies within a process or product; determining internal consistency; monitoring effectiveness",
  characteristics: {
    cognitiveAction: "test for internal consistency and detect errors",
    complexity: "high; requires holding criteria and comparing to performance",
    typicalContext:
      "error detection, consistency checking, monitoring progress, testing hypotheses, debugging",
  },
  distinguishedFrom: {
    target: "critiquing",
    basis:
      "internal consistency vs external criteria; detecting flaws within vs judging against standards; process-oriented vs product-oriented",
  },
  buildsUpon:
    "Understanding the process/product well enough to recognize inconsistencies",
  learningImplications:
    "Develops self-monitoring; students learn to check their work; essential for quality control; builds metacognitive awareness during performance",
  expertiseIndicators:
    "Detect inconsistencies quickly; monitor process effectiveness in real-time; identify logical fallacies; catch errors before completion",
  examples: {
    science:
      "Determine if scientist's conclusions follow from observed data; check experimental procedure consistency",
    mathematics: "Check if solution method is working during problem-solving",
    writing: "Monitor if argument is internally consistent",
    programming: "Debug code by detecting logical errors",
  },
};
