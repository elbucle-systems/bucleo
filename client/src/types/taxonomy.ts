// ─── Knowledge Dimension ─────────────────────────────────────────────────────

export type KnowledgeDimensionKey =
  | "factual"
  | "conceptual"
  | "procedural"
  | "metacognitive"

export type CognitiveLevelKey =
  | "remember"
  | "understand"
  | "apply"
  | "analyze"
  | "evaluate"
  | "create"

// Response from GET /api/instructional-design/knowledge-dimensions
export interface KnowledgeDimensionItem {
  key: KnowledgeDimensionKey
  dimension: string
  definition: string
  characteristics: Record<string, string>
  distinguishedFrom: {
    target: string
    basis: string
  }
  subtypes: Record<string, KnowledgeSubtypeDetail>
}

export interface KnowledgeSubtypeDetail {
  name: string
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

// Response from GET /api/instructional-design/knowledge-dimensions/:dimension/subtypes
export interface KnowledgeSubtypeFlat extends KnowledgeSubtypeDetail {
  key: string
}

// ─── Cognitive Level ──────────────────────────────────────────────────────────

// Response from GET /api/instructional-design/cognitive-levels
export interface CognitiveLevelItem {
  key: CognitiveLevelKey
  category: string
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
  processes: Record<string, CognitiveProcessDetail>
}

export interface CognitiveProcessDetail {
  name: string
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

// Response from GET /api/instructional-design/cognitive-levels/:level/subprocesses
export interface CognitiveProcessFlat extends CognitiveProcessDetail {
  key: string
}

// ─── Classification Result ────────────────────────────────────────────────────

// Response from POST /api/instructional-design/classify-knowledge
export interface ClassificationResult {
  dimension: {
    name: string
    explanation: string
  }
  subtype: {
    name: string
    explanation: string
  }
  examples: Array<{
    scenario: string
    howItAppliesToObjective: string
  }>
}

// ─── Form ─────────────────────────────────────────────────────────────────────

export interface LearningObjectiveFormData {
  learningObjective: string
  subject: string
  gradeLevel: string
}
