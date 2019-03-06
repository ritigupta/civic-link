import React, { Component } from "react";
import PropTypes from "prop-types";
import MarchImage from "./images/march-for-our-lives.jpg";
import SearchBar from "./components/SearchBar.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <h1>Our mission is to engage and inspire.</h1>
          <br />
          <p className="mission">
            We wish to engage youth in the civic process through voter
            registration, voter education, and other activities and events that
            help them get involved in their communities and create lasting
            political change.
          </p>
          <br />
          <br />
          <h5 className="event">
            Search your city to find political events near you!
          </h5>
          <br />
          <br />
          <SearchBar />
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
