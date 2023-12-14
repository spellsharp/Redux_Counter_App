import ActionTypes from "../../constants/ActionTypes";

const increment = () => ({
  type: ActionTypes.INCREMENT,
});

const decrement = () => ({
  type: ActionTypes.DECREMENT,
});

const incrementByValue = (value) => ({
  type: ActionTypes.INCREMENT_BY_AMOUNT,
  payload: value,
});

const decrementByValue = (value) => ({
  type: ActionTypes.DECREMENT_BY_AMOUNT,
  payload: value,
});

const reset = () => ({
  type: ActionTypes.COUNTER_RESET,
});

const updateLowerLimitReached = (value) => ({
  type: ActionTypes.UPDATE_LOWER_LIMIT_REACHED,
  payload: value,
});

const updateUpperLimitReached = (value) => ({
  type: ActionTypes.UPDATE_UPPER_LIMIT_REACHED,
  payload: value,
});

export default {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
  updateLowerLimitReached,
  updateUpperLimitReached,
  reset,
};