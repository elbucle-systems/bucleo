import apiClient from "../apiClient"
import type { CognitiveLevelItem } from "../../types/taxonomy"

export const getCognitiveLevels = (): Promise<CognitiveLevelItem[]> =>
  apiClient
    .get<CognitiveLevelItem[]>("/instructional-design/cognitive-levels")
    .then((r) => r.data)
