import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './GoalForm.css';

class GoalForm extends Component {

  state = {
    editing: false,
    id: null,
    name: '',
  };

  static propTypes = {
    goal: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };


  componentDidMount() {
    const { goal } = this.props;
    if(!goal) return;

    this.setState(goal);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, budget, id } = this.state;
    const goal = { name, budget };
    if(id) goal.id = id;

    const { onComplete, goal: originalGoal } = this.props;

    onComplete(goal)
      .then(() => {
        if(!originalGoal) {
          this.setState({ name: '' });
          document.activeElement.blur();
        }
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, name } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={styles.goalForm} onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <p>
          <button className="add-update-button" type="submit">{ id ? 'Update' : 'Add' }</button>
          {id && <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p className="category-p">
    <label className="category-l">
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default GoalForm;
