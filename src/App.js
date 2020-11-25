import React from "react";
import { Languages } from "./components/Languages";
import { Translate } from "./components/Translate";
import { Field } from "./components/Field";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Field />
      <Languages />
      <Translate />
    </div>
  );
}
