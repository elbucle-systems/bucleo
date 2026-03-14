import type { KnowledgeSubtype } from "../../types";

export const terminology: KnowledgeSubtype = {
  name: "terminology",
  definition:
    "Labels and symbols (words, numerals, signs, diagrams) that form the basic language of a discipline",
  content: {
    includes:
      "technical words, specialized vocabulary, numerals, mathematical symbols, scientific notation, diagrams, charts",
    basis: "conventions and agreements",
    precision: "high, especially in sciences",
  },
  characteristics: {
    quantity: "large",
    precision: "high, especially in sciences",
    basis: "established by convention and agreement",
  },
  distinguishedFrom: {
    target: "specific details and elements",
    basis: "conventions vs empirical findings",
  },
  buildsUpon: "None - foundational to all other subtypes",
  learningImplications:
    "Foundational for communication within discipline; enables precise expression of ideas",
  expertiseIndicators:
    "Fluent use of technical vocabulary; understanding of symbolic representations and their meanings",
  examples: {
    words: {
      photosynthesis: "process by which plants convert light to energy",
      entropy: "measure of disorder in a thermodynamic system",
      mitochondria: "cellular organelle responsible for energy production",
      algorithm: "step-by-step procedure for solving a problem",
      democracy: "system of government by the people",
      DNA: "deoxyribonucleic acid",
      pH: "measure of acidity or alkalinity",
      velocity: "rate of change of position",
      metaphor: "figure of speech comparing unlike things",
      alliteration: "repetition of initial consonant sounds",
      sonnet: "14-line poetic form",
      chromaticScale: "musical scale with 12 pitches",
      asset: "resource with economic value",
      liability: "financial obligation",
    },
    symbols: {
      pi: "π - mathematical constant representing circle's circumference to diameter ratio",
      delta: "Δ - symbol representing change or difference",
      sigma: "∑ - summation symbol in mathematics",
      integral: "∫ - symbol for integration in calculus",
      plus: "+ - symbol for addition",
      equals: "= - symbol for equality",
      lessThan: "< - symbol for less than",
      greaterThan: "> - symbol for greater than",
    },
    representations: {
      circuitDiagram: "visual representation of electrical connections",
      topographicMap: "map showing elevation and terrain",
      periodicTable: "arrangement of chemical elements",
      cellDiagram: "visual representation of cell structure and organelles",
      phylogeneticTree: "diagram showing evolutionary relationships",
    },
  },
};
