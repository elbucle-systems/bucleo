import type { CognitiveProcess } from "../../types";

export const generating: CognitiveProcess = {
  name: "generating",
  alternativeNames: ["hypothesizing"],
  definition:
    "Coming up with alternative hypotheses based on criteria; generating multiple possibilities",
  characteristics: {
    cognitiveAction: "produce multiple alternative hypotheses or solutions",
    complexity: "high; requires divergent thinking and creativity",
    typicalContext:
      "hypothesis generation, brainstorming, developing alternatives, creative problem-solving",
  },
  distinguishedFrom: {
    target: "planning and inferring",
    basis:
      "generating alternatives vs developing procedure or deriving single conclusion; divergent vs convergent; multiple possibilities vs single solution",
  },
  buildsUpon:
    "Understanding problem space and constraints to generate plausible alternatives",
  learningImplications:
    "Develops creative thinking; students generate multiple possibilities; essential for scientific inquiry and innovation; encourages flexibility",
  expertiseIndicators:
    "Generate diverse plausible hypotheses; think divergently; produce creative alternatives; identify multiple solution paths",
  examples: {
    science: "Generate hypotheses to account for observed phenomenon",
    research: "Develop alternative explanations for findings",
    problemSolving: "Brainstorm multiple approaches to complex problem",
    innovation: "Generate creative solutions to design challenges",
  },
};
