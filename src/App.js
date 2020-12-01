import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

import "./styles.css";

export default function App() {
  //start our state with hooks
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Field label="enter english" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
