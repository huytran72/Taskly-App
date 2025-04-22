import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>taskly</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
