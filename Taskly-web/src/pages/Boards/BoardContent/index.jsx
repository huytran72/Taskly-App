import React from "react"
import Box from "@mui/material/Box"

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.taskly.appBarHeight} - ${theme.taskly.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
