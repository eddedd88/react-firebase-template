import userEvent from '@testing-library/user-event'
import renderApp, { screen } from './utils/renderApp'

test('navigate to signin screen', () => {
  renderApp()
  userEvent.click(screen.getByText('Sign In'))
  expect(screen.getByText('Signin')).toBeInTheDocument()
})
