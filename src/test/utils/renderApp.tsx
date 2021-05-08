import { render, screen } from '@testing-library/react'
import { mockUser } from './firebaseMocks'
import App from '../../pages/App'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from '../../components/ErrorBoundary'
import Error from '../../pages/Error'
import { RecoilRoot } from 'recoil'
import theme from '../../theme'

type InitialState = {
  user: Parameters<typeof mockUser>[0]
}

const defaultInitialState: InitialState = {
  user: {
    uid: 'user123'
  }
}

const renderApp = (initialState?: Partial<InitialState>) => {
  const { user } = {
    ...defaultInitialState,
    ...initialState
  }

  mockUser(user)

  render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RecoilRoot>
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
