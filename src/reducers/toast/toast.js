import ActionTypes from "../../constants/ActionTypes";

const initialState = {
  display: false,
  message: "",
  color: "",
  type: "",
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TOAST:
      return {
        ...state,
        display: action.payload.display,
        message: action.payload.message,
        color: action.payload.color,
        type: action.payload.type,
      };
    default:
      return state;
  }
};


export default toastReducer;