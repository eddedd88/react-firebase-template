import React from 'react'
import ReactDOM from 'react-dom'
import App from './screens/App'
import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider } from '@material-ui/core/styles'
import addToHomeScreen from './addToHomeScreen'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorScreen from './screens/ErrorScreen'

// material ui theme
import theme from './theme'

// fonts - material ui was built with roboto in mind
import 'typeface-roboto'

// some global css
import './index.css'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <ErrorBoundary onError={console.log} errorScreen={<ErrorScreen />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
)

addToHomeScreen()
serviceWorker.register()
