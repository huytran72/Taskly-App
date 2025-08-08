import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import DashboardIcon from "@mui/icons-material/Dashboard"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import BoltIcon from "@mui/icons-material/Bolt"

const MENU_STYLES = {
  color: "primary.main",
  bgcolor: "white",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
}

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
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> </Box>
      <Chip
        sx={MENU_STYLES}
        icon={<DashboardIcon />}
        label="KennyTran Board"
        clickable
      />
      <Chip
        sx={MENU_STYLES}
        icon={<VpnLockIcon />}
        label="Public/Private Workspace"
        clickable
      />
      <Chip
        sx={MENU_STYLES}
        icon={<AddToDriveIcon />}
        label="Add To Google Drive"
        clickable
      />
      <Chip
        sx={MENU_STYLES}
        icon={<AddToDriveIcon />}
        label="Add To Google Drive"
        clickable
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> </Box>
    </Box>
  )
}

export default BoardBar
