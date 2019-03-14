import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import MyVoteImage from "./images/my-vote-my-voice.jpg";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    display: 'flex',
  },

  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  textField: {
    marginRight: theme.spacing.unit,
    width: 300,
  },
});

class GetInvolved extends Component {
  state = {
    value: 'freshman',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <body className="App-header">
        <div class="flex-large-container">
          <aside class="flex-large-item" style={{width:450, paddingTop:30, marginRight: 50}}>
            <h1>Join the movement.</h1>
            <p className="mission">We’re looking for youth who are passionate about activism to join Civic Link. Click the drop down to learn more, or fill out the form if you think you're a good fit! </p>
            <ExpansionPanel style={{marginBottom:50, marginTop: 35}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <p>Who, me?</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Yes you!
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* <div class="flex-large-item" style={{marginTop:30, marginRight: 30}}>
              <img
                src={MyVoteImage}
                width="450"
                alt="my vote is my voice graphic"
              />
            </div> */}
          </aside>

          <div class="flex-large-item" style={{width: 500, marginTop:30, marginLeft: 20, marginRight: 20}}>
            

            <div className={classes.root}>

              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Name*</FormLabel>
                <TextField
                  required
                  id="standard-required"
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />
                <FormLabel component="legend">Phone Number*</FormLabel>
                <TextField
                  required
                  id="standard-required"
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />
                <FormLabel component="legend">Email*</FormLabel>
                <TextField
                  required
                  id="standard-required"
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />
                <FormLabel component="legend">What grade are you in?*</FormLabel>
                <RadioGroup
                  aria-label="Grade"
                  name="grade1"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="Freshman" control={<Radio />} label="Freshman" />
                  <FormControlLabel value="Sophomore" control={<Radio />} label="Sophomore" />
                  <FormControlLabel value="Junior" control={<Radio />} label="Junior" />
                  <FormControlLabel value="Senior" control={<Radio />} label="Senior" />
                  <FormControlLabel value="College Student" control={<Radio />} label="College Student" />
                </RadioGroup>
                <br className="form" />
                <FormLabel component="legend">What experience do you have with activism and/or organizing?*</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />
                <FormLabel component="legend">What unique perspective or skill set would you bring to the table?*</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />
                <FormLabel component="legend">Why is it important for youth to be civically engaged?*</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />
                <FormLabel component="legend">Are you interested in a leadership position?</FormLabel>
                <RadioGroup
                  aria-label="leadership position"
                  name="leadership"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                  <FormControlLabel value="Maybe" control={<Radio />} label="Maybe" />
                </RadioGroup>
                <br className="form" />
                <FormLabel component="legend">How many hours per week would you be able to commit?*</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="form" />

              </FormControl>
            </div>
          </div>

        
        </div>
      </body>
    );
  }
}

GetInvolved.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetInvolved);
