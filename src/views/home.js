import React, { Component } from "react";
import PropTypes from "prop-types";
import MarchImage from "./images/march-for-our-lives.jpg";
import SearchBar from "./components/SearchBar.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex-large-container">
          <aside className="flex-large-item" style={{width:200, marginTop:30, marginRight: 50}}>
            <h1>Our mission is to engage and inspire.</h1>
            <br />
            <p className="mission">
              We wish to engage youth in the civic process through voter
              registration, voter education, and other activities and events that
              help them get involved in their communities and create lasting
              political change.
            </p>
          </aside>
          <div className="flex-large-item" style={{width: 1000, marginTop:30, marginLeft: 20, marginRight: 30}}>
            <img
              className="home"
              src={MarchImage}
              alt="a March For Our Lives protest"
            />
          </div>
        </div>
        <div className="flex-large-item" style={{marginTop:30, marginLeft: 20, marginRight: 30}}>
          <h5>
            Search your city to find political events near you!
          </h5>
          <br />
          <br />
          <SearchBar />
        </div>
      </div>
      

/*         <div className="table">
          <header>
            <button>«</button>
            <h2>July 2013</h2>
            <button>»</button>
          </header>
        <table>
          <tr>
            <td>S</td>
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>Th</td>
            <td>F</td>
            <td>S</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td class="selected">17</td>
            <td>18</td>
            <td>19</td>
          </tr>
          <tr>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
          </tr>
          <tr>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td></td>
            <td></td>
          </tr>
        </table>
        </div> */
      
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
