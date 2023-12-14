import ActionTypes from "../../constants/ActionTypes";

const updateToast = (toast) => ({
  type: ActionTypes.UPDATE_TOAST,
  payload: toast, // { message: "Error bro!", type: "ERROR" }
});

export default { updateToast };
