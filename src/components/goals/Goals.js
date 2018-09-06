import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Goal from './Goal';


export class Goals extends Component {

  static propTypes = {
    goals: PropTypes.array
  };

  render() {
    const { goals } =  this.props;
    if(!goals) return null;

    return (
      <ul>
        {goals.map(goal => (
          <Goal
            key={goal.key}
            goal={goal}
          />
        ))}
      </ul>
    );
  }
}

export default Goals;