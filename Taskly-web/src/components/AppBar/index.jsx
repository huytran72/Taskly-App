import React from "react"
import Box from "@mui/material/Box"
import ModeSelect from "../ModeSelect"

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  )
}

export default AppBar
