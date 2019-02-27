import React, { Component } from 'react';

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
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

import './App.css';

const styles = theme => ({  
  card: {
    width: 301,
    height: 492,
    boxShadow: '3px 3px 10px 1px rgba(0, 0, 0, .25)',
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
            style={{boxShadow: "none"}}
            className={classes.appBar}
            position="fixed">
            <Toolbar className={classNames(classes.toolBar, classes.root)}>
              <Grid container spacing={30}>
                <Grid item xs={7}>
                  <header>
                    CIVIC LINK
                  </header>
                </Grid>
                <Grid item xs>
                  <Button><h5>get to know us</h5></Button>
                </Grid>
                <Grid item xs>
                  <Button><h5>get informed</h5></Button>
                </Grid>
                <Grid item xs>
                  <Fab variant="extended" className={classes.cssRoot}><h5>get involved</h5></Fab>
                </Grid>
              </Grid>
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
                        <h6>view full profile</h6>
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
