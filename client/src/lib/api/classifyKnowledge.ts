import apiClient from "../apiClient"
import type {
  ClassificationResult,
  LearningObjectiveFormData,
} from "../../types/taxonomy"

export const classifyKnowledge = (
  data: LearningObjectiveFormData,
): Promise<ClassificationResult> =>
  apiClient
    .post<ClassificationResult>(
      "/instructional-design/classify-knowledge",
      data,
    )
    .then((r) => r.data)
