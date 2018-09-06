// import { LOGOUT } from '../auth/reducers';

export const GOAL_LOAD = 'GOAL_LOAD';
export const GOAL_ADD = 'GOAL_ADD';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';

export const getGoals = state => state.goals;

export function goals(state = [], { type, payload }) {
  switch(type) {
    case GOAL_LOAD:
      return payload;
    case GOAL_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}