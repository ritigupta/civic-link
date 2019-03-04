import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import CivicToolbar from "./views/components/CivicToolbar";
import Candidates from "./views/candidates";
import Error from "./views/error";
import Home from "./views/home";
import About from "./views/about";
import VoterRegistration from "./views/voter-registration";
import EducationalResources from "./views/educational-resources";
import GeneralPoliticalInfo from "./views/general-political-info";
import PoliticalForum from "./views/political-forum";
import PollingSites from "./views/polling-sites";
import EventPlanningGuide from "./views/event-planning-guide";
import CallingRepsGuide from "./views/calling-reps-guide";

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
              <Route path="/about" component={About} />
              <Route path="/voter-registration" component={VoterRegistration} />
              <Route
                path="/educational-resources"
                component={EducationalResources}
              />
              <Route
                path="/general-political-info"
                component={GeneralPoliticalInfo}
              />
              <Route path="/political-forum" component={PoliticalForum} />
              <Route path="/polling-sites" component={PollingSites} />
              <Route
                path="/event-planning-guide"
                component={EventPlanningGuide}
              />
              <Route path="/calling-reps-guide" component={CallingRepsGuide} />
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
