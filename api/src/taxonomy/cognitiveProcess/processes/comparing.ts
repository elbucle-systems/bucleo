import type { CognitiveProcess } from "../../types";

export const comparing: CognitiveProcess = {
  name: "comparing",
  alternativeNames: ["contrasting", "mapping", "matching"],
  definition:
    "Detecting similarities and differences between two or more objects, events, ideas, problems, or situations",
  characteristics: {
    cognitiveAction:
      "find one-to-one correspondences between elements and patterns of one object, event, or idea and those in another; detect similarities and differences",
    complexity:
      "moderate; requires understanding multiple entities and their features to map correspondences",
    typicalContext:
      "determining correspondences between familiar and unfamiliar; when used with inferring (abstracting rule from familiar) and implementing (applying rule to unfamiliar), can contribute to reasoning by analogy",
  },
  distinguishedFrom: {
    target: "classifying and explaining",
    basis:
      "finding correspondences between items vs categorizing single items or building causal models; focuses on relationships and mappings between entities",
  },
  buildsUpon:
    "Understanding both items being compared sufficiently to identify features and map correspondences",
  learningImplications:
    "Develops relational thinking and analogical reasoning; students detect correspondences with more familiar knowledge; when combined with inferring and implementing, contributes to reasoning by analogy; foundation for transfer",
  assessmentMethods:
    "Mapping: show how each part of one object corresponds to parts of another; map correspondences between elements",
  expertiseIndicators:
    "Identify both obvious and subtle similarities/differences; map complex one-to-one correspondences; use comparisons to reason by analogy; deepen understanding through comparison",
  examples: {
    socialStudies:
      "Understand historical events by comparing them to familiar situations (How is the American Revolution like a family fight or an argument between friends?)",
    naturalSciences:
      "Compare an electrical circuit to a more familiar system (How is an electrical circuit like water flowing through a pipe?); map battery, wire, and resistor to pump, pipes, and pipe constructions respectively",
    mathematics:
      "Learn to compare structurally similar word problems; tell how a certain mixture problem is like a certain work problem",
    events:
      "Determine correspondences between two or more presented objects, events, or ideas; compare recent political scandal to less familiar historical political scandal",
  },
};
