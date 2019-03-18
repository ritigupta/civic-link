import React, { Component } from "react";
import PropTypes from "prop-types";
import ListenImage from "./images/young-people-politics.jpg";
import SearchBar from "./components/SearchBar.js";
import CalendarImage from "./images/calendar.png";
import Chip from '@material-ui/core/Chip';
import { withStyles } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";
import { NONAME } from "dns";

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: "wrap",
    width: "100px"
  },
  chip: {
    backgroundColor: "#ffffff",
    boxShadow: "2px 3px 10px 2px  rgba(0,0,0,0.25)",
    marginBottom: "8px",
  },
  clickable: {
    backgroundColor: yellow[600]
  }
});


class Home extends Component {
  state = {
    eventList: null
  };
  getEvents = e => {
    e.preventDefault();
    var events = [
      "Featured Events",
      "10 am –",
      " Women's March",
      "11 am –",
      " Seattle Climate Strike",
      "3 pm –",
      " Urban Poverty Forum",
      "6 pm –",
      " Brewing for Change",
      "6 pm –",
      " Resist Trump Tuesday",
    ];
    this.setState({ eventList: events });
  };
  render() {
    const { classes } = this.props;
    return (
      <body className="App-header">
        <div className="container">
          <img
            className="home"
            src={ListenImage}
            alt="hands raised in solidarity at a protest, with a Listen to the Kids sign"
          />
          <div class="text-block"> 
            <h1>Our mission is to engage and inspire.</h1>
            <br />
            <p className="mission">
              We wish to engage youth in the civic process through voter
              registration, voter education, and other activities and events
              that help them get involved in their communities and create
              lasting political change.
            </p>
          </div>
        </div>
        
        <div className="flex-large-container">
          <div
            className="flex-large-item"
            style={{ width: 275, marginTop: 30, marginLeft: 10, marginRight: 50}}
          >
            <h5>Search your city to find political events near you!</h5>
            <br />
            <br />
            <SearchBar getEvents={this.getEvents} />
            <br />
            <br />
            {/* Parses through array to display cupcoming political events; links each event to its webpage*/}
            {this.state.eventList ? (
              <div>
                <h3>{this.state.eventList[0]}</h3>
                <br className="break"></br>
                <span>{this.state.eventList[1]}</span>
                <a href="https://womensmarch.com/" target="_blank">{this.state.eventList[2]}</a>
                <br className="break"></br>
                <span>{this.state.eventList[3]}</span>
                <a href="https://www.thestranger.com/events/39564863/seattle-climate-strike" target="_blank">
                  {this.state.eventList[4]}</a>
                <br className="break"></br>
                <span>{this.state.eventList[5]}</span>
                <a href="https://www.thestranger.com/events/39100678/urban-poverty-forum-2019" target="_blank">
                  {this.state.eventList[6]}</a>
                <br className="break"></br>
                <span>{this.state.eventList[7]}</span>
                <a href="https://www.thestranger.com/events/39530761/brewing-for-change" target="_blank">
                  {this.state.eventList[8]}</a>
                <br className="break"></br>
                <span>{this.state.eventList[9]}</span>
                <a href="https://www.thestranger.com/events/25967466/resist-trump-tuesday" target="_blank">
                  {this.state.eventList[10]}
                </a>
              </div>
            ) : (
              <p> </p>
            )}
          </div>
          <div className="flex-large-item" style={{marginTop: 30, marginBottom: 70}}>
            <img
              src={CalendarImage}
              style={{width:575}}
              alt="static calendar of upcoming events in March">
            </img>
          </div>
          <div className="flex-large-item"style={{marginTop: 75, marginLeft: 30}}>
            <h6>Filter by Issue</h6>
            <br></br>
            <div className={classes.root}>
              <Chip
                label="Gun Violence"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="Environment / Climate Change"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="Immigrant Rights"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="Racial Equity"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="Women's Rights / Feminism"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="LGBTQ+ Rights"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="Social Services"
                className={classes.chip}
                clickable={true}
              />
              <Chip
                label="Foreign Affairs"
                className={classes.chip}
                clickable={true}
              />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
