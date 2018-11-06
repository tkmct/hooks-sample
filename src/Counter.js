import React, { useState, useEffect } from 'react';

function useOnline() {
  const [online, setOnline] = useState(navigator.onLine)

  function onOnline() {
    setOnline(true)
  }

  function onOffline() {
    setOnline(false)
  }

  useEffect(() => {
    window.addEventListener('online', onOnline)

    window.addEventListener('offline', onOffline)

    return () => { 
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
     }
  })

  return [online]
}

export default () => {
  const [count, setCount] = useState(0)
  const [online] = useOnline()

  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Incrment</button>
    <p>Network is now {online ? 'ONLINE' : 'OFFLINE'}</p>
  </div>
};
