import type { CognitiveProcess } from "../../types";

export const planning: CognitiveProcess = {
  name: "planning",
  alternativeNames: ["designing"],
  definition:
    "Devising a procedure for accomplishing some task; developing solution method or approach",
  characteristics: {
    cognitiveAction: "design procedure or approach to accomplish goal",
    complexity: "high; requires strategic thinking and foresight",
    typicalContext:
      "develop procedures, design approaches, create plans, outline strategies",
  },
  distinguishedFrom: {
    target: "implementing and generating",
    basis:
      "creating procedure vs using procedure or generating alternatives; convergent design vs divergent generation; method development vs method application",
  },
  buildsUpon:
    "Understanding task requirements and available resources to devise effective approach",
  learningImplications:
    "Develops strategic thinking; students design approaches rather than follow prescribed procedures; builds problem-solving independence; requires goal-directed planning",
  expertiseIndicators:
    "Devise effective procedures for novel tasks; anticipate obstacles; design efficient approaches; create detailed, actionable plans",
  examples: {
    research: "Plan a research paper on a given historical topic",
    science: "Design an experiment to test hypothesis",
    mathematics: "Devise strategy for solving complex problem",
    projects: "Develop project plan with timeline and milestones",
  },
};
