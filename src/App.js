import React, { Component, Suspense, lazy, useState } from 'react'
import { NetworkProvider } from './contexts/NetworkContext'
import useDebounce from './hooks/useDebounce'

const CounterLazy = lazy(() => import('./components/Counter'))
const FormLazy = lazy(() => import('./components/Form'))
const NetworkStatusBarLazy = lazy(() => import('./components/NetworkStatusBar'))

const Scroller = () => {
  const [scrollY, setScrollY] = useState(0)
  const debouncedScrollY = useDebounce(scrollY, 500)

  return <React.Fragment>
    <span style={{ display: 'block'}}>
      scroll: {scrollY},
      debounced: {debouncedScrollY}
    </span>
    <div style={{ position: 'relative', overflow: 'scroll', height: 200, border: 'solid 1px gray' }} onScroll={() => setScrollY(Math.random())}>
      <div style={{ minHeight: 1400 }}>
      </div>
    </div>
  </React.Fragment>
}

export default class App extends Component {
  render() {
    return <NetworkProvider>
      <h1>Counter</h1>
      <Suspense fallback={<p>Loading Counter...</p>}>
        <CounterLazy />
      </Suspense>
      <Suspense fallback={<p>Loading Counter...</p>}>
        <FormLazy />
      </Suspense>
      <Suspense fallback={""}>
        <NetworkStatusBarLazy />
      </Suspense>
      <Scroller />
    </NetworkProvider>
  }
}