import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const url = new URL(window.location.href);
const redirect = url.searchParams.get("redirect");

if (redirect) {
  window.history.replaceState({}, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <App />
);