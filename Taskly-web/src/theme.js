import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { cyan, deepOrange, orange, teal } from "@mui/material/colors"

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        main: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        main: orange,
      },
    },
  },
  // ...other properties
})

export default theme
