import React from 'react'
import { render } from '@testing-library/react'
import HomeScreen from './HomeScreen'

test('renders correctly', () => {
  const tree = render(<HomeScreen />)
  expect(tree.getByText('Welcome to your new app!')).toBeInTheDocument()
})
