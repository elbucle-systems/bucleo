import apiClient from "../apiClient"
import type { KnowledgeDimensionItem } from "../../types/taxonomy"

export const getKnowledgeDimensions = (): Promise<KnowledgeDimensionItem[]> =>
  apiClient
    .get<KnowledgeDimensionItem[]>("/instructional-design/knowledge-dimensions")
    .then((r) => r.data)
