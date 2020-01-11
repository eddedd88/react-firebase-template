import React, { FunctionComponent } from 'react'
import { Box, Container, Typography } from '@material-ui/core'

const HomeScreen: FunctionComponent = () => {
  return (
    <Box component={Container} mt={4}>
      <Typography paragraph variant='h5'>
        Welcome to your new app!
      </Typography>
      <Typography paragraph variant='h5'>
        Don't forget to configure your firebase app in{' '}
        <code>/src/firebase/firebase.ts</code>
      </Typography>
    </Box>
  )
}

export default HomeScreen
