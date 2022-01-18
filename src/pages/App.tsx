import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Signin from './Signin'
import Home from './Home'
import routes from './routes'
import { useSetRecoilState } from 'recoil'
import { sessionState } from '../state'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const App = () => {
  const setSession = useSetRecoilState(sessionState)

  // Subscribe to firebase auth
  useEffect(
    () =>
      onAuthStateChanged(getAuth(), resultUser => {
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
    <Routes>
      <Route path={routes.signin} element={<Signin />} />
      <Route path={routes.home} element={<Home />} />
      <Route path='*' element={<Navigate to={routes.home} />} />
    </Routes>
  )
}

export default App
