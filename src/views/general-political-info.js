import React, { Component } from "react";
import PropTypes from "prop-types";

class GeneralPoliticalInfo extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1 class="home">
            This is the place to learn about how government works!
          </h1>
        </div>
      </div>
    );
  }
}

GeneralPoliticalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default GeneralPoliticalInfo;
