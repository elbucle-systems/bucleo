import type { KnowledgeSubtype } from "../../types";

export const criteriaForUsingProcedures: KnowledgeSubtype = {
  name: "criteriaForUsingProcedures",
  definition:
    "Knowledge of when to use subject-specific procedures; understanding expert systematization for procedure selection",
  content: {
    includes:
      "procedure selection criteria, historical uses, methodology applications, methodological relationships",
    basis:
      "knowing when to use procedures through historical/encyclopedic knowledge",
    precision:
      "prelude to inquiry; simpler than execution but functional for engagement",
  },
  characteristics: {
    quantity: "varies by discipline",
    precision:
      "knowing methods used in similar inquiries; showing relationships between methods",
    basis:
      "expert systematization for attacking problems; knowing when and where to apply procedures",
  },
  distinguishedFrom: {
    target: "subject-specific techniques and methods",
    basis:
      "knowing WHEN vs HOW to use procedures; selection criteria vs execution",
  },
  buildsUpon:
    "Subject-specific techniques and methods - understanding methods before determining when appropriate",
  learningImplications:
    "Simpler than execution but important inquiry prelude; students learn methods from similar inquiries; show method relationships; criteria gain meaning through concrete situations",
  expertiseIndicators:
    "Know when/where to apply procedures; conditionalized knowledge; understand historical/encyclopedic uses; select appropriate methods for problems",
  examples: {
    writing: {
      essaySelection:
        "criteria for determining which of several types of essays to write (e.g., expository, persuasive)",
    },
    mathematics: {
      methodSelection:
        "criteria for determining which method to use in solving algebraic equations",
    },
    statistics: {
      procedureSelection:
        "criteria for determining which statistical procedure to use with data collected in a particular experiment",
    },
    arts: {
      techniqueSelection:
        "criteria for determining which technique to apply to create a desired effect in a particular watercolor painting",
    },
  },
};
