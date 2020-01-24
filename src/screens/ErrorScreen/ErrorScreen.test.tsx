import React from 'react'
import { render } from '@testing-library/react'
import ErrorScreen from './ErrorScreen'

test('renders without throwing errors', () => {
  const tree = render(<ErrorScreen />)
  expect(tree.getByText('Something went wrong!')).toBeInTheDocument()
})
