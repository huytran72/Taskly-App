import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff5252",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#000",
        },
      },
    },
  },
});

export default theme;
