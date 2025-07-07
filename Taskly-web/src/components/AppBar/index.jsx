import React from "react"
import Box from "@mui/material/Box"
import ModeSelect from "~/components/ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.appTaskly.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {" "}
        <AppsIcon sx={{ color: "primary.main" }} />
        Taskly
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
