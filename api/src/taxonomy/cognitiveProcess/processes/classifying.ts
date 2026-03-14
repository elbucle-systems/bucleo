import type { CognitiveProcess } from "../../types";

export const classifying: CognitiveProcess = {
  name: "classifying",
  alternativeNames: ["categorizing", "subsuming"],
  definition:
    "Recognizing that something (particular instance or example) belongs to a certain category (concept or principle)",
  characteristics: {
    cognitiveAction:
      "detect relevant features or patterns that 'fit' both specific instance and concept or principle; match features to category criteria; determine category membership",
    complexity:
      "moderate; requires understanding category defining features and recognizing them in instances",
    typicalContext:
      "categorization tasks, diagnosis, taxonomic classification, sorting instances into categories",
  },
  distinguishedFrom: {
    target: "exemplifying",
    basis:
      "complementary process to exemplifying; classifying begins with specific instance and requires finding general concept/principle (instance→concept), whereas exemplifying begins with general concept and requires finding specific instance (concept→instance); opposite directions",
  },
  buildsUpon:
    "Understanding category features - must know defining characteristics to recognize category membership",
  learningImplications:
    "Tests conceptual knowledge of categories; students demonstrate understanding of defining features by recognizing them in instances; applies taxonomic and conceptual knowledge",
  assessmentMethods:
    "Constructed response: given instance, produce related concept/principle; selected response: select concept/principle from list; sorting task: place instances into categories",
  expertiseIndicators:
    "Accurately classify diverse instances; handle borderline cases; explain classification rationale based on features; distinguish category membership reliably",
  examples: {
    psychology:
      "Classify observed or described cases of mental disorders (observe video of person's behavior, indicate mental disorder displayed)",
    biology:
      "Categorize species of various prehistoric animals (given pictures, group them with others of same species)",
    mathematics:
      "Determine categories to which numbers belong (given example, circle all numbers in list from same category)",
    socialStudies:
      "Classify observed or described cases of mental illness; categorize historical events by type",
  },
};
