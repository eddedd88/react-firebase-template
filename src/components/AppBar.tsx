import { ReactNode } from 'react'
import {
  AppBar as MaterialAppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'
import NightsStayIcon from '@material-ui/icons/NightsStayOutlined'

type Props = {
  title?: string
  backTo?: string
  actions?: ReactNode
}

const AppBar = (props: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40
  })

  return (
    <MaterialAppBar
      elevation={trigger ? 4 : 0}
      position='sticky'
      color='default'
    >
      <Toolbar>
        {props.backTo && (
          <IconButton
            component={Link}
            to={props.backTo}
            color='inherit'
            edge='start'
          >
            <ArrowBackIcon titleAccess='Navigate Back' />
          </IconButton>
        )}
        {!props.backTo && <NightsStayIcon color='primary' fontSize='large' />}
        <Box ml={3} flex='auto'>
          <Typography variant='h6'>{props.title}</Typography>
        </Box>
        {props.actions}
      </Toolbar>
    </MaterialAppBar>
  )
}

export default AppBar
