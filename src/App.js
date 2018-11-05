import React, { useState, useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info('re rendered')
  })

  console.log(count, setCount)
  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Incrment</button>
  </div>
};
