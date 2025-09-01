import React from "react"
import Box from "@mui/material/Box"

function BoardContent() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.taskly.appBarHeight} - ${theme.taskly.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Box Column */}
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "400px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "##333643" : "##ebecf0",
          borderRadius: "4px",
          padding: "16px",
          boxShadow: 1,
        }}
      >
        {/* Column Content */}
      </Box>
    </Box>
  )
}

export default BoardContent
