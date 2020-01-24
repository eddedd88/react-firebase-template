import React from 'react'
import { render } from '@testing-library/react'

test('renders without errors', () => {
  const tree = render(<div id='root' />)
  require('./index.tsx')
  expect(tree.getByText('fullstrapp')).toBeInTheDocument()
})
