import type { CognitiveProcess } from "../../types";

export const executing: CognitiveProcess = {
  name: "executing",
  alternativeNames: ["carrying out"],
  definition:
    "Applying a procedure to a familiar task; performing routine operations",
  characteristics: {
    cognitiveAction: "carry out well-learned procedures automatically",
    complexity: "low to moderate; routine application of known procedures",
    typicalContext:
      "familiar problems, routine calculations, standard procedures, practiced skills",
  },
  distinguishedFrom: {
    target: "implementing",
    basis:
      "applying procedures to familiar tasks vs unfamiliar tasks; routine vs novel application; automatic vs deliberate",
  },
  buildsUpon: "Procedural knowledge that has been practiced and automated",
  learningImplications:
    "Develops procedural fluency; students automate routine operations; frees cognitive resources for higher-level thinking; practice leads to automaticity",
  expertiseIndicators:
    "Execute procedures accurately and efficiently; perform routine operations automatically; handle familiar task types fluently",
  examples: {
    mathematics:
      "Divide one whole number by another, both with multiple digits",
    computation: "Perform standard arithmetic operations",
    science: "Carry out routine laboratory procedures",
    language: "Apply standard grammatical rules in writing",
  },
};
