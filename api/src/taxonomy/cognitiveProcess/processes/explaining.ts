import type { CognitiveProcess } from "../../types";

export const explaining: CognitiveProcess = {
  name: "explaining",
  alternativeNames: ["constructing models"],
  definition: "Constructing and using a cause-and-effect model of a system",
  characteristics: {
    cognitiveAction:
      "construct cause-and-effect model including each major part in system or each major event in chain; use model to determine how change in one part of system or one 'link' in chain affects change in another part; complete explanation involves constructing model and using it",
    complexity:
      "high; requires understanding relationships and mechanisms; model may be derived from formal theory or grounded in research or experience",
    typicalContext:
      "given description of system, develop and use cause-and-effect model; explain how/why questions; determine effects of changes in system",
  },
  distinguishedFrom: {
    target: "summarizing and applying",
    basis:
      "building and using causal models vs abstracting main points or using procedures; focuses on mechanisms, cause-effect chains, and why things happen",
  },
  buildsUpon:
    "Understanding components and their causal relationships to construct and use coherent cause-and-effect model",
  learningImplications:
    "Demonstrates deep understanding; students construct and use mental models of processes; critical for scientific and systems thinking; shows grasp of mechanisms and causal chains; develops ability to predict effects of changes",
  assessmentMethods:
    "Reasoning: offer reason for event; Troubleshooting: diagnose malfunction; Redesigning: change system to accomplish goal; Predicting: determine effects of changes; requires operating mental model of system",
  expertiseIndicators:
    "Build accurate cause-and-effect models; use models to predict system behavior; trace cause-effect chains; troubleshoot malfunctions; redesign systems; identify relevant and irrelevant factors; explain mechanisms clearly",
  examples: {
    socialStudies:
      "Explain causes of important eighteenth-century events (after reading and discussing unit on American Revolution, construct cause-and-effect chain of events that best explains why war occurred)",
    naturalSciences:
      "Explain how basic physics laws work; students who have studied Ohm's law explain what happens to rate of current when second battery added to circuit; explain how differences in temperature affect formation of lightning",
    systems:
      "Explain why bicycle tire pump works ('It is forced in because the air pressure inside is less than outside'); explain what could have gone wrong when pump doesn't work ('There is a hole in cylinder' or 'A valve is stuck')",
    engineering:
      "Predict effects of system changes (what would happen if you increased cylinder diameter in bicycle tire pump)",
  },
};
