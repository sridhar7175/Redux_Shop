import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./container/Homepage";
import Aboutpage from "./container/Aboutpage";
import Cartpage from "./container/Cartpage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/cart" component={Cartpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
