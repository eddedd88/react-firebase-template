import ReactDOM from 'react-dom'
import App from './pages/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ErrorBoundary from './components/ErrorBoundary'
import Error from './pages/Error'
import { RecoilRoot } from 'recoil'

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
      <RecoilRoot>
        <ErrorBoundary onError={console.log} errorComponent={<Error />}>
          <App />
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
