import React, { FunctionComponent } from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const CustomTypography = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(2),
      flex: 'auto'
    }
  })
)(Typography)

const AppBarTitle: FunctionComponent<TypographyProps> = props => {
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )

  return (
    <CustomTypography
      color='inherit'
      variant={isMobileScreen ? 'h6' : 'h5'}
      {...props}
    />
  )
}

export default AppBarTitle
