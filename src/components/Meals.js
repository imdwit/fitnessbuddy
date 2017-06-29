import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Printer } from '../App';
import Meal from './Meal';

const Meals = ({ meals, handleSubmit }) =>
  <div>
    <ul className="list-group">
      {meals.map(meal =>
        <li key={meal.id} className="list-group-item">
          <Link to={`/meals/${meal.id}`}>{meal.name}</Link>
        </li>
      )}
    </ul>
    <div>
      <Route
        path="/meals/:mealId"
        component={({ match }) =>
          <Meal meal={meals.find(meal => meal.id == match.params.mealId)} handleSubmit={handleSubmit} />}
      />
    </div>
  </div>;

// var Meals = function(props) {
//   var meals = props.meals;
//   return (
//     <div>
//     ...
//     </div>
//   )
// }

export default Meals;
