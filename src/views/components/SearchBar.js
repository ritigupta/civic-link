import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, FormControl } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: 400
  },
  input: {
    flex: 1
  },
  iconButton: {
    padding: 10,
    color: "#000000"
  },
  inputLabel: {
    paddingRight: 20,
    display: "inline-block"
  }
});

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {" "}
      <p className={classes.inputLabel}>City</p>
      <FormControl className={classes.margin}>
        <TextField
          // onChange={props.getEvents}
          className={classes.input}
          type="text"
          name="city"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={props.getEvents}
                  className={classes.iconButton}
                  aria-label="Search"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    </div>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);

// const SearchBar = props => {
//   return (
//     <div>
//       <p>City</p>
//       <form onSubmit={props.getEvents}>
//         <input type="text" name="city" />
//         <button>
//           <SearchIcon />
//         </button>
//       </form>
//     </div>
//   );
// };
