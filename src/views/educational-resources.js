import React, { Component } from "react";
import PropTypes from "prop-types";

class EducationalResources extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <h1 class="home">Tryna learn? Well, you came to the right place!</h1>
        </div>
      </div>
    );
  }
}

EducationalResources.propTypes = {
  classes: PropTypes.object.isRequired
};

export default EducationalResources;