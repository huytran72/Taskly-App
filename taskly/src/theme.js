import { deepOrange, red } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
          secondary: deepOrange,
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
