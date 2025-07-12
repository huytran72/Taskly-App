import React from "react"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"

function Workspaces() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button>Dashboard</Button>
    </Box>
  )
}

export default Workspaces
