import ActionTypes from "../../constants/ActionTypes";

const updateNumericalValue = (value) => ({
  type: ActionTypes.UPDATE_NUMERICAL_VALUE,
  payload: value,
});

export default { updateNumericalValue };