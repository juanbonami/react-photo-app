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
        {/* links to said string */}
        <Link to="/">Sign-In</Link>
        <Label>Don't have an account?</Label>
        {/* links to said string */}
        <Link to="/sign-up">Sign-Up</Link>

        {/* sets path, exact keyword used mitigate any confusion with next path */}
        <Route exact path="/" component={Homepage} />
        {/* sets path */}
        <Route path="/sign-up" component={Signup} />
      </Router>

    </div>
  );
}

export default App;
