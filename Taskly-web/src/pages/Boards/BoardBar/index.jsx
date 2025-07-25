import Box from "@mui/material/Box"

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.taskly.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center-between",
        gap: 2,
      }}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar
