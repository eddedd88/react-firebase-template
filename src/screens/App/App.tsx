import React, { FunctionComponent, useEffect } from 'react'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
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
          <IconButton edge='start' color='inherit'>
            <MenuIcon />
          </IconButton>
          <AppBarTitle>fullstrapp</AppBarTitle>
        </Toolbar>
      </AppBar>

      <Box component={Container} mt={4}>
        <Typography paragraph variant='h5'>
          Welcome to your new app!
        </Typography>
        <Typography paragraph variant='h5'>
          Don't forget to configure your firebase app in{' '}
          <code>/src/firebase/firebase.ts</code>
        </Typography>
      </Box>
      <BottomNavBar />
    </>
  )
}

export default App
