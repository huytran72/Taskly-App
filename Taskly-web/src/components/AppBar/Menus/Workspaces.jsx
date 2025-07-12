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
      <Button
        id="basic-menu"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Workspace 1</MenuItem>
        <MenuItem onClick={handleClose}>Workspace 2</MenuItem>
        <MenuItem onClick={handleClose}>Workspace 3</MenuItem>
      </Menu>
    </Box>
  )
}

export default Workspaces
