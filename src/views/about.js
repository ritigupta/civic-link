import React, { Component } from "react";
import PropTypes from "prop-types";

class About extends Component {
  render() {
    return (
      <body className="App-header">
          <div class="flex-large-container">
            <aside class="flex-large-item" style={{width:185, paddingTop:30, marginRight: 50}}>
              <h1>We're just like you.</h1>
              <br />
              <p className="mission">
                We are an organization of students from King County who believe in youth engagement and advocacy.
                Our focus is working with underrepresented youth and increasing their awareness of and access to different opportunities.
              </p>
            </aside>
          </div>
      </body>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default About;
