import { useState, useEffect } from 'react'

// Throttle hook.
// newValue is returned after given duration of time.
function useThrottle(value, duration) {
  const [newValue, setNewValue] = useState(value)

  return newValue
}