import type { CognitiveProcess } from "../../types";

export const exemplifying: CognitiveProcess = {
  name: "exemplifying",
  alternativeNames: ["illustrating", "instantiating"],
  definition:
    "Giving a specific example or instance of a general concept or principle",
  characteristics: {
    cognitiveAction:
      "identify defining features of general concept or principle; use these features to select or construct specific instance; involves identifying defining features and using them to select or construct specific example",
    complexity:
      "moderate; requires understanding concept features to generate valid instances",
    typicalContext:
      "provide examples of concepts, identify instances that fit principles, illustrate abstractions with concrete cases",
  },
  distinguishedFrom: {
    target: "classifying and recalling",
    basis:
      "generating instances from concept (concept to instance) vs categorizing instances into concepts (instance to concept); selecting or constructing examples vs determining category membership; opposite direction of classifying",
  },
  buildsUpon:
    "Understanding concept definition and identifying defining features to generate valid examples",
  learningImplications:
    "Tests conceptual understanding; students demonstrate grasp of general concepts by finding or constructing concrete instances; must identify defining features; involves more than remembering memorized examples",
  expertiseIndicators:
    "Generate diverse, valid examples based on defining features; identify prototypical and edge cases; explain why examples fit concept; distinguish valid from invalid instances",
  examples: {
    art: "Give examples of various artistic painting styles (e.g., impressionism, cubism)",
    geometry:
      "Provide example of isosceles triangle (must have two equal sides - defining feature)",
    biology: "Give examples of symbiotic relationships in nature",
    literature:
      "Illustrate different narrative perspectives with specific book examples",
  },
};
