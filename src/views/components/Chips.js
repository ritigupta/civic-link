import React, { Component } from "react";
import PropTypes from "prop-types";
import Chip from '@material-ui/core/Chip';
import { withStyles } from "@material-ui/core";


const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: "wrap",
    width: "100px"
  },
  chip: {
    backgroundColor: "#ffffff",
    boxShadow: "2px 3px 10px 2px  rgba(0,0,0,0.25)",
    marginBottom: "9px",
  },
});

class Chips extends React.Component {

    // Clean up this code to remove rendundancies!
    state = {
        bgColor: "#ffffff",
        bgColor1: "#ffffff",
        bgColor2: "#ffffff",
        bgColor3: "#ffffff",
        bgColor4: "#ffffff",
        bgColor5: "#ffffff",
        bgColor6: "#ffffff",
        bgColor7: "#ffffff"
    }
    
    handleClick = () => {
        this.setState({ bgColor: "#FDCF2C" });
    };

    handleClick1 = () => {
        this.setState({ bgColor1: "#FDCF2C" });
    };

    handleClick2 = () => {
        this.setState({ bgColor2: "#FDCF2C" });
    };

    handleClick3 = () => {
        this.setState({ bgColor3: "#FDCF2C" });
    };

    handleClick4 = () => {
        this.setState({ bgColor4: "#FDCF2C" });
    };

    handleClick5 = () => {
        this.setState({ bgColor5: "#FDCF2C" });
    };

    handleClick6 = () => {
        this.setState({ bgColor6: "#FDCF2C" });
    };

    handleClick7 = () => {
        this.setState({ bgColor7: "#FDCF2C" });
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Chip
                label="Gun Violence"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor}}
                onClick={this.handleClick}
                />
                <Chip
                label="Environment / Climate Change"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor1}}
                onClick={this.handleClick1}
                />
                <Chip
                label="Immigrant Rights"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor2}}
                onClick={this.handleClick2}

                />
                <Chip
                label="Racial Equity"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor3}}
                onClick={this.handleClick3}

                />
                <Chip
                label="Women's Rights / Feminism"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor4}}
                onClick={this.handleClick4}
                />
                <Chip
                label="LGBTQ+ Rights"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor5}}
                onClick={this.handleClick5}

                />
                <Chip
                label="Social Services"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor6}}
                onClick={this.handleClick6}

                />
                <Chip
                label="Foreign Affairs"
                className={classes.chip}
                style={{backgroundColor: this.state.bgColor7}}
                onClick={this.handleClick7}

                />
            </div>
        );

    }
}

Chips.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(Chips);