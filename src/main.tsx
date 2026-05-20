import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const url = new URL(window.location.href);
const redirect = url.searchParams.get("redirect");

if (redirect) {
  // Replace the browser URL without triggering a full navigation so the
  // SPA can boot at the requested route instead of entering a redirect loop.
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <App />
);