import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import loginForm from './Pages/Login'

export default ()=>{
  return(
    <div>
      <HashRouter>
        <Switch>
          <Route path='/login' component={loginForm} />
        </Switch>
      </HashRouter>
    </div>
  )
}