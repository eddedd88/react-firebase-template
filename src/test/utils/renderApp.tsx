import { render, screen } from '@testing-library/react'
import App from '../../pages/App'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from '../../components/ErrorBoundary'
import Error from '../../pages/Error'
import { RecoilRoot, UnwrapRecoilValue } from 'recoil'
import theme from '../../theme'
import { sessionState } from '../../state'

type InitialState = {
  session: UnwrapRecoilValue<typeof sessionState>
}

const defaultInitialState: InitialState = {
  session: {
    isAuthenticating: false,
    user: {
      uid: 'user123',
      displayName: 'John Doe',
      email: 'john@doe.com'
    }
  }
}

const renderApp = (initialState?: Partial<InitialState>) => {
  const state = {
    ...defaultInitialState,
    ...initialState
  }

  render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RecoilRoot initializeState={() => state}>
          <ErrorBoundary onError={console.log} errorComponent={<Error />}>
            <App />
          </ErrorBoundary>
        </RecoilRoot>
      </BrowserRouter>
    </MuiThemeProvider>
  )

  return screen
}

export default renderApp
