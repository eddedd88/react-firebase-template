import React, { FunctionComponent, useEffect } from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core'
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
        <Typography paragraph variant='h5'>
          Welcome to the your new app!
        </Typography>
        <Typography paragraph variant='h5'>
          Don't forget to configure your firebase app at{' '}
          <code>/src/firebase/firebase.ts</code>
        </Typography>
      </Box>
      <BottomNavBar />
    </>
  )
}

export default App
