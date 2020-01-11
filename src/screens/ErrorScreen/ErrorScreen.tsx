import React, { FunctionComponent } from 'react'
import { Box, Container } from '@material-ui/core'

const ErrorScreen: FunctionComponent = () => {
  return (
    <Box component={Container} mt={2}>
      Something went wrong!
    </Box>
  )
}

export default ErrorScreen
