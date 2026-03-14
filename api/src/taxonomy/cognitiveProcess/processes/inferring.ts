import type { CognitiveProcess } from "../../types";

export const inferring: CognitiveProcess = {
  name: "inferring",
  alternativeNames: [
    "concluding",
    "extrapolating",
    "interpolating",
    "predicting",
  ],
  definition: "Finding a pattern within a series of examples or instances",
  characteristics: {
    cognitiveAction:
      "abstract concept or principle that accounts for set of examples by encoding relevant features of each instance; note relationships among them; make comparisons among instances within context of entire set; identify pattern",
    complexity:
      "moderate to high; requires pattern recognition, encoding features, noting relationships, and abstracting; often used together with executing on cognitive tasks",
    typicalContext:
      "pattern identification, principle abstraction from examples, prediction based on patterns, drawing conclusions from series of instances",
  },
  distinguishedFrom: {
    target: "attributing",
    basis:
      "finding pattern to infer issue or inducing pattern based on presented information vs determining author's point of view or intention; inferring focuses broadly on pattern-based abstraction, whereas attributing focuses on pragmatic issue of author perspective in context that signifies expectation of what is to be inferred; both involve 'reading between lines' but different focus",
  },
  buildsUpon:
    "Understanding examples deeply enough to encode features, note relationships, and identify patterns for abstraction",
  learningImplications:
    "Develops pattern recognition and logical reasoning; students abstract concepts from examples by noting relationships; critical for scientific thinking; related process is using pattern to create new instance (executing, associated with Apply); often used together on cognitive tasks",
  assessmentMethods:
    "Completion tasks (what comes next in series); analogy tasks (A:B::C:D or fill-in-the-blank); oddity tasks (identify different item); often with implementing",
  expertiseIndicators:
    "Recognize patterns in series of instances; encode relevant features efficiently; note relationships among instances; abstract valid concepts or principles; distinguish pattern from noise; make accurate predictions based on patterns",
  examples: {
    language:
      "Infer grammatical principles from examples in foreign language learning (given article-noun pairs 'la casa' and 'el pero', formulate principle for when to use 'la' and 'el')",
    mathematics:
      "Infer relationships expressed as equations from series of values for two variables (describe relationship as equation involving x and y; if x is 1 then y is 0; if x is 2 then y is 3; if x is 3 then y is 8); identify pattern in number series (1, 2, 3, 5, 8, 13, 21 - sum of preceding two numbers)",
    science:
      "Abstract concept or principle from set of examples; predict outcomes based on identified patterns",
    problemSolving:
      "Complete analogies (president:state::governor:?, nation:produce::state:?); identify odd item in series",
  },
};
