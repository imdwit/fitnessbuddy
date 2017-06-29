import React from 'react';

class AddMeal extends React.Component {

  render() {
    return (
      <div>
        <h2>Add another Meal</h2>
        <form onSubmit={e => {
          e.preventDefault();
          const meal = this.refs.meal.value;
          this.props.handleSubmit(meal);
        }}>
          <div className="form-group row">
            <label className="form-control-label col-md-1">Name</label>
            <div className="col-md-10">
              <input className="form-control" type="text" ref="meal" />
            </div>
            <div className="col-md-1">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMeal;
