import React from "react"
import Box from "@mui/material/Box"
import ModeSelect from "~/components/ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"
import { ReactComponent as TasklyIcon } from "~/assets/taskly.svg"
import SvgIcon from "@mui/material/SvgIcon"

function AppBar() {
  return (
    <Box
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
        <SvgIcon component={TasklyIcon} inheritViewBox />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
