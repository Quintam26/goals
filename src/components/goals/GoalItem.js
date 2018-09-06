import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class GoalItem extends PureComponent {

  static propTypes = {
    goal: PropTypes.object
  };

  render() {
    const { goal } = this.props;

    return (
      <div>
        <Link to={`/goals/${goal.id}`}>{goal.name}</Link>
      </div>
    );
  }
}

export default GoalItem;