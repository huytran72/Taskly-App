import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import DashboardIcon from "@mui/icons-material/Dashboard"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import BoltIcon from "@mui/icons-material/Bolt"
import FilterListIcon from "@mui/icons-material/FilterList"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"

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
      <Chip sx={MENU_STYLES} icon={<BoltIcon />} label="Automation" clickable />
      <Chip
        sx={MENU_STYLES}
        icon={<FilterListIcon />}
        label="Filters"
        clickable
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>{" "}
      </Box>
    </Box>
  )
}

export default BoardBar
