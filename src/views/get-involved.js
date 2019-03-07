import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = {
  link: {
    "&:hover": {
      color: "#000000"
    }
  }
};

class GetInvolved extends Component {
  render() {
    const classes = this.props;
    return (
      <div>
        <div class="home">
          <h1 class="home">
            There's nothing here yet, but you can help change that!
          </h1>
          <Link underline="none" component={RouterLink} to="/polling-sites">
            <h2 class="get-involved">Polling Sites</h2>
          </Link>
          <Link
            underline="none"
            component={RouterLink}
            to="/calling-reps-guide"
          >
            <h2 class="get-involved">Guide to Calling Your Representatives</h2>
          </Link>
        </div>
      </div>
    );
  }
}

GetInvolved.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetInvolved);
