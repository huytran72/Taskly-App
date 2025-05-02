import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
)
