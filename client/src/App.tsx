import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Menu from "./components/Menu"
import LearningObjectivesPage from "./pages/instructional-design/LearningObjectivesPage"
import TaxonomyPage from "./pages/taxonomy/TaxonomyPage"
import KnowledgeDimensionsPage from "./pages/taxonomy/KnowledgeDimensionsPage"
import KnowledgeDimensionDetailPage from "./pages/taxonomy/KnowledgeDimensionDetailPage"
import CognitiveLevelsPage from "./pages/taxonomy/CognitiveLevelsPage"
import CognitiveLevelDetailPage from "./pages/taxonomy/CognitiveLevelDetailPage"

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Instructional design tools */}
        <Route
          path="/instructional-design/learning-objectives"
          element={<LearningObjectivesPage />}
        />

        {/* Taxonomy documentation */}
        <Route path="/taxonomy" element={<TaxonomyPage />} />
        <Route
          path="/taxonomy/knowledge-dimensions"
          element={<KnowledgeDimensionsPage />}
        />
        <Route
          path="/taxonomy/knowledge-dimensions/:dimension"
          element={<KnowledgeDimensionDetailPage />}
        />
        <Route
          path="/taxonomy/cognitive-levels"
          element={<CognitiveLevelsPage />}
        />
        <Route
          path="/taxonomy/cognitive-levels/:level"
          element={<CognitiveLevelDetailPage />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
