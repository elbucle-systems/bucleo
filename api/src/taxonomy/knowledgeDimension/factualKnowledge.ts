import type { KnowledgeType } from "../types";
import { terminology } from "./subtypes/terminology";
import { specificDetailsAndElements } from "./subtypes/specificDetailsAndElements";

export const factualKnowledge: KnowledgeType = {
  dimension: "factual",
  definition: "Basic elements required to work within a discipline",
  characteristics: {
    specificity: "high",
    abstractionLevel: "low",
    nature: "isolated elements with intrinsic value",
  },
  distinguishedFrom: {
    target: "conceptual knowledge",
    basis: "isolates discrete elements vs organizing relationships",
  },
  subtypes: {
    terminology,
    specificDetailsAndElements,
  },
};
