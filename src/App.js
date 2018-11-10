import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NetworkProvider } from './contexts/NetworkContext'
import Counter from './components/Counter'
import Form from './components/Form'
import NetworkStatusBar from './components/NetworkStatusBar'
import Scroller from './components/Scroller'

export default class App extends Component {
  render() {
    return <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/network">Network</Link>
            </li>
            <li>
              <Link to="/scroller">Scroller</Link>
            </li>
          </ul>
        </nav>
        <NetworkProvider>
          <Route exact path="/" component={Counter} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/network" component={NetworkStatusBar} />
          <Route exact path="/scroller" component={Scroller} />
        </NetworkProvider>
      </div>
      </Router>
  }
}