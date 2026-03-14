import type { CognitiveProcess } from "../../types";

export const implementing: CognitiveProcess = {
  name: "implementing",
  alternativeNames: ["using"],
  definition:
    "Applying a procedure to an unfamiliar task; selecting and using procedures in novel situations",
  characteristics: {
    cognitiveAction: "select and adapt procedures for new contexts",
    complexity:
      "moderate to high; requires understanding when and how to apply procedures",
    typicalContext:
      "novel problems, unfamiliar applications, transfer situations, adapted procedures",
  },
  distinguishedFrom: {
    target: "executing",
    basis:
      "applying to unfamiliar vs familiar tasks; requires selection and adaptation vs automatic application; deliberate vs routine",
  },
  buildsUpon:
    "Understanding procedures and criteria for when to use them (procedural and conditional knowledge)",
  learningImplications:
    "Tests transfer; students must recognize when procedures apply and adapt them; requires understanding not just execution; develops problem-solving flexibility",
  expertiseIndicators:
    "Select appropriate procedures for novel situations; adapt procedures to new contexts; recognize when procedures apply; troubleshoot when procedures need modification",
  examples: {
    physics: "Use Newton's Second Law in situations where it is appropriate",
    mathematics:
      "Apply algebraic procedures to solve word problems in unfamiliar contexts",
    science:
      "Use scientific method to design study for novel research question",
    realWorld: "Apply learned techniques to solve practical problems",
  },
};
