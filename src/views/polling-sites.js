import React, { Component } from "react";
import PropTypes from "prop-types";

class PollingSites extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1 class="home">
            Coming Soon
          </h1>
        </div>
      </div>
    );
  }
}

PollingSites.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PollingSites;
