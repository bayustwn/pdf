import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@/app/App";
import HomePage from "@/pages/HomePage";
import EditorPage from "@/pages/EditorPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="editor" element={<EditorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
