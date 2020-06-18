import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Home , Reg, List, Charts, Public } from './assembly'
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Public  {...this.props}>
            <Switch>
              <Route path="/list" component={List} />
              <Route path="/charts" component={Charts} />
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />  
            </Switch>
          </Public>
        </Switch>
      </BrowserRouter>
    )
  }
}
