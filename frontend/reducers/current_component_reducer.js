import { GET_CURRENT_COMPONENT } from '../actions/component_actions';
import { initialState, flatButtonHelper } from '../reducer_helpers/flat_button';
import circularProgressHelper from '../reducer_helpers/circular_progress';

const CurrentComponentReducer = (state = initialState(), action) => {
  switch (action.componentName) {
    case "FlatButton":
      return flatButtonHelper(state, action);
    case "CircularProgress":
      return circularProgressHelper(state, action);
    default:
      return state;
  }
};

export default CurrentComponentReducer;
