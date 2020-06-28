import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { RecoilRoot } from 'recoil'

/**
 * All the providers required to mount the app during tests
 */
type Props = {
  children?: ReactNode
}

const AllProviders = (props: Props) => (
  <RecoilRoot>
    <MuiThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </MuiThemeProvider>
  </RecoilRoot>
)

export default AllProviders
