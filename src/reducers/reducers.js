import { combineReducers } from 'redux';
import counterReducer from './counter/counter';
import toastReducer from './toast/toast';
import updateNumericalValueReducer from './updateNumericalValue/updateNumericalValue';

const rootReducer = combineReducers({
  counter: counterReducer,
  toast: toastReducer,
  updateNumericalValue: updateNumericalValueReducer,
});

export default rootReducer;