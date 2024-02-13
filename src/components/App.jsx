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
  const planRef = useRef(null);

  return (
    <div className="flex  flex-col">
      <Plan />
      <Side />
      <PDFViewer>
        <PlanPDFGenerator />
      </PDFViewer>
    </div>
  );
}

export default App;
