import type { KnowledgeType } from "../types";
import { subjectSpecificSkillsAndAlgorithms } from "./subtypes/subjectSpecificSkillsAndAlgorithms";
import { subjectSpecificTechniquesAndMethods } from "./subtypes/subjectSpecificTechniquesAndMethods";
import { criteriaForUsingProcedures } from "./subtypes/criteriaForUsingProcedures";

export const proceduralKnowledge: KnowledgeType = {
  dimension: "procedural",
  definition:
    'Knowledge of "how" to do something; specific or germane to particular subject matters or academic disciplines; includes knowledge of skills, algorithms, techniques, and methods that are subject-specific or discipline-specific',
  characteristics: {
    specificity:
      "subject-specific or discipline-specific; conditionalized to particular domains",
    abstractionLevel: "applied and process-oriented",
    nature:
      "knowledge of processes, skills, algorithms, techniques, and methods; reflects specific disciplinary ways of thinking; in contrast to general strategies that cut across disciplines",
  },
  distinguishedFrom: {
    target: "factual and conceptual knowledge, and metacognitive knowledge",
    basis:
      '"how" to do something vs "what" knowledge; subject-specific procedures vs general cross-disciplinary strategies; procedural knowledge often produces factual or conceptual knowledge as result',
  },
  subtypes: {
    subjectSpecificSkillsAndAlgorithms,
    subjectSpecificTechniquesAndMethods,
    criteriaForUsingProcedures,
  },
};
