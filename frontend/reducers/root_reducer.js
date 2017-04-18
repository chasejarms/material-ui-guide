import { combineReducers } from 'redux';
import AllComponentsReducer from './all_components_reducer';
import CurrentComponentReducer from './current_component_reducer';
import TourReducer from './tour_reducer';

const RootReducer = combineReducers({
  allComponents: AllComponentsReducer,
  currentComponent: CurrentComponentReducer,
  showTour: TourReducer
});

export default RootReducer;
