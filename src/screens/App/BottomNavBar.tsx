import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link, useLocation } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import routes from '../routes'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      boxShadow: theme.shadows[8],
      backfaceVisibility: 'hidden'
    }
  })
)

export const BottomNavBar = () => {
  const classes = useStyles()
  const location = useLocation()

  const secondPathIndex = location.pathname.indexOf('/', 1)
  const tabValue =
    secondPathIndex < 0
      ? location.pathname
      : location.pathname.substring(0, secondPathIndex)

  return (
    <BottomNavigation value={tabValue} classes={classes} showLabels>
      <BottomNavigationAction
        icon={<LocationCityIcon />}
        label='Home'
        value={routes.home}
        component={Link}
        to={routes.home}
      />
      <BottomNavigationAction
        icon={<PersonIcon />}
        label='Profile'
        value={routes.signin}
        component={Link}
        to={routes.signin}
      />
    </BottomNavigation>
  )
}

export default BottomNavBar
