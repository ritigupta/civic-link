import React, { Component } from "react";
import PropTypes from "prop-types";

class PoliticalForum extends Component {
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

PoliticalForum.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PoliticalForum;
