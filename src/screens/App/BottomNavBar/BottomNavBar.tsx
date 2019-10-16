import React, { FunctionComponent } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import GridIcon from '@material-ui/icons/GridOn'
import PersonIcon from '@material-ui/icons/Person'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import paths from '../../routes'
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

type Props = RouteComponentProps

export const BottomNavBar: FunctionComponent<Props> = props => {
  const classes = useStyles()

  const secondPathIndex = props.location.pathname.indexOf('/', 1)
  const tabValue =
    secondPathIndex < 0
      ? props.location.pathname
      : props.location.pathname.substring(0, secondPathIndex)

  return (
    <BottomNavigation value={tabValue} classes={classes} showLabels>
      <BottomNavigationAction
        icon={<LocationCityIcon />}
        label='Feed'
        value={paths.feed}
        component={Link}
        to={paths.feed}
      />
      <BottomNavigationAction
        icon={<GridIcon />}
        label='Grid'
        value={paths.grid}
        component={Link}
        to={paths.grid}
      />
      <BottomNavigationAction
        icon={<PersonIcon />}
        label='Profile'
        value={paths.profile}
        component={Link}
        to={paths.profile}
      />
    </BottomNavigation>
  )
}

export default withRouter(BottomNavBar)
