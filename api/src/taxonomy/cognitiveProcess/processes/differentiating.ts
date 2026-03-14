import type { CognitiveProcess } from "../../types";

export const differentiating: CognitiveProcess = {
  name: "differentiating",
  alternativeNames: [
    "discriminating",
    "distinguishing",
    "focusing",
    "selecting",
  ],
  definition:
    "Distinguishing relevant from irrelevant parts or important from unimportant parts of presented material",
  characteristics: {
    cognitiveAction: "separate relevant from irrelevant information",
    complexity: "moderate to high; requires understanding task relevance",
    typicalContext:
      "identify key information, separate signal from noise, focus attention, select important elements",
  },
  distinguishedFrom: {
    target: "organizing and understanding processes",
    basis:
      "separating relevant/irrelevant vs structuring relationships; focuses on selection rather than comprehension or integration",
  },
  buildsUpon:
    "Understanding content well enough to judge relevance and importance",
  learningImplications:
    "Develops critical attention; students learn to focus on what matters; essential for problem-solving where extraneous information present; filters cognitive load",
  expertiseIndicators:
    "Quickly identify relevant information; distinguish important from trivial; filter distractions; focus on task-critical elements",
  examples: {
    mathematics:
      "Distinguish between relevant and irrelevant numbers in word problems",
    reading: "Identify key points in persuasive message amid rhetoric",
    research: "Separate evidence supporting hypothesis from irrelevant data",
    criticalThinking: "Distinguish facts from opinions in arguments",
  },
};
