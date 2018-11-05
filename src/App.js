import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0)

  console.log(count, setCount)
  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Incrment</button>
  </div>
};
