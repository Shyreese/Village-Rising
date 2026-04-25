import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Add this
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);