import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Signin from './Signin'
import Home from './Home'
import routes from './routes'
import AppBar from '../components/AppBar'

const App = () => {
  return (
    <>
      <AppBar title='fullstrapp' />
      <Switch>
        <Route path={routes.signin} children={<Signin />} />
        <Route path={routes.home} children={<Home />} />
        <Redirect to={routes.home} />
      </Switch>
    </>
  )
}

export default App
