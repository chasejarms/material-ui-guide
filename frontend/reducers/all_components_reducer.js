import { GET_ALL_COMPONENTS } from '../actions/component_actions';

const initialState = ["FlatButton", "CircularProgress"];

// add these in next

const AllComponentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AllComponentsReducer;
