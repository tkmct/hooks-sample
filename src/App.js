import React, { Component, Suspense, lazy } from 'react'
import { NetworkProvider } from './contexts/NetworkContext'

const CounterLazy = lazy(() => import('./components/Counter'))
const FormLazy = lazy(() => import('./components/Form'))
const NetworkStatusBarLazy = lazy(() => import('./components/NetworkStatusBar'))

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
    </NetworkProvider>
  }
}