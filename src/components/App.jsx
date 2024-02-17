import { useRef } from "react";
import React, { createContext, useState } from "react";
import "./output.css";
import Course from "./Course";
import Term from "./Term";
import Year from "./Year";
import ColorBlock from "./ColorBlock";
import ColorPalette from "./ColorPalette";
import Side from "./Side";
import Plan from "./Plan";
import PlanPDFGenerator from "./PlanPDFGenerator";
import { PDFViewer } from "@react-pdf/renderer";
//
function App() {
  return (
    <div className="flex  flex-col">
      <Plan />
    </div>
  );
}

export default App;
