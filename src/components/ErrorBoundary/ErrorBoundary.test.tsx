import React from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

const ErrorComp = () => <div>error component</div>

const ThrowError = () => {
  throw new Error()
}

test('renders children correctly', () => {
  const tree = render(
    <ErrorBoundary onError={jest.fn()} errorScreen={<ErrorComp />}>
      test content
    </ErrorBoundary>
  )
  expect(tree.getByText('test content'))
  expect(tree.queryByText('error component')).toBeNull()
})

test('error event and render error screen on error', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error')
  consoleErrorSpy.mockImplementation(() => {})
  const tree = render(
    <ErrorBoundary onError={jest.fn()} errorScreen={<ErrorComp />}>
      <ThrowError />
      test content
    </ErrorBoundary>
  )
  expect(tree.getByText('error component')).toBeInTheDocument()
  expect(tree.queryByText('test content')).toBeNull()
  consoleErrorSpy.mockRestore()
})
