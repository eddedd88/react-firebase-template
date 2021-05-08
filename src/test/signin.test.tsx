import userEvent from '@testing-library/user-event'
import renderApp from './utils/renderApp'

test('navigate to signin screen', () => {
  const view = renderApp()
  userEvent.click(view.getByText('Sign In'))
  expect(view.getByText('Signin')).toBeInTheDocument()
})
