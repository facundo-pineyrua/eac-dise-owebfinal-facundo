import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { EquipoFavorito } from "./pages/EquipoFavorito";
import { VerEquipos } from "./pages/VerEquipos";
import { VerEquipoPorId } from "./pages/VerEquipoPorId";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/equipoFavorito" element={<EquipoFavorito />} />
        <Route path="/equipos" element={<VerEquipos />} />
        <Route path="/equipos/:id" element={<VerEquipoPorId />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);