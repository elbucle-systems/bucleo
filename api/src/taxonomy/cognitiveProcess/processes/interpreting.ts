import type { CognitiveProcess } from "../../types";

export const interpreting: CognitiveProcess = {
  name: "interpreting",
  alternativeNames: [
    "clarifying",
    "paraphrasing",
    "representing",
    "translating",
  ],
  definition:
    "Converting information from one representational form to another",
  characteristics: {
    cognitiveAction:
      "transform between representational forms; convert words to words, pictures to words, words to pictures, words to numbers, numbers to words, musical notes to tones, and the like",
    complexity:
      "moderate; requires understanding relationships between formats; information must be new to increase probability of interpreting rather than remembering",
    typicalContext:
      "paraphrasing, translating between formats, converting representations; both constructed response (supply answer) and selected response (choose answer) formats",
  },
  distinguishedFrom: {
    target: "exemplifying and remembering",
    basis:
      "transforming between representations vs finding examples or retrieving facts; if task identical to instruction, assessing remembering not interpreting; must involve new information",
  },
  buildsUpon:
    "Understanding material well enough to transform representation while maintaining meaning",
  learningImplications:
    "Demonstrates comprehension through transformation; students show understanding by changing representational form; information in assessment must be new (not encountered during instruction) to ensure interpreting rather than remembering",
  assessmentMethods:
    "Constructed response: change information into another form (paraphrase, draw representations); selected response: choose correct transformation from options",
  expertiseIndicators:
    "Fluidly convert between representations; maintain meaning across transformations; handle new information not encountered during instruction; select appropriate representational form for context",
  examples: {
    socialStudies:
      "Paraphrase important speeches and documents from Civil War period in U.S. history (e.g., Lincoln's Gettysburg Address)",
    science:
      "Draw pictorial representations of various natural phenomena; draw series of diagrams illustrating photosynthesis",
    mathematics:
      "Translate number sentences into algebraic equations (write equation using B for boys and G for girls corresponding to 'There are twice as many boys as girls in this class')",
    language: "Convert verbal to symbolic representations and vice versa",
  },
};
