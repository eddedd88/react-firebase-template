import ReactDOM from 'react-dom'
import App from './pages/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ErrorBoundary from './components/ErrorBoundary'
import Error from './pages/Error'
import { RecoilRoot } from 'recoil'
import initFirebase from './initFirebase'

// material ui theme
import theme from './theme'

// fonts - material ui was built with roboto in mind
import 'typeface-roboto'

// some global css
import './index.css'

initFirebase()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <RecoilRoot>
        <ErrorBoundary onError={console.log} errorComponent={<Error />}>
          <App />
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
