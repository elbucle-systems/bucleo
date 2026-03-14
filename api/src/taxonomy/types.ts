export type KnowledgeDimension =
  | "factual"
  | "conceptual"
  | "procedural"
  | "metacognitive"

export type KnowledgeSubtypeName =
  | "terminology"
  | "specificDetailsAndElements"
  | "classificationsAndCategories"
  | "principlesAndGeneralizations"
  | "theoriesModelsAndStructures"
  | "subjectSpecificSkillsAndAlgorithms"
  | "subjectSpecificTechniquesAndMethods"
  | "criteriaForUsingProcedures"
  | "strategicKnowledge"
  | "cognitiveTasks"
  | "selfKnowledge"

export type KnowledgeSubtype = {
  name: KnowledgeSubtypeName
  definition: string
  content: {
    includes: string
    basis: string
    precision?: string
  }
  characteristics: {
    quantity: string
    precision: string
    basis: string
  }
  distinguishedFrom: {
    target: string
    basis: string
  }
  buildsUpon: string
  learningImplications: string
  expertiseIndicators: string
  examples: Record<string, Record<string, string>>
}

export type KnowledgeType = {
  dimension: KnowledgeDimension
  definition: string
  characteristics: {
    complexity?: string
    specificity: string
    abstractionLevel: string
    nature: string
    scope?: string
  }
  distinguishedFrom: {
    target: string
    basis: string
  }
  subtypes: Partial<Record<KnowledgeSubtypeName, KnowledgeSubtype>>
}

// Cognitive Process Dimension Types
export type CognitiveProcessCategory =
  | "remember"
  | "understand"
  | "apply"
  | "analyze"
  | "evaluate"
  | "create"

export type CognitiveSubprocessName =
  | "recognizing"
  | "recalling"
  | "interpreting"
  | "exemplifying"
  | "classifying"
  | "summarizing"
  | "inferring"
  | "comparing"
  | "explaining"
  | "executing"
  | "implementing"
  | "differentiating"
  | "organizing"
  | "attributing"
  | "checking"
  | "critiquing"
  | "generating"
  | "planning"
  | "producing"

export type CognitiveProcess = {
  name: CognitiveSubprocessName
  alternativeNames: string[]
  definition: string
  characteristics: {
    cognitiveAction: string
    complexity: string
    typicalContext: string
  }
  distinguishedFrom: {
    target: string
    basis: string
  }
  buildsUpon: string
  learningImplications: string
  assessmentMethods?: string
  expertiseIndicators: string
  examples: Record<string, string | Record<string, string>>
}

export type CognitiveProcessType = {
  category: CognitiveProcessCategory
  definition: string
  characteristics: {
    focus: string
    complexity: string
    learningOutcome: string
    cognitiveDepth: string
  }
  distinguishedFrom: {
    target: string
    basis: string
  }
  processes: Partial<Record<CognitiveSubprocessName, CognitiveProcess>>
}
