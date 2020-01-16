import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

jest.mock('../HomeScreen', () => () => 'HomeScreen')
jest.mock('../SigninScreen', () => () => 'SigninScreen')

const TestComp = () => (
  <MuiThemeProvider theme={createMuiTheme()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
)

test('renders app title', () => {
  const { getByText } = render(<TestComp />)
  expect(getByText('fullstrapp')).toBeInTheDocument()
})

test('renders Home screen by default', () => {
  const { getByText, queryByText } = render(<TestComp />)

  expect(getByText('HomeScreen')).toBeInTheDocument()
  expect(queryByText('SigninScreen')).toBeNull()
})

test('navigate to Signin screen and back to Home', () => {
  const tree = render(<TestComp />)

  // navigate to signin screen
  tree.getByText('Profile').click()
  expect(tree.getByText('SigninScreen')).toBeInTheDocument()
  expect(tree.queryByText('HomeScreen')).toBeNull()

  // navigate back to Home sscreen
  tree.getByText('Home').click()
  expect(tree.getByText('HomeScreen')).toBeInTheDocument()
  expect(tree.queryByText('SigninScreen')).toBeNull()
})
