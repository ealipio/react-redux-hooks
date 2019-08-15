import * as actionTypes from '../actions/actionTypes';

const initialState = {
  age: 15
};

const ageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AGE_UP:
      return { ...state, age: state.age + action.value };

    case actionTypes.AGE_DOWN:
      return { ...state, age: state.age - action.value };
    default:
      return state;
  }
};

export default ageReducer;
