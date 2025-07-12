import Box from "@mui/material/Box"
import ModeSelect from "~/components/ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"
import { ReactComponent as TasklyIcon } from "~/assets/taskly.svg"
import SvgIcon from "@mui/material/SvgIcon"
import Typography from "@mui/material/Typography"
import Workspaces from "./Menus/Workspaces"

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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TasklyIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Taskly
          </Typography>
        </Box>
        <Workspaces />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
