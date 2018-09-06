import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Goalitem from './Goalitem';
import GoalForm from './GoalForm';
import { update } from './actions';

export class Goal extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    goal: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = goal => {
    const { update } = this.props;
    update(goal);
    this.handleEndEdit();
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { goal } = this.props;

    return (
      <li>
        {editing
          ? <GoalForm
            goal={goal}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <Goalitem
            goal={goal}
            onEdit={this.handleEdit}
          />
        }
      </li>
    );
  }
}

export default connect(
  null, 
  { update }
)(Goal);