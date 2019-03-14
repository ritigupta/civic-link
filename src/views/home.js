import React, { Component } from "react";
import PropTypes from "prop-types";
import MarchImage from "./images/march-for-our-lives.jpg";
import SearchBar from "./components/SearchBar.js";
import Calendar from "./components/calendar/Calendar.js"

class Home extends Component {
  render() {
    return (
      <body className="App-header">
        <div>
          <div className="flex-large-container">
            <aside className="flex-large-item" style={{width:200, marginTop:30, marginRight: 50}}>
              <h1>Our mission is to engage and inspire.</h1>
              <br />
              <p className="mission">
                We wish to engage youth in the civic process through voter
                registration, voter education, and other activities and events that
                help them get involved in their communities and create lasting
                political change.
              </p>
            </aside>
            <div className="flex-large-item" style={{width: 1000, marginTop:30, marginLeft: 20, marginRight: 30}}>
              <img
                className="home"
                src={MarchImage}
                alt="a March For Our Lives protest"
              />
            </div>
          </div>
          <div className="flex-large-item" style={{marginTop:30, marginLeft: 20, marginRight: 30}}>
            <h5>
              Search your city to find political events near you!
            </h5>
            <br />
            <br />
            <SearchBar />
            <br />
            <Calendar />
          </div>
        </div>


      </body>

      
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
