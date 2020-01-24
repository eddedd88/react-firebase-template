import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import analytics from '../../firebase/analytics'

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

test('navigate from Home screen to Signin screen and back to Home', () => {
  const tree = render(<TestComp />)
  expect(tree.getByText('HomeScreen')).toBeInTheDocument()
  expect(tree.queryByText('SigninScreen')).toBeNull()
  expect(analytics.logEvent).toHaveBeenLastCalledWith(
    'screen_view',
    expect.objectContaining({ screen_name: '/' })
  )

  // navigate to signin screen
  fireEvent.click(tree.getByText('Profile'))
  expect(tree.getByText('SigninScreen')).toBeInTheDocument()
  expect(tree.queryByText('HomeScreen')).toBeNull()
  expect(analytics.logEvent).toHaveBeenLastCalledWith(
    'screen_view',
    expect.objectContaining({ screen_name: '/signin' })
  )

  // navigate back to Home sscreen
  fireEvent.click(tree.getByText('Home'))
  expect(tree.getByText('HomeScreen')).toBeInTheDocument()
  expect(tree.queryByText('SigninScreen')).toBeNull()
  expect(analytics.logEvent).toHaveBeenLastCalledWith(
    'screen_view',
    expect.objectContaining({ screen_name: '/' })
  )
})
