import apiClient from "../apiClient"
import type {
  KnowledgeDimensionItem,
  KnowledgeSubtypeFlat,
} from "../../types/taxonomy"

export const getKnowledgeDimensions = (): Promise<KnowledgeDimensionItem[]> =>
  apiClient
    .get<KnowledgeDimensionItem[]>("/instructional-design/knowledge-dimensions")
    .then((r) => r.data)

export const getKnowledgeDimensionSubtypes = (
  dimension: string,
): Promise<KnowledgeSubtypeFlat[]> =>
  apiClient
    .get<
      KnowledgeSubtypeFlat[]
    >(`/instructional-design/knowledge-dimensions/${dimension}/subtypes`)
    .then((r) => r.data)
