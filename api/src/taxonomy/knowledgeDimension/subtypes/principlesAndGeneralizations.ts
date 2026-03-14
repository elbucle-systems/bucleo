import type { KnowledgeSubtype } from "../../types";

export const principlesAndGeneralizations: KnowledgeSubtype = {
  name: "principlesAndGeneralizations",
  definition:
    "Abstractions that summarize observations of phenomena; dominate academic disciplines and are used to study phenomena or solve problems",
  content: {
    includes:
      "principles, generalizations, patterns, regularities, broad abstractions",
    basis:
      "composed of classifications and categories; bring together large numbers of specific facts and events; describe processes and interrelationships among classifications and categories",
    precision:
      "broad ideas; greatest value in describing, predicting, explaining, or determining appropriate action",
  },
  characteristics: {
    quantity: "tend to dominate an academic discipline",
    precision: "generalizable across instances; parsimonious and coherent",
    basis:
      "describe processes and interrelationships among specific details and categories; enable experts to organize the whole",
  },
  distinguishedFrom: {
    target: "classifications and categories",
    basis:
      "summarize and relate categories vs organizing specific elements; processes and interrelationships vs structural groupings",
  },
  buildsUpon:
    "Classifications and categories - describe processes and interrelationships among classifications",
  learningImplications:
    "Difficult without familiarity with phenomena; once learned, organize and relate large amounts of content; improve insight and memory",
  expertiseIndicators:
    "Recognize patterns effortlessly; activate relevant knowledge automatically; predict, explain, solve problems",
  examples: {
    physics: {
      fundamentalLaws:
        "laws of thermodynamics, Newton's laws of motion, conservation of energy",
      quantumPrinciples: "uncertainty principle, wave-particle duality",
    },
    chemistry: {
      lifeProcessPrinciples:
        "principles relevant to metabolism, cellular respiration, chemical bonding in biological systems",
      chemicalReactions:
        "principles of equilibrium, Le Chatelier's principle, acid-base principles",
    },
    mathematics: {
      arithmeticPrinciples:
        "commutative principle, associative principle, distributive principle",
      algebraicPrinciples: "principles of equality, inverse operations",
    },
    socialSciences: {
      culturalGeneralizations:
        "major generalizations about particular cultures, cultural relativism principles",
      economicPrinciples:
        "implications of foreign trade policies for international economy and good will",
      politicalPrinciples:
        "principles of federalism, separation of powers, checks and balances",
    },
    psychology: {
      learningPrinciples:
        "major principles involved in learning, reinforcement, transfer of learning",
      developmentalPrinciples:
        "stages of cognitive development, principles of maturation",
    },
  },
};
