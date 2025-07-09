import Box from "@mui/material/Box"
import ModeSelect from "~/components/ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"
import { ReactComponent as TasklyIcon } from "~/assets/taskly.svg"
import SvgIcon from "@mui/material/SvgIcon"

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.taskly.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <AppsIcon sx={{ color: "primary.main" }} />
        <SvgIcon
          component={TasklyIcon}
          inheritViewBox
          sx={{ color: "primary.main" }}
        />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
