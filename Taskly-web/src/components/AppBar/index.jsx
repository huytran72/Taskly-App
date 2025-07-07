import React from "react"
import Box from "@mui/material/Box"
import ModeSelect from "~/components/ModeSelect"
import AppsIcon from "@mui/icons-material/Apps"

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>Taskly</Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  )
}

export default AppBar
