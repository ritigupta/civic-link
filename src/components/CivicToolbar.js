import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import yellow from "@material-ui/core/colors/yellow";
import { withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

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
            <NavLink>
              <header>CIVIC LINK</header>
            </NavLink>
            <Button className={classes.button}>get to know us</Button>
            <Button className={classes.button}>get informed</Button>
            <Fab variant="extended" className={classes.cssRoot}>
              get involved
            </Fab>
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
