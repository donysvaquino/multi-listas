import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaDetalhada from "./pages/ListaDetalhada.jsx";
import VerListas from "./pages/VerListas.jsx";
import NovaLista from "./pages/NovaLista.jsx";
import { useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/VerListas",
    element: <VerListas />,
  },
  {
    path: "/ListaDetalhada/:listaId",
    element: <ListaDetalhada />,
  },
  {
    path: "/NovaLista",
    element: <NovaLista />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
