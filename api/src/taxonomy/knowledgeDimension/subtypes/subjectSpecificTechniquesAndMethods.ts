import type { KnowledgeSubtype } from "../../types";

export const subjectSpecificTechniquesAndMethods: KnowledgeSubtype = {
  name: "subjectSpecificTechniquesAndMethods",
  definition:
    "Techniques and methods that are more open and not fixed; do not lead to a single predetermined answer or solution",
  content: {
    includes:
      "general scientific method, techniques for problem solving, research methods, evaluation methods, disciplinary approaches",
    basis:
      "result of consequement, agreement, or disciplinary norms rather than direct outcomes of observation, experimentation, or discovery",
    precision:
      "more open than algorithms; reflects how experts think and attack problems rather than results of such thought",
  },
  characteristics: {
    quantity: "varies by discipline",
    precision:
      "open-ended; experimental design can vary greatly depending on host of factors",
    basis:
      "reflects how experts in field think and attack problems; focuses on process rather than fixed outcomes",
  },
  distinguishedFrom: {
    target: "subject-specific skills and algorithms",
    basis:
      "open and not fixed vs fixed result; reflects expert thinking and problem-solving approach vs producing specific answers; 'scientific' way of thinking vs algorithmic procedures",
  },
  buildsUpon:
    "Subject-specific skills and algorithms - techniques build upon and may incorporate multiple algorithmic procedures",
  learningImplications:
    "Involves 'mathematization' of non-math problems; requires understanding scientific method application to varied situations including social/policy problems",
  expertiseIndicators:
    "Know general methods and application; think in disciplinary-specific ways; approach problems with appropriate methodological frameworks",
  examples: {
    science: {
      generalMethod:
        "knowledge of general scientific method and how to apply it to different situations, including social situations and policy problems",
      experimentalDesign:
        "following general scientific method in somewhat sequential manner to design a study; resulting design can vary greatly",
      problemSolving:
        "techniques used by scientists in seeking solutions to problems",
    },
    mathematics: {
      mathematization:
        "'mathematization' of problems not originally presented as mathematics problems (e.g., choosing checkout line in grocery store as mathematical problem)",
    },
    socialSciences: {
      researchMethods:
        "research methods relevant to the social sciences; approaches to studying social phenomena",
    },
    health: {
      evaluationMethods: "methods for evaluating health concepts",
    },
    literature: {
      criticismMethods: "various methods of literary criticism",
    },
  },
};
