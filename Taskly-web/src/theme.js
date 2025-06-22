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
      spacing: (factor) => `${0.25 * factor}rem`, // 0.25rem = 4px
    },
    dark: {
      palette: {
        primary: cyan,
        main: orange,
      },
      spacing: (factor) => `${0.25 * factor}rem`, // 0.25rem = 4px
    },
  },
  // ...other properties
})

export default theme
