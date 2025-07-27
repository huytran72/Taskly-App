import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import DashboardIcon from "@mui/icons-material/Dashboard"

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
        sx={{ color: "primary.main", bgcolor: "white" }}
        icon={<DashboardIcon />}
        label="KennyTran Board"
        clickable
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> </Box>
    </Box>
  )
}

export default BoardBar
