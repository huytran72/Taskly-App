import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import ModeSelect from "../../components/ModeSelect"
import AppBar from "../../components/AppBar"
import BoardBar from "./BoardBar"

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <AppBar />

      <BoardBar />
    </Container>
  )
}

export default Board
