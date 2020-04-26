import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
