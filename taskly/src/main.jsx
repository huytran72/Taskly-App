import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider
      theme={theme}
      colorSchemeSelector="body"
      defaultColorScheme={{
        light: "light",
        dark: "dark",
      }}
    >
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
