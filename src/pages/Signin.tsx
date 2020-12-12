import { useEffect } from 'react'
import firebase from '../firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { Box } from '@material-ui/core'
import AppBar from '../components/AppBar'
import routes from './routes'
import Wrapper from '../components/Wrapper'

const ui = new firebaseui.auth.AuthUI(firebase.auth())

const Signin = () => {
  useEffect(() => {
    ui.start('#firebaseui-auth-container', {
      // Firebase UI config options
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    })
  }, [])

  return (
    <>
      <AppBar title='Signin' backTo={routes.home} />
      <Wrapper>
        {/**
         * firebaseui hooks into the following div to display
         * the google signin
         */}
        <Box id='firebaseui-auth-container' marginTop={4} />
      </Wrapper>
    </>
  )
}

export default Signin
