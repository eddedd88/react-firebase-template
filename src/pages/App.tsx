import { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Signin from './Signin'
import Home from './Home'
import routes from './routes'
import { useSetRecoilState } from 'recoil'
import { sessionState } from '../state'
import firebase from '../firebase'

const App = () => {
  const setSession = useSetRecoilState(sessionState)

  // Subscribe to firebase auth
  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(resultUser => {
        setSession({
          isAuthenticating: false,
          user: resultUser && {
            uid: resultUser.uid,
            email: resultUser.email,
            displayName: resultUser.displayName
          }
        })
      }),
    [setSession]
  )

  return (
    <Switch>
      <Route path={routes.signin} children={<Signin />} />
      <Route path={routes.home} children={<Home />} />
      <Redirect to={routes.home} />
    </Switch>
  )
}

export default App
