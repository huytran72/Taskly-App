import React from "react"
import Box from "@mui/material/Box"

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: "calc(100vh - 106px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
