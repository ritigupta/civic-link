import React, { Component } from "react";
import PropTypes from "prop-types";


class Calendar extends Component {
  render() {
    return (
        <div>
            <body>

                <div>
                <header>
                    
                    <h2>March 2019</h2>
                    
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
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td class="selected">14</td>
                    <td>15</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
                </table>
                </div>


            </body>
{/*                 <div class="container col-sm-4 col-md-7 col-lg-4 mt-5">
                    <div class="card">
                        <h3 class="card-header" id="monthAndYear"></h3>
                        <table class="table table-bordered table-responsive-sm" id="calendar">
                            <thead>
                            <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>T</th>
                                <th>F</th>
                                <th>S</th>
                            </tr>
                            </thead>

                            <tbody id="calendar-body">

                            </tbody>
                        </table>

                        <div class="form-inline">

                            <button class="btn btn-outline-primary col-sm-6" id="previous" onclick="previous()">Previous</button>

                            <button class="btn btn-outline-primary col-sm-6" id="next" onclick="next()">Next</button>
                        </div>
                        <br/>
                        <form class="form-inline">
                            <label class="lead mr-2 ml-2" for="month">Jump To: </label>
                            <select class="form-control col-sm-4" name="month" id="month" onchange="jump()">
                                <option value="0">Jan</option>
                                <option value="1">Feb</option>
                                <option value="2">Mar</option>
                                <option value="3">Apr</option>
                                <option value="4">May</option>
                                <option value="5">Jun</option>
                                <option value="6">Jul</option>
                                <option value="7">Aug</option>
                                <option value="8">Sep</option>
                                <option value="9">Oct</option>
                                <option value="10">Nov</option>
                                <option value="11">Dec</option>
                            </select>


                            <label for="year"></label><select class="form-control col-sm-4" name="year" id="year" onchange="jump()">
        
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>

                        </select></form>
                    </div>
                </div>
                <script src="scripts.js"></script> */}

        </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Calendar;