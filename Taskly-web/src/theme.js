import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { cyan, deepOrange, orange, teal } from "@mui/material/colors"

// Create a theme instance.
const theme = extendTheme({
  taskly: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        main: deepOrange,
      },
      // spacing: (factor) => `${0.25 * factor}rem`, // 0.25rem = 4px
    },
    dark: {
      palette: {
        primary: cyan,
        main: orange,
      },
      // spacing: (factor) => `${0.25 * factor}rem`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem", // 14px
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        }),
      },
    },
  },
  // .. other theme options
})

export default theme
