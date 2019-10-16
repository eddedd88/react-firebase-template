import React, { FunctionComponent } from 'react'
import { AppBar, Box, Container, Toolbar } from '@material-ui/core'
import AppBarTitle from '../../components/AppBarTitle'
import BottomNavBar from './BottomNavBar'

const App: FunctionComponent = () => {
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
