import React, { Component } from "react";
import PropTypes from "prop-types";

class VoterRegistration extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1 class="home">
            This is where you can find out how to register to vote!
          </h1>
        </div>
      </div>
    );
  }
}

VoterRegistration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default VoterRegistration;
