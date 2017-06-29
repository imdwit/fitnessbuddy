import React from 'react';

const sumBy = nutrient => (acc, food) => {
  return (acc += food[nutrient]);
};

const sumCalories = (accu, val) => {
  const { protein, fats, carbohydrates } = val;
  return (accu += protein * 4 + carbohydrates * 4 + fats * 9);
};

class Meal extends React.Component {
  render() {
    const meal = this.props.meal;
    // const { meal } = this.props; <= destructurting
    return (
      <div>
        <div className="meal-info">
          <h2 className="meal-name">{meal.name}&nbsp;</h2>
          <span className="meal-time">
            Monday, June 26th, 2017
          </span>
          <br />
          <span className="meal-data label label-pill label-primary">
            {meal.foods.reduce(sumCalories, 0)} kCal
          </span>
          <span className="meal-data label label-pill label-default">
            {meal.foods.reduce(sumBy('protein'), 0)}g Protein
          </span>
          <span className="meal-data label label-pill label-default">
            {meal.foods.reduce(sumBy('carbohydrates'), 0)}g Carbohydrates
          </span>
          <span className="meal-data label label-pill label-default">
            {meal.foods.reduce(sumBy('fats'), 0)}g Fat
          </span>
        </div>
        <h3>Foods</h3>
        <ul className="list-group">
          {
            meal.foods.map((food, i) => (
              <li key={i} className="list-group-item">{food.name}&nbsp;<span></span></li>
            ))
          }
        </ul>
        <form
          onSubmit={e => {
            e.preventDefault();
            const id = this.props.meal.id;
            const {
              name,
              protein,
              carbohydrates,
              fat
            } = this.refs;

            console.log(name, protein, fat)
            const food = {
              name: name.value,
              protein: +protein.value,
              carbohydrates: +carbohydrates.value,
              fats: +fat.value,
              id,
            };
            console.log(food)
            this.props.handleSubmit(id, food);
          }}
        >
          <div className="form-group row">
            <label className="col-sm-2 form-control-label">Food Name</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Food Name"
                required=""
                ref="name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 form-control-label">Protein</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="protein"
                placeholder="Protein/g"
                required=""
                ref="protein"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 form-control-label">
              Carbohydrates
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="carbohydrates"
                placeholder="Carbohydrates/g"
                required=""
                ref="carbohydrates"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 form-control-label">Fat</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="fat"
                placeholder="Fat/g"
                required=""
                ref="fat"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-primary" value="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default Meal;
