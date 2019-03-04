import React, { Component } from "react";
import PropTypes from "prop-types";
import MarchImage from "./images/march-for-our-lives.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1 class="home">Our mission is to engage and inspire.</h1>
          <br />
          <h2>
            We wish to engage youth in the civic process through voter
            registration, voter education, and other activities and events that
            help them get involved in their communities and create lasting
            political change.
          </h2>
        </div>
        <div>
          <img
            class="home"
            src={MarchImage}
            alt="a March For Our Lives protest"
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
