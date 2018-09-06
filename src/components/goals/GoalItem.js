import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoalById } from './reducers';
import { Link } from 'react-router-dom';

class GoalItem extends PureComponent {

  static propTypes = {
    goal: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { goal, onEdit, remove } = this.props;

    return (
      <div>
        <Link to={`/goals/${goal._id}`}>{goal.name}</Link>
        <section>
          <strong>{goal.name} Goal</strong>
          <button name="Edit" onClick={onEdit}>✎</button> 
          <button name="Delete" onClick={() => remove(goal._id)}>🗑</button>
        </section>
      </div>
    );
  }
}

export default connect(
  (state, { id }) => ({
    goal: getGoalById(state, id)
  }),
  null
)(GoalItem);