import React, { FunctionComponent, useEffect } from 'react'
import firebase from '../../firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import AppBarTitle from '../AppBarTitle'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const ui = new firebaseui.auth.AuthUI(firebase.auth())

const Signin: FunctionComponent = () => {
  const classes = useStyles()

  useEffect(() => {
    ui.start('#firebaseui-auth-container', {
      // Firebase UI config options
      signInSuccessUrl: '/',
      autoUpgradeAnonymousUsers: true,
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // gets called when an anonymous user logs in with an existing user
        // any data that the anonymous user has created will need to be dealt with
        signInFailure: error => {
          if (error.code !== 'firebaseui/anonymous-upgrade-merge-conflict') {
            return Promise.resolve()
          }

          const anonymousUser = firebase.auth().currentUser

          return firebase
            .auth()
            .signInWithCredential(error.credential)
            .then(() => {
              if (anonymousUser) {
                return anonymousUser.delete()
              }
            })
            .then(() => window.location.assign('/'))
        }
      }
    })
  }, [])

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <IconButton color='inherit'>
            <CloseIcon />
          </IconButton>
          <AppBarTitle>Signin</AppBarTitle>
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>
        <Typography variant='h5' align='center' gutterBottom>
          fullstrapp
        </Typography>

        <div id='firebaseui-auth-container' className={classes.signinButtons} />
      </div>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      margin: 'auto',
      marginTop: theme.spacing(6),
      maxWidth: theme.breakpoints.values.md,
      padding: theme.spacing(2)
    },
    signinButtons: {
      marginTop: theme.spacing(4)
    }
  })
)

export default Signin
