import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { withStyles} from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";


const styles = theme => ({
  
  card: {
    width: 301,
    height: 490,
    boxShadow: "3px 6px 10px 1px rgba(0,0,0,0.3)"
  },
  media: {
    height: 250,
    margin: "17px 17px 0px 17px"
  },
  cssRoot: {
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
    borderRadius: "15px",
    margin: "7px 0px 0px 12px",
    "&:hover": {
      backgroundColor: yellow[700]
    }
  }
});

class VoterRegistration extends Component {
  render() {
    const { classes } = this.props;
    return (
      <body className="App-header">
        <div className="flex-large-container">
          <aside className="flex-large-item" style={{width:185, marginTop:30, marginRight: 50}}>
            <h1>Get out the VOTE.</h1>
            <br />
            <p className="mission">
              Every vote counts, and yours is no exception. The following resources can help you get started in the state of Washington.
            </p>
          </aside>

          <div class="flex-large-item">
            <div class="flex-card-container">
              <div class="flex-card">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    style={{ height: 0, paddingTop: "69%" }}
                    image={require("./images/vote-badge.gif")}
                    title="Register to Vote GIF"
                  />
                  <CardContent>
                    <h3>MyVote</h3>
                    <h4>Voter Registration</h4>
                    <br />
                    <p>
                      Plan ahead by registering to vote in the state of Washington online. 
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="medium"
                      className={classes.cssRoot}
                      href="https://weiapplets.sos.wa.gov/MyVoteOLVR/MyVoteOLVR"
                      target="_blank"
                    >
                      <h6>register to vote</h6>
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div class="flex-card">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    style={{ height: 0, paddingTop: "50%", marginTop:30 }}
                    image={require("./images/vote.png")}
                    title="Civic Link VOTE Sticker"
                  />
                  <CardContent style={{marginTop: 45}}>
                    <h3>VOTE Sticker</h3>
                    <h4>Spreading the Word</h4>
                    <br />
                    <p>
                      Fill out a quick form to get a free sticker. The QR code will guide others to our site! 
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="medium"
                      className={classes.cssRoot}
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe88ZpsOdVEvpT2sqEhJkYdGSUrzTG3EpREc4oqr8vFWXDTYA/viewform"
                      target="_blank"
                    >
                      <h6>free sticker please</h6>
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div className="flex-card">
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    style={{ height: 0, paddingTop: "69%" }}
                    image={require("./images/districtmap.png")}
                    title="District Map of Washington"
                  />
                  <CardContent>
                    <h3>WA State Legislature</h3>
                    <h4>District Finder</h4>
                    <br />
                    <p>
                      Knowing your district will allow you to learn about the legislators who represent you. 
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="medium"
                      className={classes.cssRoot}
                      href="https://app.leg.wa.gov/DistrictFinder/"
                      target="_blank"
                    >
                      <h6>find your district</h6>
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

VoterRegistration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VoterRegistration);
