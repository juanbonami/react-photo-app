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
    <div className="App" >

      <Router>
        <Link to="/">Sign-In Page</Link>
        <Link to="/sign-up">Sign-Up Page</Link>

        <Route exact path="/" component={Homepage} />
        <Route path="/sign-up" component={Signup} />

      </Router>

    </div>
  );
}

export default App;
