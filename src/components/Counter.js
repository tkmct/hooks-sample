import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0)

  return <div>
    <p>{count} <button onClick={() => setCount(count + 1)}>Incrment</button></p>
  </div>
};
