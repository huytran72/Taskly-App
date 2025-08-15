import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import DashboardIcon from "@mui/icons-material/Dashboard"
import VpnLockIcon from "@mui/icons-material/VpnLock"
import AddToDriveIcon from "@mui/icons-material/AddToDrive"
import BoltIcon from "@mui/icons-material/Bolt"
import FilterListIcon from "@mui/icons-material/FilterList"
import Avatar from "@mui/material/Avatar"
import AvatarGroup from "@mui/material/AvatarGroup"
import { Tooltip } from "@mui/material"

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
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AvatarGroup max={4} total={10}>
          <Tooltip title="harrytran">
            <Avatar
              alt="harrytran"
              src="https://avatarfiles.alphacoders.com/375/375208.png"
            />
          </Tooltip>
          <Tooltip title="harrytran">
            <Avatar
              alt="harrytran"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdTRqwPR1myojz9l91VCadJ6NPHXDu9tteg&s"
            />
          </Tooltip>
          <Tooltip title="harrytran">
            <Avatar
              alt="harrytran"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfe7dkQpugWC-B6n2afO_JAukUXgOPvJzew&s"
            />
          </Tooltip>
          <Tooltip title="harrytran">
            <Avatar
              alt="harrytran"
              src="https://i2-prod.mirror.co.uk/article34955058.ece/ALTERNATES/s615/0_SS-Daley-London-Fashion-Week-RTW-Spring-2025-Front-Row.jpg"
            />
          </Tooltip>
          <Tooltip title="harrytran">
            <Avatar
              alt="harrytran"
              src="https://avatarfiles.alphacoders.com/215/215144.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
