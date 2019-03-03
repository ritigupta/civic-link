import React, { Component } from "react";
import PropTypes from "prop-types";

class PoliticalForum extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1 class="home">
            There's nothing here yet, but you can help change that!
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
