import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

class GoalDetail extends PureComponent {

  static propTypes = {
    loadGoals: PropTypes.func.isRequired,
    match: PropTypes.object,
    goal: PropTypes.object
  };

  componentDidMount() {
    const { loadGoals, match } = this.props;
    loadGoals(match.params.id);
  }

  render() {
    const { goal, match } = this.props;
    if(!goal || !goal.favoriteOptions) return null;
    const { url } = match;

    return (
      <article>
        <h3>{goal.name} the {goal.type}</h3>
        <Switch>
          <Route path={`${url}/paragraph`} render={() => {
            return <ParagraphView options={goal.favoriteOptions}/>;
          }}/>
          <Route path={`${url}/list`} render={() => {
            return <ListView options={goal.favoriteOptions}/>;
          }}/>

          <Redirect to={`${url}/list`}/>
        </Switch>
      </article>
    );
  }
}

const ParagraphView = ({ options }) => (
  <p>Favorite Options are {options.join(', ')}</p>
);
ParagraphView.propTypes = { options: PropTypes.array };

const ListView = ({ options }) => (
  <ul>
    {options.map((option, i) => <li key={i}>{option}</li>)}
  </ul>
);
ListView.propTypes = { options: PropTypes.array };

export default GoalDetail;