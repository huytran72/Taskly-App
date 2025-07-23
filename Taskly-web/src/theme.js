import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
import { cyan, deepOrange, orange, teal } from "@mui/material/colors"
import { Height } from "@mui/icons-material"

// Create a theme instance.
const theme = extendTheme({
  taskly: {
    appBarHeight: "70px",
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem", // 14px
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem", // 14px
        }),
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
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          // "& fieldset": {
          //   borderWidth: "1px !important", // Ensure consistent border width
          // },
        }),
      },
    },
  },
  // .. other theme options
})

export default theme
