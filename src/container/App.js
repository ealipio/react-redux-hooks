import React, { useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../actions/actionTypes';
import './App.css';
import SearchResults from '../components/SearchResults'

const App = () => {
  const age = useSelector(state => state.lordReducer.age);
  const dispatch = useDispatch();

  // alternative a componentDidMount for side effects
  useEffect(() => console.log('mounted'), []);

  // componentDidMount or componentDidUpdate alternative
  useEffect(() => console.log('mounted or updated'));
  //  componentWillUnMount. we pass an empty array so call the callback only once
  useEffect(() => {
    return () => {
      console.log('will unmount');
    };
  }, []);
  //cdcd
  useLayoutEffect(() => console.log('manipulate DOM in the effect making sure it happens before  browser paint'), []);

  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button
        onClick={() => dispatch({ type: actionTypes.AGE_UP, value: 1 })}
      >
        Age UP
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.AGE_DOWN, value: 1 })}
      >
        Age Down
      </button>
      <br />
      <SearchResults/>
    </div>
  );
};

export default App;
