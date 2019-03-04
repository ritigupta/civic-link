import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import yellow from "@material-ui/core/colors/yellow";

const styles = theme => ({
  toolBar: {
    textAlign: "left"
  },
  card: {
    width: 301,
    height: 492,
    boxShadow: "3px 6px 10px 1px rgba(0,0,0,0.3)"
  },
  media: {
    height: 250,
    margin: "17px 17px 0px 17px"
  },
  cssRoot: {
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
    margin: "7px 0px 0px 11px",
    "&:hover": {
      backgroundColor: yellow[700]
    }
  },
  root: {
    flexGrow: 1
  },
  fab: {
    margin: theme.spacing.unit
  }
});

class Candidates extends Component {
  render() {
    const { classes } = this.props;
    return (
      <body className="App-header">
        <div>
          <div class="flex-container">
            <div class="flex-item">
              <h1>Make an informed vote.</h1>
              <h2>Scroll to meet your candidates.</h2>
            </div>
            <div class="flex-item">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    style={{ height: 0, paddingTop: "69%" }}
                    image={require("./images/obama.JPG")}
                    title="Barack Obama"
                  />
                  <CardContent>
                    <h3>Barack Obama</h3>
                    <h4>Democrat</h4>
                    <p>
                      <br />
                      Affordable health care
                      <br />
                      Immigration reform
                      <br />
                      Renewable energy
                    </p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.cssRoot}
                  >
                    <h6>view full profile</h6>
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div class="flex-item">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    style={{ height: 0, paddingTop: "69%" }}
                    image={require("./images/weld.jpg")}
                    title="William Weld"
                  />
                  <CardContent>
                    <h3>William Weld</h3>
                    <h4>Republican</h4>
                    <p>
                      <br />
                      Marriage equity
                      <br />
                      Drug policy reform
                      <br />
                      Loosening gun control
                    </p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.cssRoot}
                  >
                    <h6>view full profile</h6>
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div class="flex-item">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    style={{ height: 0, paddingTop: "69%" }}
                    image={require("./images/amy.jpg")}
                    title="Amy Klobuchar"
                  />
                  <CardContent>
                    <h3>Amy Klobuchar</h3>
                    <h4>Democrat</h4>
                    <p>
                      <br />
                      Education reform
                      <br />
                      Renewable energy
                      <br />
                      Support for veterans
                    </p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    size="medium"
                    className={classes.cssRoot}
                  >
                    <h6>view full profile</h6>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

Candidates.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Candidates);
