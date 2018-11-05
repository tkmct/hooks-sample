import React, { Component, Suspense, lazy } from 'react'

const CounterLazy = lazy(() => import('./Counter'))

export default class App extends Component {
  render() {
    return <div>
      <h1>Counter</h1>
      <Suspense fallback={<p>Loading Counter...</p>}>
        <CounterLazy />
      </Suspense>
    </div>
  }
}