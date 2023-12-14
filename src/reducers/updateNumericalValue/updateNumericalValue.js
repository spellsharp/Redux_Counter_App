import ActionTypes from "../../constants/ActionTypes";

const initialState = {
  value: 0,
};

const updateNumericalValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_NUMERICAL_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default updateNumericalValueReducer;