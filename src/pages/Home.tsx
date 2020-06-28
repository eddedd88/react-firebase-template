import React from 'react'
import { Box, Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import routes from './routes'

const Home = () => {
  return (
    <Box component={Container} mt={4}>
      <Typography paragraph variant='h5'>
        Welcome to your new app!
      </Typography>
      <Typography paragraph variant='h5'>
        Don't forget to configure your firebase app in{' '}
        <code>/src/firebase/firebase.ts</code>
      </Typography>
      <Button component={Link} to={routes.signin}>
        Sign In
      </Button>
    </Box>
  )
}

export default Home
