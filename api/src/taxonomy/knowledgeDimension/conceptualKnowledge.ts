import type { KnowledgeType } from "../types";
import { classificationsAndCategories } from "./subtypes/classificationsAndCategories";
import { principlesAndGeneralizations } from "./subtypes/principlesAndGeneralizations";
import { theoriesModelsAndStructures } from "./subtypes/theoriesModelsAndStructures";

export const conceptualKnowledge: KnowledgeType = {
  dimension: "conceptual",
  definition:
    "Categories, classifications, and their relationships. Schemas, models, and theories showing how subject matter is organized and interconnected",
  characteristics: {
    complexity: "more complex and organized than factual",
    specificity: "low",
    abstractionLevel: "higher",
    nature: "interconnected relationships and systematic organization",
    scope: "disciplinary knowledge - how experts think about phenomena",
  },
  distinguishedFrom: {
    target: "factual knowledge",
    basis: "organizing relationships vs isolated discrete elements",
  },
  subtypes: {
    classificationsAndCategories,
    principlesAndGeneralizations,
    theoriesModelsAndStructures,
  },
};
