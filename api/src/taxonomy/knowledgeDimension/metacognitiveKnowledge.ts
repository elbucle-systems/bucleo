import type { KnowledgeType } from "../types";
import { strategicKnowledge } from "./subtypes/strategicKnowledge";
import { cognitiveTasks } from "./subtypes/cognitiveTasks";
import { selfKnowledge } from "./subtypes/selfKnowledge";

export const metacognitiveKnowledge: KnowledgeType = {
  dimension: "metacognitive",
  definition:
    "Knowledge about cognition in general as well as awareness of and knowledge about one's own cognition; includes knowledge of strategy, task, and person variables",
  characteristics: {
    specificity:
      "applies across disciplines and contexts; general cognitive awareness",
    abstractionLevel:
      "meta-level understanding; awareness of one's own thinking and cognition in general",
    nature:
      "awareness of and responsibility for one's own knowledge and thought; includes metacognitive knowledge, metacognitive awareness, self-awareness, self-reflection, and self-regulation; framework includes knowledge of general strategies (strategic knowledge), knowledge of cognitive tasks and when/why to use strategies (knowledge about cognitive tasks), and knowledge about the self in relation to cognitive and motivational components (self-knowledge)",
  },
  distinguishedFrom: {
    target: "procedural, conceptual, and factual knowledge",
    basis:
      "knowledge of cognition and monitoring, control, and regulation of cognition vs subject-specific procedural, conceptual, or factual knowledge; meta-awareness vs domain knowledge; describes students' knowledge of cognition, not actual monitoring, control, and regulation",
  },
  subtypes: {
    strategicKnowledge,
    cognitiveTasks,
    selfKnowledge,
  },
};
