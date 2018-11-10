import { useState, useEffect } from 'react'

export default function useDebounce(val, duration) {
  const [value, setValue] = useState(val)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(val)

    }, duration)

    return () => clearTimeout(timer)
  }, [val])

  return value
}