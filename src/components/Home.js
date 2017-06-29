import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

const Home = () => (
  <div className="row">
    <div className="col-md-10 col-md-offset-1">
      <div className="panel panel-default">
        <div className="panel-heading">Welcome, Dwit</div>
        <div className="panel-body">
          <p>heres what you've eaten today</p>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to={`/meals/1`}>Meal 1</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Home;