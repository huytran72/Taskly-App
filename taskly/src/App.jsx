import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import HomeIcon from "@mui/icons-material/Home";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import theme from "./theme";
import { useColorScheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

// function ModeSelect() {
//   const { mode, setMode } = useColorScheme();

//   const handleChange = (event) => {
//     const selectedMode = event.target.value;
//     document.body.classList.remove("mui-light", "mui-dark");
//     document.body.classList.add(`mui-${selectedMode}`);
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
//       <Select
//         labelId="label-select-dark-light-mode"
//         id="select-dark-light-mode"
//         value={mode}
//         label="Mode"
//         onChange={handleChange}
//       >
//         <MenuItem value="light">
//           <LightModeIcon />
//           Light
//         </MenuItem>
//         <MenuItem value="dark">
//           <DarkModeOutlinedIcon />
//           Dark
//         </MenuItem>
//         <MenuItem value="system">
//           <SettingsBrightnessIcon />
//           System
//         </MenuItem>
//       </Select>
//     </FormControl>
//   );
// }

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      {/* <ModeSelect />
      <hr /> */}
      <ModeToggle />
      <hr />
      <div>taskly</div>

      <Typography variant="h2" color="text.secondary">
        H2.Typography
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />

      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
