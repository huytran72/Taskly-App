import Button from "@mui/material/Button"
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import ThreeDRotation from "@mui/icons-material/ThreeDRotation"
import HomeIcon from "@mui/icons-material/Home"
import { pink } from "@mui/material/colors"
import Typography from "@mui/material/Typography"
import { useColorScheme } from "@mui/material/styles"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Box from "@mui/material/Box"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"
import Container from "@mui/material/Container"

function App() {
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

export default App
