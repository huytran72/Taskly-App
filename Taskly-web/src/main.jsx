import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import CssBaseline from "@mui/material/CssBaseline"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
