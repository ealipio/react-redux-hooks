import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from './actions/actionTypes';
import './App.css';

const App = () => {
  const age = useSelector(state => state.lordReducer.age);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button onClick={() => dispatch({ type: actionTypes.AGE_UP })}>
        Age UP
      </button>
      <button onClick={() => dispatch({ type: actionTypes.AGE_DOWN })}>
        Age Down
      </button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     age: state.lordReducer.age
//   };
// };

// const mapDispachToProps = dispatch => {
//   return {
//     onAgeUp: () => dispatch({ type: actionTypes.AGE_UP, value: 1 }),
//     onAgeDown: () => dispatch({ type: actionTypes.AGE_DOWN, value: 1 })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispachToProps
// )(App);

export default App;
