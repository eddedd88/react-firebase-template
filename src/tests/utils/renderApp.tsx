import { render, screen } from '@testing-library/react'
import App from '../../pages/App'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import ErrorBoundary from '../../components/ErrorBoundary'
import Error from '../../pages/Error'
import { MutableSnapshot, RecoilRoot, UnwrapRecoilValue } from 'recoil'
import theme from '../../theme'
import { sessionState } from '../../state'

const defaultSession: UnwrapRecoilValue<typeof sessionState> = {
  isAuthenticating: false,
  user: {
    uid: 'user123',
    displayName: 'John Doe',
    email: 'john@doe.com'
  }
}

const renderApp = (session?: typeof defaultSession) => {
  function initializeState({ set }: MutableSnapshot) {
    set(sessionState, session || defaultSession)
  }

  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RecoilRoot initializeState={initializeState}>
          <ErrorBoundary onError={console.log} errorComponent={<Error />}>
            <App />
          </ErrorBoundary>
        </RecoilRoot>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { screen }
export default renderApp
