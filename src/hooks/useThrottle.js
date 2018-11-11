import { useState, useEffect } from 'react'

// Throttle hook.
// newValue is returned after given duration of time.
export default function useThrottle(value, delay) {
  const [newValue, setNewValue] = useState(value)
  const [lastExec, setLastExec] = useState(Number(new Date()))

  const elapsed = Number(new Date()) - lastExec;

  useEffect(() => {
    if (elapsed > delay) {
      setNewValue(value)
      setLastExec(Number(new Date()))
    }
  }, [value])

  return newValue
}