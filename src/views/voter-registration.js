import React, { Component } from "react";
import PropTypes from "prop-types";

class VoterRegistration extends Component {
  render() {
    return (
      <div className="flex-large-container">
        <aside className="flex-large-item" style={{width:200, marginTop:30, marginRight: 30}}>
          <h1>Get out the VOTE.</h1>
          <br />
          <p className="mission">
            Every vote counts, and yours is no exception. The following resources can help you get started in the state of Washington.
          </p>
        </aside>
      </div>
    );
  }
}

VoterRegistration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default VoterRegistration;
