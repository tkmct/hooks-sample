import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useThrottle from '../hooks/useThrottle'


const Scroller = () => {
  const [scrollY, setScrollY] = useState(0)
  const debouncedScrollY = useDebounce(scrollY, 500)
  const throttledScrollY = useThrottle(scrollY, 1000)

  return <React.Fragment>
    <span style={{ display: 'block'}}>
      scroll: {scrollY},
      debounced: {debouncedScrollY},
      throttled: {throttledScrollY}
    </span>
    <div 
      style={{ position: 'relative', overflow: 'scroll', height: 200, border: 'solid 1px gray' }} 
      onScroll={() => setScrollY(Math.floor(Math.random() * Math.floor(100)))}>
      <div style={{ minHeight: 1400 }}>
      </div>
    </div>
  </React.Fragment>
}

export default Scroller