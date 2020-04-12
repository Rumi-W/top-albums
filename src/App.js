import React, { PureComponent } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper'
import Intro from './components/Intro'
import './App.css'

class App extends PureComponent {
  render() {
    console.log('rendering app')
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/top100">
            <Wrapper />
          </Route>
          <Route path="/" exact>
            <Intro />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
