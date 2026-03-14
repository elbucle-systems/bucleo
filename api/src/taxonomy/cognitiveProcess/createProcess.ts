import type { CognitiveProcessType } from "../types";
import { generating } from "./processes/generating";
import { planning } from "./processes/planning";
import { producing } from "./processes/producing";

export const createProcess: CognitiveProcessType = {
  category: "create",
  definition:
    "Put elements together to form coherent or functional whole; reorganize elements into new pattern or structure",
  characteristics: {
    focus: "synthesizing elements into novel, coherent products",
    complexity: "very high; most cognitively demanding category",
    learningOutcome:
      "ability to generate original products, designs, or solutions; creative synthesis",
    cognitiveDepth:
      "highest level; involves divergent and convergent thinking; integrates knowledge to produce novel outcomes; requires creativity and synthesis",
  },
  distinguishedFrom: {
    target: "all other categories",
    basis:
      "creating new vs working with existing; synthesis vs analysis; generative vs receptive or evaluative; novel production vs comprehension, application, or assessment",
  },
  processes: {
    generating,
    planning,
    producing,
  },
};
