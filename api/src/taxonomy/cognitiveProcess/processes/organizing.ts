import type { CognitiveProcess } from "../../types";

export const organizing: CognitiveProcess = {
  name: "organizing",
  alternativeNames: [
    "finding coherence",
    "integrating",
    "outlining",
    "parsing",
    "structuring",
  ],
  definition:
    "Determining how elements fit or function within a structure; building systematic and coherent connections",
  characteristics: {
    cognitiveAction:
      "identify structural relationships and build coherent wholes",
    complexity: "high; requires seeing patterns and relationships",
    typicalContext:
      "outline creation, concept mapping, structural analysis, identifying relationships",
  },
  distinguishedFrom: {
    target: "summarizing and differentiating",
    basis:
      "building structure vs selecting main ideas or separating relevant/irrelevant; focuses on relationships and organization",
  },
  buildsUpon:
    "Understanding individual elements well enough to see how they relate and connect",
  learningImplications:
    "Develops systemic thinking; students build mental structures connecting information; creates frameworks for understanding; facilitates retention and transfer",
  expertiseIndicators:
    "Identify underlying structures; build coherent organizational frameworks; see relationships between elements; create useful mental models",
  examples: {
    history:
      "Structure evidence in historical description into evidence for and against particular explanation",
    research: "Organize research findings into coherent framework",
    writing: "Create outline showing logical flow of arguments",
    science: "Organize observations into systematic classification",
  },
};
