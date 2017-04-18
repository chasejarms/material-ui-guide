import { ACTIVE, INACTIVE } from '../actions/tour_actions';

const TourReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIVE:
      return true;
    case INACTIVE:
      return false;
    default:
      return false;
  }
};

export default TourReducer;
