import type { KnowledgeSubtype } from "../../types";

export const classificationsAndCategories: KnowledgeSubtype = {
  name: "classificationsAndCategories",
  definition:
    "Categories defined by what all specific instances have in common, used to structure and systematize phenomena",
  content: {
    includes:
      "categories, classes, divisions, arrangements, taxonomies, classification systems; can be hierarchical (e.g., whole numbers → integers → fractions → rational numbers)",
    basis:
      "largely result of agreement and convenience; developed to discover and deal with new elements",
    precision:
      "more general and abstract than facts; each larger category moves from concrete to abstract",
  },
  characteristics: {
    quantity: "varies by subject matter",
    precision:
      "abstract, focus on common attributes that define category membership",
    basis:
      "reflect how experts think and attack problems; form connecting links between specific elements",
  },
  distinguishedFrom: {
    target: "specific details and elements",
    basis:
      "what makes X an X (category definition) vs this specific X (instance); agreements vs empirical findings; can be difficult to distinguish",
  },
  buildsUpon:
    "Terminology and specific details - requires making connections among specific content elements, facts, and terms",
  learningImplications:
    "More difficult than factual knowledge; arbitrary expert tools requiring connections among factual elements; abstraction increases hierarchically; value emerges through disciplinary work",
  expertiseIndicators:
    "Accurate categorization; recognizing appropriate use; distinguishing categories from instances",
  examples: {
    literature: {
      typesOfLiterature: "poetry, prose, drama, fiction, non-fiction",
      literaryGenres: "romance, tragedy, comedy, satire, epic",
      poeticForms: "sonnet, haiku, limerick, free verse, ode",
    },
    business: {
      formsOfOwnership: "sole proprietorship, partnership, corporation, LLC",
      businessTypes: "service, manufacturing, retail, wholesale",
      organizationalStructures: "functional, divisional, matrix, flat",
    },
    language: {
      partsOfSpeech:
        "nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, interjections",
      typesOfSentences: "declarative, interrogative, imperative, exclamatory",
      clauseTypes: "independent clause, dependent clause, relative clause",
    },
    psychology: {
      psychologicalDisorders:
        "anxiety disorders, mood disorders, personality disorders, psychotic disorders, neurodevelopmental disorders",
      learningTheories: "behaviorism, cognitivism, constructivism, humanism",
      memoryTypes: "sensory memory, short-term memory, long-term memory",
    },
    geology: {
      geologicEras: "Paleozoic, Mesozoic, Cenozoic",
      geologicPeriods:
        "Cambrian, Ordovician, Silurian, Devonian, Carboniferous, Permian, Triassic, Jurassic, Cretaceous, Tertiary, Quaternary",
      rockTypes: "igneous, sedimentary, metamorphic",
    },
  },
};
