import { useRef } from "react";

import "./output.css";
import Course from "./Course";
import Term from "./Term";
import Year from "./Year";
import ColorBlock from "./ColorBlock";
import ColorPalette from "./ColorPalette";
import Side from "./Side";
import Plan from "./Plan";

function App() {
  const planRef = useRef(null);

  return (
    <div className="flex  flex-col">
      <Plan />
      <Side />
    </div>
  );
}

export default App;
