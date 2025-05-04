import { createTheme } from "@mui/material/styles"
import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { cyan, deepOrange, red } from "@mui/material/colors"

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
          main: deepOrange,
        },
      },
    },
    dark: {
      palette: {
        primary: cyan,
          main: "#000",
        },
      },
    },
  },
  // ...other properties
})

export default theme
