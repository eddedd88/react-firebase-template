import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

const ErrorComp = () => <div>error component</div>

const ThrowError = () => {
  throw new Error()
}

test('renders children correctly', () => {
  const view = render(
    <ErrorBoundary onError={jest.fn()} errorComponent={<ErrorComp />}>
      test content
    </ErrorBoundary>
  )
  expect(view.getByText('test content'))
  expect(view.queryByText('error component')).toBeNull()
})

test('error event and render error screen on error', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error')
  consoleErrorSpy.mockImplementation(() => {})
  const view = render(
    <ErrorBoundary onError={jest.fn()} errorComponent={<ErrorComp />}>
      <ThrowError />
      test content
    </ErrorBoundary>
  )
  expect(view.getByText('error component')).toBeInTheDocument()
  expect(view.queryByText('test content')).toBeNull()
  consoleErrorSpy.mockRestore()
})
