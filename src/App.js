import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./containers/Home";
import "antd/dist/antd.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         
          <Route path="/" exact component={Home}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
