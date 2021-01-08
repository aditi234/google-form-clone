import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import QuestionsList from "./components/QuestionsList";
import logo from "./assets/logo.png";

export default function App() {
  const [formName, setFormName] = useState("Untitled");
  return (
    <div className="App">
      <nav class="navigation container">
        <div class="nav-brand">
          <img src={logo} alt="logo"></img>
        </div>
        <h2>{formName} form </h2>
      </nav>
      <h1 style={{ textAlign: "center" }}>Form</h1>
      <Title formName={formName} setFormName={setFormName} />
      <QuestionsList />
    </div>
  );
}
