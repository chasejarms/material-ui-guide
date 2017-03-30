import { GET_CURRENT_COMPONENT } from '../actions/component_actions';
import { initialState, flatButtonHelper } from '../reducer_helpers/flat_button';

const CurrentComponentReducer = (state = initialState(), action) => {
  switch (action.componentName) {
    case "Flat Button":
      return flatButtonHelper(state, action);
    case "App Bar":
      return {
        name: "App Bar",
        properties: {
          title: "My Crazy App Bar"
        },
        documentation: {
          title: "This will say a lot about the title that is currently being displayed"
        }
      };
    default:
      return state;
  }
};

export default CurrentComponentReducer;
