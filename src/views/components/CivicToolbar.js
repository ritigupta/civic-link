import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import yellow from "@material-ui/core/colors/yellow";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import GetInformedDropdown from "./GetInformedDropwdown";

const styles = theme => ({
  toolBar: {
    textAlign: "left"
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
 
  link: {
    margin: theme.spacing.unit
  },
  grid: {
    backgroundColor: "#f9f9f9"
  }
});

class CivicToolbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          color="none"
          style={{ boxShadow: "none" }}
          className={classes.grid}
        >
          <Toolbar classes={classes.toolBar}>
            <Grid
              container
              spacing={24}
              alignItems={"space-between"}
              style={{ marginTop: 10 }}
            >
              <Grid item xs={3} alignContent={"center"}>
                <Link underline="none" component={RouterLink} to="/">
                  <header>CIVIC LINK</header>
                </Link>
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={2}>
                <Link underline="none" component={RouterLink} to="/about">
                  <Button>
                    <h5>get to know us</h5>
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Button>
                  <GetInformedDropdown />
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Link
                  underline="none"
                  component={RouterLink}
                  to="./get-involved"
                >
                  <Fab variant="extended" className={classes.cssRoot}>
                    <h5>get involved</h5>
                  </Fab>
                </Link>
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
