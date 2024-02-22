import { useRef } from "react";
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./output.css";
import Plan from "./Plan";
import Nav from "./Nav";
import MEPlan from "../plans/ME-plan.json";
import SWEPlan from "../plans/SWE-plan.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav names={["SWE", "ME"]} />} />
        <Route path="/SWE" element={<Plan plan={SWEPlan} major="SWE" />} />
        <Route path="/ME" element={<Plan plan={MEPlan} major="ME" />} />
      </Routes>
    </Router>
  );
}

export default App;
