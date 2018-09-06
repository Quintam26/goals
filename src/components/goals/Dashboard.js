import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Goals from './Goals';
import { Link } from 'react-router-dom';
import { getGoalList } from './reducers';
import { loadGoals, addGoals } from './actions';
import GoalForm from './GoalForm';

class Dashboard extends PureComponent {

  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    addGoals: PropTypes.func.isRequired,
    goals: PropTypes.array
  };

  componentDidMount() {
    this.props.loadGoals();
  }

  render() {
    const { goals, addGoals } = this.props;

    return (
      <div>
        <section>
          <Link to="/goals/new">Add a New Goal</Link>       <GoalForm onComplete={addGoals}/>
        </section>

        {goals && 
        <section>
          <h3>Goals</h3>
          <Goals 
            goals={goals}
          />
        </section>
        }
      </div>
    );
  }
}

export default connect(
  state => ({ goals: getGoalList(state) }),
  { loadGoals, addGoals }
)(Dashboard);