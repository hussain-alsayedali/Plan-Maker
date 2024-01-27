import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./output.css";
import Course from "./Course";
import Term from "./Term";
import Year from "./Year";
import ColorBlock from "./ColorBlock";
import ColorPalette from "./ColorPalette";
import Side from "./Side";
import Plan from "./Plan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex ">
      <Plan />
      <Side />
    </div>
  );
}

export default App;
