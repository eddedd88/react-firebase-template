import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

test('renders app title', () => {
  const { getByText } = render(
    <MuiThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  )
  expect(getByText('fullstrapp')).toBeInTheDocument()
})
