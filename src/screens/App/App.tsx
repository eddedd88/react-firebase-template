import React, { FunctionComponent, useEffect } from 'react'
import { AppBar, Box, Container, Toolbar } from '@material-ui/core'
import AppBarTitle from '../../components/AppBarTitle'
import BottomNavBar from './BottomNavBar'
import analytics from '../../firebase/analytics'
import { useLocation } from 'react-router'

const App: FunctionComponent = () => {
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
          <AppBarTitle>fullstrapp</AppBarTitle>
        </Toolbar>
      </AppBar>
      <Box component={Container} mt={2}>
        Welcome to the your new app!
      </Box>
      <BottomNavBar />
    </>
  )
}

export default App
