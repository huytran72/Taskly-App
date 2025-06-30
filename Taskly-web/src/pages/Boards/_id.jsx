import React from "react"

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
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
