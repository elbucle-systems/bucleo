import type { CognitiveProcess } from "../../types";

export const recalling: CognitiveProcess = {
  name: "recalling",
  alternativeNames: ["retrieving"],
  definition:
    "Retrieving relevant knowledge from long-term memory when given a prompt",
  characteristics: {
    cognitiveAction:
      "search long-term memory for information and retrieve to working memory; generate information from prompt (often a question)",
    complexity: "moderate; requires active memory search without external cues",
    typicalContext:
      "free recall tasks prompted by questions; short-answer questions; generation tasks requiring producing information from memory",
  },
  distinguishedFrom: {
    target: "recognizing",
    basis:
      "retrieving with prompt only vs comparing with presented information; generating vs matching; requires active search and production vs selection from options",
  },
  buildsUpon:
    "Recognizing - requires stronger encoding and retrieval paths to generate information without matching cues",
  learningImplications:
    "More demanding than recognition; student remembers previously learned information when given prompt; requires active memory search; essential for meaningful learning when factual knowledge used in complex tasks like correct spelling for essay writing",
  expertiseIndicators:
    "Retrieve relevant knowledge without matching cues; generate accurate, complete information from memory in response to prompts; recall organized and accessible",
  examples: {
    history:
      "Recall major exports of various South American countries (prompt: 'What is the major export of Brazil?')",
    language:
      "Write corresponding English word next to each Spanish word presented in list",
    mathematics: "Recall formulas for area and volume when solving problems",
    science: "Recall steps of the scientific method when planning experiment",
  },
};
