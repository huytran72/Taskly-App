import React from "react"
import Box from "@mui/material/Box"
import ModeSelect from "~/components/ModeSelect"

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box></Box>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
