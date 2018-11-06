import React, { useState } from 'react';
import useOnline from './useOnline'

export default () => {
  const [count, setCount] = useState(0)
  const [online] = useOnline()

  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Incrment</button>
    <p>Network is now {online ? 'ONLINE' : 'OFFLINE'}</p>
  </div>
};
