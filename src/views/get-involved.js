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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import yellow from "@material-ui/core/colors/yellow";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SeattleImage from "./images/march.jpg";



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
  cssRoot: {
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
    borderRadius: "15px",
    margin: "0px 0px 30px 0px",
    "&:hover": {
      backgroundColor: yellow[700]
    }
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class GetInvolved extends Component {
  state = {
    value: 'freshman',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <body className="App-header">
        <div class="flex-large-container">
          <aside class="flex-large-item" style={{width: 500, marginTop: 30, marginRight: 50 }}>
            <h1>Join the movement.</h1>
            <p className="mission">We’re looking for youth who are passionate about activism to join Civic Link. Click the drop down to learn more, or fill out the form if you think you're a good fit! </p>
            <ExpansionPanel style={{marginBottom:35, marginTop: 30}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <p>Who, me?</p>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Yes you!
                  <br className="space"/>
                  Are you interested in getting involved with your community while advocating for youth representation and engagement? If yes, Civic Link would be perfect for you.
                  <br className="space"/>
                  We plan projects to engage youth, attend events around King County to learn, and advocate for civic engagement in our schools. You could too! 
                  <br className="space"/>
                  Joining our forces would allow you to: <br />
                  – Develop leadership skills <br />
                  – Form connections with members of the community <br />
                  – Add enriching and unique experiences to your resume
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <div class="flex-large-item" style={{ marginRight: 30}}>
              <img
                src={SeattleImage}
                width="500"
                alt="individuals casting ballots graphic"
              />
            </div>
          </aside>

          <div class="flex-large-item" style={{width: 500, marginTop:30, marginLeft: 20, marginRight: 20}}>
            

            <div className={classes.root}>

              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Name</FormLabel>
                <TextField
                  required
                  id="standard-required"
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />
                <FormLabel component="legend">Phone Number</FormLabel>
                <TextField
                  required
                  id="standard-required"
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />
                <FormLabel component="legend">Email</FormLabel>
                <TextField
                  required
                  id="standard-required"
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />
                <FormLabel component="legend">What grade are you in?</FormLabel>
                <RadioGroup
                  aria-label="Grade"
                  name="grade1"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="Freshman" control={<Radio style={{color:"#727272"}}/>} label="Freshman" />
                  <FormControlLabel value="Sophomore" control={<Radio style={{color:"#727272"}}/>} label="Sophomore" />
                  <FormControlLabel value="Junior" control={<Radio style={{color:"#727272"}}/>} label="Junior" />
                  <FormControlLabel value="Senior" control={<Radio style={{color:"#727272"}}/>} label="Senior" />
                  <FormControlLabel value="College Student" control={<Radio style={{color:"#727272"}}/>} label="College Student" />
                </RadioGroup>
                <br className="space" />
                <FormLabel component="legend">What experience do you have with activism and/or organizing?</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />
                <FormLabel component="legend">What unique perspective or skill set would you bring to the table?</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />
                <FormLabel component="legend">Why is it important for youth to be civically engaged?</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />
                <FormLabel component="legend">Are you interested in a leadership position?</FormLabel>
                <RadioGroup
                  aria-label="leadership position"
                  name="leadership"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="Yes" control={<Radio style={{color:"#727272"}}/>} label="Yes" />
                  <FormControlLabel value="No" control={<Radio style={{color:"#727272"}}/>} label="No" />
                  <FormControlLabel value="Maybe" control={<Radio style={{color:"#727272"}}/>} label="Maybe" />
                </RadioGroup>
                <br className="space" />
                <FormLabel component="legend">How many hours per week would you be able to commit?</FormLabel>
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.textField}
                  margin="normal"
                />
                <br className="space" />

                <Button color="primary"
                  variant="contained" 
                  size="large" 
                  className={classes.cssRoot} 
                  onClick={this.handleClickOpen}>
                  <h6>Submit</h6>              
                </Button>
                <Dialog
                  open={this.state.open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"All done!"}</DialogTitle>
                  <DialogContent>
                    
                    <DialogContentText id="alert-dialog-description">
                      You have successfully applied for Civic Link. We'll be reaching out to you via email shortly!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose}>
                      Sweet!
                    </Button>
                  </DialogActions>
                </Dialog>

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
