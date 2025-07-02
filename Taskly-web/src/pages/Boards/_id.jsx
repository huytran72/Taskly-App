import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import ModeSelect from "../../components/ModeSelect"
import AppBar from "../../components/AppBar"

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <AppBar />
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: "58px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
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
    </Container>
  )
}

export default Board
