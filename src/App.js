import React from "react";
import "./App.css";
import Title from "./components/Title";
import QuestionsList from "./components/QuestionsList";

export default function App() {
  return (
    <div className="App">
      <nav class="navigation container">
        <div class="nav-brand">Untitled form</div>
      </nav>
      <h1 style={{ textAlign: "center", color: "#333399" }}>Form</h1>
      <Title />
      <QuestionsList />
    </div>
  );
}
