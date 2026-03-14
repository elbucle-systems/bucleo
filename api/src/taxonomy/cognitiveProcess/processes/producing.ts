import type { CognitiveProcess } from "../../types";

export const producing: CognitiveProcess = {
  name: "producing",
  alternativeNames: ["constructing"],
  definition:
    "Inventing a product to meet specifications; creating novel artifacts or solutions",
  characteristics: {
    cognitiveAction: "create new product meeting specified purpose",
    complexity: "very high; requires synthesis and creative execution",
    typicalContext:
      "build artifacts, create products, construct solutions, develop designs",
  },
  distinguishedFrom: {
    target: "planning and implementing",
    basis:
      "creating product vs designing procedure or applying procedure; tangible output vs abstract plan or execution; synthesis vs analysis or application",
  },
  buildsUpon:
    "Planning and other cognitive processes; requires integrating knowledge to create coherent product",
  learningImplications:
    "Demonstrates highest-level synthesis; students create novel products; integrates knowledge, skills, and creativity; produces tangible outcomes; shows mastery through production",
  expertiseIndicators:
    "Create functional, novel products; integrate multiple knowledge domains; produce original work meeting specifications; innovate effectively",
  examples: {
    biology: "Build habitats for specific purpose",
    engineering: "Create working prototype meeting design specifications",
    writing: "Produce original essay, story, or report",
    art: "Create artwork expressing specific theme or concept",
  },
};
