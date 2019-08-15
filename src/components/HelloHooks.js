import React, { useState, useEffect } from 'react';

const HelloHooks = () => {
  const [count, setCount] = useState(1);

  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    document.title = `${count} times...`;
  });

  return (
    <div>
      <p>u clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default HelloHooks;
