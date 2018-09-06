import { GOAL_LOAD, GOAL_ADD } from './reducers';
import { getGoals, postGoal } from '../../services/api';

export const loadGoals = () => ({
  type: GOAL_LOAD,
  payload: getGoals()
});

export const addGoals = data => {
  return {
    type: GOAL_ADD,
    payload: postGoal(data)
  };
};