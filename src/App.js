import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './components/Home';
import AddMeal from './components/AddMeal';
import Meals from './components/Meals';

const _initialState = {
  meals: [],
};

const initialState = JSON.parse(localStorage.initialState || JSON.stringify(_initialState));

export const Printer = ({ obj }) =>
  <pre>
    {JSON.stringify(obj, null, '-')}
  </pre>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);

    this.addFoodDetails = this.addFoodDetails.bind(this);
    this.addMeal = this.addMeal.bind(this);
  }
  addFoodDetails(mealId, food) {
    const meals = this.state.meals.map(meal => {
      if (meal.id == mealId) {
        return Object.assign(meal, {
          foods: [food, ...meal.foods],
        });
      }
      return meal;
    });
    this.setState({
      meals: meals,
    });
  }
  addMeal(name) {
    const meal = {
      foods: [],
      id: Date.now(),
      name,
    };

    const meals = [
      meal,
      ...this.state.meals,
    ];
    // meals = [meal].concat(this.state.meals)

    this.setState({
      meals,
    }, () => {
      localStorage.initialState = JSON.stringify(this.state);
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand">Meals</a>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Meal</Link></li>
                <li><Link to="/meals">All Meals</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={'/login'}>Login</Link></li>
              </ul>
            </div>
          </nav>

          <div className="container">
            <Route exact path="/" component={() => <Home />} />
            <Route path="/add" component={() => <AddMeal handleSubmit={this.addMeal} />} />
            <Route
              path="/meals"
              component={() =>
                <Meals
                  meals={this.state.meals}
                  handleSubmit={this.addFoodDetails}
                />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
