import type { KnowledgeSubtype } from "../../types";

export const theoriesModelsAndStructures: KnowledgeSubtype = {
  name: "theoriesModelsAndStructures",
  definition:
    "Principles and generalizations together with their interrelationships that present a clear, rounded, and systemic view of a complex phenomenon, problem, or subject matter; most abstract formulations",
  content: {
    includes:
      "theories, models, structures, frameworks, paradigms, epistemologies; different disciplinary paradigms for describing, understanding, explaining, and predicting phenomena",
    basis:
      "set of principles and generalizations related to form a theory, model, or structure; show interrelationships and organization of a great range of specific details, classifications, categories, and principles",
    precision:
      "most abstract; emphasis on systematic integration of principles and generalizations",
  },
  characteristics: {
    quantity:
      "varies by discipline; includes multiple paradigms and epistemologies",
    precision:
      "most comprehensive and integrative; clear, rounded, systemic view",
    basis:
      "integrates and explains phenomena; different ways of conceptualizing and organizing subject matter",
  },
  distinguishedFrom: {
    target: "principles and generalizations",
    basis:
      "systematic integration of principles vs individual generalizations; emphasis on interrelated set forming coherent framework",
  },
  buildsUpon:
    "Principles and generalizations - integrates multiple principles with their interrelationships into unified theories, models, or structures",
  learningImplications:
    "Learn disciplinary paradigms, theories, models; understand multiple ways of conceptualizing subject matter; experts know strengths/weaknesses, think within and outside frameworks",
  expertiseIndicators:
    "Know disciplinary theories, models, structures; understand strengths/weaknesses; think within/outside frameworks; apply appropriate lens to complex phenomena",
  examples: {
    biology: {
      evolutionTheory:
        "relatively complete formulation of the theory of evolution; thinking in evolutionary terms to explain biological phenomena",
      geneticModels:
        "DNA model, genetic inheritance models, molecular biology frameworks",
    },
    geology: {
      plateTectonics:
        "theory of plate tectonics; explains earthquakes, volcanoes, mountain formation",
    },
    chemistry: {
      chemicalTheories:
        "interrelationships among chemical principles as basis for chemical theories; atomic theory, molecular orbital theory",
    },
    psychology: {
      learningTheories:
        "behaviorism, cognitivism, social constructivism - different epistemological assumptions about human behavior",
      developmentalModels:
        "Piaget's cognitive development theory, Erikson's psychosocial development",
    },
    politicalScience: {
      governmentStructures:
        "overall structure of Congress (organization, functions); basic structural organization of local city government",
    },
  },
};
