import type { KnowledgeSubtype } from "../../types";

export const subjectSpecificSkillsAndAlgorithms: KnowledgeSubtype = {
  name: "subjectSpecificSkillsAndAlgorithms",
  definition:
    "Series or sequence of steps (procedures) that are specific to particular subject matters or academic disciplines; includes skills, algorithms, techniques, and methods",
  content: {
    includes:
      "algorithms, fixed procedures, multi-step sequences, subject-specific techniques, disciplinary methods",
    basis:
      "expressed as series or sequence of steps; sometimes fixed order, sometimes decisions about next step; end result generally considered fixed in this subtype",
    precision:
      "subject-specific or discipline-specific; reflects specific disciplinary ways of thinking",
  },
  characteristics: {
    quantity: "varies by discipline",
    precision: "can be fixed or more open process; end result generally fixed",
    basis:
      "procedural steps that may have fixed order or require decision-making; emphasis on knowledge of procedure rather than ability to use it",
  },
  distinguishedFrom: {
    target: "general strategies",
    basis:
      "subject-specific procedures vs general strategies that cut across disciplines; disciplinary-specific ways of thinking vs cross-disciplinary problem solving",
  },
  buildsUpon:
    "Factual and conceptual knowledge - procedures often result in factual or conceptual knowledge outcomes (e.g., algorithm produces factual answer)",
  learningImplications:
    "Using procedures often produces factual/conceptual knowledge; emphasis on knowing procedure itself; procedures reflect disciplinary thinking",
  expertiseIndicators:
    "Know appropriate algorithms/procedures; understand fixed vs open processes; execute multi-step sequences",
  examples: {
    mathematics: {
      algorithms:
        "long division, solving quadratic equations, multiplying fractions, algorithms for addition of whole numbers",
      procedures:
        "establishing congruence of triangles, simplifying algebraic expressions",
    },
    science: {
      experimentalMethods:
        "general methods for designing and performing experiments",
      laboratoryProcedures:
        "procedures for conducting chemical reactions, dissection techniques",
    },
    socialStudies: {
      researchSkills:
        "procedures for reading maps, estimating age of physical artifacts, collecting historical data",
      analysisSkills: "procedures for analyzing primary sources",
    },
    languages: {
      writingSkills:
        "procedures for spelling words in English, generating grammatically correct sentences",
      analysisSkills:
        "skills used to determine word meaning based on structural analysis",
    },
    arts: {
      techniques: "skills used in painting with watercolors",
      performance: "skills involved in performing the high jump",
    },
  },
};
