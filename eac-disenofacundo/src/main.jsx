import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EquipoFavorito } from "./pages/EquipoFavorito.jsx";
import { VerEquipos } from "./pages/VerEquipos.jsx";
import {VerEquiposPorId} from "./pages/VerEquiposPorId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/equipoFavorito",
    element: <EquipoFavorito />,
  },
  {
    path: "/equipos",
    element: <VerEquipos />,
  },
  {
    path: "/VerEquiposPorId/:id",
    element: <VerEquiposPorId />,
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);