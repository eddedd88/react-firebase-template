import React, { FunctionComponent } from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const CustomTypography = withStyles(
  createStyles({
    root: {
      marginLeft: 20,
      flex: 'auto'
    }
  })
)(Typography)

const AppBarTitle: FunctionComponent = props => {
  return <CustomTypography color='inherit' variant='h6' {...props} />
}

export default AppBarTitle
