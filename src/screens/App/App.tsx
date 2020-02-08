import React, { useEffect } from 'react'
import analytics from '../../firebase/analytics'
import { useLocation, Route, Switch, Redirect } from 'react-router'
import SigninScreen from '../SigninScreen'
import HomeScreen from '../HomeScreen'
import routes from '../routes'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import BottomNavBar from './BottomNavBar'

const App = () => {
  const location = useLocation()

  // track screen views in analytics
  useEffect(() => {
    analytics.logEvent('screen_view', {
      app_name: 'Web App',
      screen_name: location.pathname
    })
  }, [location.pathname])

  // signin anonymously if necessary
  // useEffect(
  //   () =>
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (!user) {
  //         firebase.auth().signInAnonymously()
  //       }
  //     }),
  //   []
  // )

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6'>fullstrapp</Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path={routes.signin} component={SigninScreen} />
        <Route path={routes.home} component={HomeScreen} />
        <Redirect to={routes.home} />
      </Switch>

      <BottomNavBar />
    </>
  )
}

export default App
