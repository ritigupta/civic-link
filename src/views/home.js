import React, { Component } from "react";
import PropTypes from "prop-types";
import MarchImage from "./images/march-for-our-lives.jpg";
import SearchBar from "./components/SearchBar.js";
import Calendar from "./components/calendar/Calendar.js"

class Home extends Component {
  state = {
    eventList: null
  };
  getEvents = e => {
    e.preventDefault();
    var events = [
      "February 27th, 2019",
      "10 am –",
      " Women's March",
      " @ Cal Anderson Park",
      "11 am –",
      " Seattle Climate Strike",
      " @ Cal Anderson Park",
      "3 pm –",
      " Urban Poverty Forum",
      " @ Hugo House",
      "6 pm –",
      " Brewing for Change",
      " @ Lagunita's Tap Room",
      "6 pm –",
      " Resist Trump Tuesday",
      " @ Henry M. Jackson Federal Building"
    ];
    this.setState({ eventList: events });
  };
  render() {
    return (
      <body className="App-header">
        <div className="flex-large-container">
          <aside
            className="flex-large-item"
            style={{ width: 200, marginTop: 30, marginRight: 50 }}
          >
            <h1>Our mission is to engage and inspire.</h1>
            <br />
            <p className="mission">
              We wish to engage youth in the civic process through voter
              registration, voter education, and other activities and events
              that help them get involved in their communities and create
              lasting political change.
            </p>
          </aside>
          <div
            className="flex-large-item"
            style={{
              width: 1000,
              marginTop: 30,
              marginLeft: 20,
              marginRight: 30
            }}
          >
            <img
              className="home"
              src={MarchImage}
              alt="a March For Our Lives protest"
            />
          </div>
        </div>
        <div
          className="flex-large-item"
          style={{ marginTop: 30, marginLeft: 20, marginRight: 30 }}
        >
          <h5>Search your city to find political events near you!</h5>
          <br />
          <br />
          <SearchBar getEvents={this.getEvents} />
          <br />
          <br />
          {this.state.eventList ? (
            <div>
              <h5>{this.state.eventList[0]}</h5>
              <span>{this.state.eventList[1]}</span>
              <a href="https://womensmarch.com/" target="_blank">{this.state.eventList[2]}</a>
              <span>{this.state.eventList[3]}</span> <br />
              <span>{this.state.eventList[4]}</span>
              <a href="https://www.thestranger.com/events/39564863/seattle-climate-strike" target="_blank">
                {this.state.eventList[5]}
              </a>
              <span>{this.state.eventList[6]}</span> <br />
              <span>{this.state.eventList[7]}</span>
              <a href="https://www.thestranger.com/events/39100678/urban-poverty-forum-2019" target="_blank">
                {this.state.eventList[8]}
              </a>
              <span>{this.state.eventList[9]}</span> <br />
              <span>{this.state.eventList[10]}</span>
              <a href="https://www.thestranger.com/events/39530761/brewing-for-change" target="_blank">
                {this.state.eventList[11]}
              </a>
              <span>{this.state.eventList[12]}</span> <br />
              <span>{this.state.eventList[13]}</span>
              <a href="https://www.thestranger.com/events/25967466/resist-trump-tuesday" target="_blank">
                {this.state.eventList[14]}
              </a>
              <span>{this.state.eventList[15]}</span>
            </div>
          ) : (
            <p>Please enter the name of your city.</p>
          )}
        </div>
        <br />
      </body>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
