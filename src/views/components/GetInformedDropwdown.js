import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class GetInformedDropdown extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onMouseEnter={this.handleToggle}
          >
            <h5>get informed</h5>
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/voter-registration"
                      >
                        <MenuItem>Voter Registration</MenuItem>
                      </Link>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/educational-resources"
                      >
                        <MenuItem>Educational Resources</MenuItem>
                      </Link>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/general-political-info"
                      >
                        <MenuItem>General Political Info</MenuItem>
                      </Link>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to="/candidates"
                      >
                        <MenuItem>Candidate Info</MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

GetInformedDropdown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetInformedDropdown);
