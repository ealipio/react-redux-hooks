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
      <button onClick={() => dispatch({ type: actionTypes.AGE_UP, value: 1 })}>
        Age UP
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.AGE_DOWN, value: 1 })}
      >
        Age Down
      </button>
    </div>
  );
};

export default App;
