import apiClient from "../apiClient"
import type {
  CognitiveLevelItem,
  CognitiveProcessFlat,
} from "../../types/taxonomy"

export const getCognitiveLevels = (): Promise<CognitiveLevelItem[]> =>
  apiClient
    .get<CognitiveLevelItem[]>("/instructional-design/cognitive-levels")
    .then((r) => r.data)

export const getCognitiveLevelSubprocesses = (
  level: string,
): Promise<CognitiveProcessFlat[]> =>
  apiClient
    .get<
      CognitiveProcessFlat[]
    >(`/instructional-design/cognitive-levels/${level}/subprocesses`)
    .then((r) => r.data)
