import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CivicToolbar from "./components/CivicToolbar";
import Candidates from "./views/candidates";
import Error from "./views/error";
import Home from "./views/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <CivicToolbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/candidates" component={Candidates} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
