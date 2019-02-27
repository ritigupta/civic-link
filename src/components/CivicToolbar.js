import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import yellow from "@material-ui/core/colors/yellow";
import { withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  toolBar: {
    textAlign: "left"
  },
  card: {
    width: 301,
    height: 492
  },
  media: {
    height: 250
  },
  cssRoot: {
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
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

class CivicToolbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar color="none" style={{ boxShadow: "none" }}>
          <Toolbar classes={classes.toolBar}>
            <Grid container spacing={30}>
              <Grid item xs={7}>
                <NavLink>
                  <header>CIVIC LINK</header>
                </NavLink>
              </Grid>
              <Grid item xs>
                <Button>
                  <h5>get to know us</h5>
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <h5>get informed</h5>
                </Button>
              </Grid>
              <Grid item xs>
                <Fab variant="extended" className={classes.cssRoot}>
                  <h5>get involved</h5>
                </Fab>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

CivicToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CivicToolbar);
