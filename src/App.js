import React, { Component } from 'react';

//import CivicToolbar from './components/CivicToolbar';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import yellow from '@material-ui/core/colors/yellow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';

//import Typography from '@material-ui/core/Typography';


import './App.css';


const styles = theme => ({  
  toolBar: {
    textAlign: 'left',

  },
  card: {
    width: 301,
    height: 492,
  },
  media: {
    height: 250,
  },
  cssRoot: {
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
  root: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  
});

class App extends Component {

  render() {
    const { classes } = this.props;  
    return (
      <div className="App"> 
        <div className={classes.root}>
          <AppBar color="none" 
            style={{boxShadow: "none"}}>
            <Toolbar className={classes.toolBar}>
              <header>
                CIVIC LINK
              </header>
              <Button className={classes.button}>get to know us</Button>
              <Button className={classes.button}>get informed</Button>
              <Fab variant="extended" className={classes.cssRoot}>get involved</Fab>
            </Toolbar>
          </AppBar>
        </div>
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
                      style = {{ height: 0, paddingTop: '75%'}}
                      image= {require ("./images/obama.JPG")}
                      title="Barack Obama"
                    />
                    <CardContent>
                      <h3>
                        Barack Obama
                      </h3>
                      <h4>
                        Democrat
                      </h4>
                      <p>
                        <br></br>Affordable health care
                        <br></br>Immigration reform
                        <br></br>Renewable energy
                      </p>          
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button 
                        variant="contained" 
                        size="medium"
                        className={classes.cssRoot}>
                        view full profile
                      </Button>
                  </CardActions>
                </Card>
              </div>
              <div class="flex-item">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      style = {{ height: 0, paddingTop: '75%'}}
                      image= {require ("./images/weld.jpg")}
                      title="William Weld"
                    />
                    <CardContent>
                      <h3>
                        William Weld
                      </h3>
                      <h4>
                        Republican
                      </h4>
                      <p>
                        <br></br>Marriage equity
                        <br></br>Drug policy reform
                        <br></br>Loosening gun control
                      </p>          
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button 
                        variant="contained" 
                        size="medium"
                        className={classes.cssRoot}>
                        view full profile
                      </Button>
                  </CardActions>
                </Card>
              </div>
              <div class="flex-item">
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      style = {{ height: 0, paddingTop: '75%'}}
                      image= {require ("./images/amy.jpg")}
                      title="Amy Klobuchar"
                    />
                    <CardContent>
                      <h3>
                        Amy Klobuchar
                      </h3>
                      <h4>
                        Democrat
                      </h4>
                      <p>
                        <br></br>Education reform
                        <br></br>Renewable energy
                        <br></br>Support for veterans
                      </p>          
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button 
                        variant="contained" 
                        size="medium" 
                        className={classes.cssRoot}>
                        view full profile
                      </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
