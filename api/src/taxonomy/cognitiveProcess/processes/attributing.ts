import type { CognitiveProcess } from "../../types";

export const attributing: CognitiveProcess = {
  name: "attributing",
  alternativeNames: ["deconstructing"],
  definition:
    "Determine point of view, bias, values, or intent underlying presented material; uncovering author's perspective",
  characteristics: {
    cognitiveAction: "identify underlying perspective, intent, or bias",
    complexity: "high; requires reading between lines and inferring motives",
    typicalContext:
      "analyze author perspective, identify bias, uncover intentions, recognize framing",
  },
  distinguishedFrom: {
    target: "inferring and organizing",
    basis:
      "uncovering perspective/intent vs deriving conclusions or building structure; focuses on underlying viewpoint rather than explicit content",
  },
  buildsUpon:
    "Understanding content and context to identify what drives presentation",
  learningImplications:
    "Develops critical reading; students recognize that information has perspective; essential for evaluating sources; sees beneath surface to intentions",
  expertiseIndicators:
    "Identify author bias and perspective; recognize framing and persuasion techniques; distinguish objective from subjective presentation; uncover hidden assumptions",
  examples: {
    literature:
      "Determine point of view of author in essay re political perspective",
    media: "Identify bias in news coverage or advertisements",
    history:
      "Attribute historical accounts to authors' perspectives and contexts",
    research: "Recognize theoretical assumptions underlying studies",
  },
};
