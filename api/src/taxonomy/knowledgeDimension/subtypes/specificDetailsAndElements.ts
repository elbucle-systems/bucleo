import type { KnowledgeSubtype } from "../../types";

export const specificDetailsAndElements: KnowledgeSubtype = {
  name: "specificDetailsAndElements",
  definition:
    "Discrete facts about specific instances - events, locations, people, dates, and sources",
  content: {
    includes:
      "specific dates, time periods, locations, geographic features, names of individuals, sources of information, numerical data, measurements, specific instances",
    basis: "direct results from observation, experimentation, and discovery",
    precision: "can be exact or approximate",
  },
  characteristics: {
    quantity: "tremendous",
    precision: "can be exact or approximate",
    basis:
      "results of expert thought and problem solving; derived directly from empirical investigation",
  },
  distinguishedFrom: {
    target: "terminology and classifications",
    basis:
      "specific instances (the plot of this story) vs categories (what makes a plot a plot); empirical findings vs agreements",
  },
  buildsUpon: "None - foundational factual knowledge",
  learningImplications:
    "Provides concrete examples and context; results from empirical investigation and expert problem solving",
  expertiseIndicators:
    "Recall of relevant facts; ability to cite specific evidence and sources to support claims",
  examples: {
    temporal: {
      americanRevolution: "began in 1775",
      battleOfWaterloo: "occurred on June 18, 1815",
      originOfSpecies: "published by Darwin in 1859",
      worldWarII: "ended in 1945",
      discoveryOfRadium: "discovered by Marie Curie in 1898",
      monaLisa: "painted by da Vinci in the early 16th century",
    },
    spatial: {
      mountEverest: "8,849 meters tall",
      parisLocation: "capital of France",
      nileRiver: "approximately 6,650 km long",
      amazonRainforest: "covers approximately 5.5 million square kilometers",
      saharaDesert: "located in North Africa",
      greatWallOfChina: "built over several dynasties",
      tokyoPopulation: "over 37 million",
      philadelphia: "where the Declaration of Independence was signed",
    },
    quantitative: {
      speedOfLight: "299,792,458 meters per second",
      humanBones: "206 bones in the human body",
      waterFreezingPoint: "0°C at sea level",
      waterBoilingPoint: "100°C at sea level",
      carbonAtomicNumber: "6",
      pureWaterPH: "7",
      beethovenSymphonies: "composed nine symphonies",
    },
    biographical: {
      albertEinstein: "developed the theory of relativity",
      shakespeare: "born in Stratford-upon-Avon",
      marieCurie: "discovered radium",
      isaacNewton: "formulated the laws of motion",
      plato: "was a student of Socrates",
      charlesDarwin: "published On the Origin of Species",
      leonardoDaVinci: "painted the Mona Lisa",
    },
  },
};
