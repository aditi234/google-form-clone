import React from "react";
import "./App.css";
import Title from "./components/Title";
import QuestionsList from "./components/QuestionsList";
import logo from "./assets/logo.png"
import { BsFolder } from 'react-icons/bs';

export default function App() {
  return (
    <div className="App">
      <nav class="navigation container">
        <div class="nav-brand"><img src={logo}></img></div>
        <h2>Untitled form  </h2>
        
      </nav>
      <h1 style={{ textAlign: "center"}}>Form</h1>
      <Title />
      <QuestionsList />
    </div>
  );
}
