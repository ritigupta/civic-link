import React, { Component } from "react";
import PropTypes from "prop-types";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from "@material-ui/core/styles";
import ProtestImage from "./images/protest.jpeg";
import VoicesImage from "./images/youth-voices-matter.jpg";
import ActivismImage from "./images/activism.jpeg";
import classNames from 'classnames';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <body className="App-header">
          <div className="flex-large-container">
            <aside class="flex-large-item" style={{width:200, paddingTop:30, marginRight: 20}}>
              <h1>We're just like you.</h1>
              <br />
              <p className="mission">
                We're an organization of students from King County who believes in youth engagement and advocacy.
                Our focus is working with underrepresented youth and increasing their awareness of and access to different opportunities.
              </p>
            </aside>
            <div className="flex-large-item">
              <div className={classes.root}>
                  <GridList className={classes.gridList} cols={2.5} cellHeight={450}>
                      <GridListTile>
                        <img src={VoicesImage} alt="youth activists holding up a youth voices matter sign" />
                      </GridListTile>
                      <GridListTile>
                        <img src={ProtestImage} alt="youth engagement through protesting" />
                      </GridListTile>
                      <GridListTile>
                        <img src={ActivismImage} alt="youth activists speaking at a rally" />
                      </GridListTile>
                  </GridList>
              </div>
            </div>
          </div>
      </body>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
