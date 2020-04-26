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
import { Label } from "semantic-ui-react";

function App() {
  return (
    <div className="App" >

      <Router>
        <Label>Have an account?</Label>
        <Link to="/">Sign-In</Link>
        <Label>Don't have an account?</Label>
        <Link to="/sign-up">Sign-Up</Link>

        <Route exact path="/" component={Homepage} />
        <Route path="/sign-up" component={Signup} />

      </Router>

    </div>
  );
}

export default App;
