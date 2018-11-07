import { useState, useEffect } from 'react'

export default function useOnline() {
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

  return online
}
