import { useState, useEffect } from 'react'

export default function useDebounce(val, duration) {
  const [value, setValue] = useState(val)
  const [time, setTime] = useState(new Date().valueOf())

  console.log('debounce used')
  useEffect(() => {
    if (new Date().valueOf() > time + duration) {
      setValue(val)
      console.log('value set', val)
    }  
  }, [])

  return value
}

///
/*
() => {
  const [scrollY, setScrollY] = useState(0)
  const debouncedScrollY = useDebounce(scrollY, 500)

  return <div onScroll={(e) => setScollY(e.someval)}>
    {debouncedScrollY}
  </div>
}
*/