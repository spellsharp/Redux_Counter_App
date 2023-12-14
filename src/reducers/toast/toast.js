import ActionTypes from "../../constants/ActionTypes";

const initialState = {
  message: "",
  color: "",
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TOAST:
      return {
        ...state,
        message: action.payload.message,
        color: action.payload.color,
      };
    default:
      return state;
  }
};


export default toastReducer;