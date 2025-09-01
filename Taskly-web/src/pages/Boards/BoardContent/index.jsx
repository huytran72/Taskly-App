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
      }}
    >
      {/* Box Column */}
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "400px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          padding: "16px",
          boxShadow: 1,
        }}
      >
        {/* Column Content */}
        <Box sx={{}}>Header</Box>
        <Box sx={{}}>List Cards</Box>
        <Box sx={{}}>Footer</Box>
      </Box>
    </Box>
  )
}

export default BoardContent
