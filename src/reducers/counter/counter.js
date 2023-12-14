import ActionTypes from "../../constants/ActionTypes";

const initialState = {
  value: 0,
  lowerLimit: 0,
  upperLimit: 1000,
  lowerLimitReached: false,
  upperLimitReached: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      if (state.value < state.upperLimit) {
        return {
          ...state,
          value: state.value + 1,
          upperLimitReached: false,
          lowerLimitReached: false,
        }
      } else if (state.value + 1 > state.upperLimit) {
        return {
          ...state,
          upperLimitReached: true,
        }
      }
    case ActionTypes.DECREMENT:
      if (state.value > state.lowerLimit) {
        return {
          ...state,
          value: state.value - 1,
          upperLimitReached: false,
          lowerLimitReached: false,
        }
      } else if (state.value - 1 < state.lowerLimit) {
        return {
          ...state,
          lowerLimitReached: true,
        }
      }
    case ActionTypes.INCREMENT_BY_AMOUNT:
      if (state.value + action.payload > state.upperLimit) {
        return {
          ...state,
          upperLimitReached: true,
          lowerLimitReached: false,
          value: state.upperLimit,
        }
      } else if (state.value + action.payload <= state.upperLimit) {
        return {
          ...state,
          value: state.value + action.payload,
          upperLimitReached: false,
          lowerLimitReached: false,
        }
      }
      return state;
    case ActionTypes.DECREMENT_BY_AMOUNT:
      if (state.value - action.payload < state.lowerLimit) {
        return {
          ...state,
          lowerLimitReached: true,
          upperLimitReached: false,
          value: state.lowerLimit,
        }
      } else if (state.value - action.payload >= state.lowerLimit) {
        return {
          ...state,
          value: state.value - action.payload,
          upperLimitReached: false,
          lowerLimitReached: false,
        }
      }
      return state;
    case ActionTypes.UPDATE_LOWER_LIMIT_REACHED:
      return { ...state, lowerLimitReached: action.payload };
    case ActionTypes.UPDATE_UPPER_LIMIT_REACHED:
      return { ...state, upperLimitReached: action.payload };
    case ActionTypes.COUNTER_RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
};

export default counterReducer;
