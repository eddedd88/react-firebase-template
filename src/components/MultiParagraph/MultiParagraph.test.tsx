import React from 'react'
import { render } from '@testing-library/react'
import MultiParagraph from './MultiParagraph'

test('renders correctly', () => {
  const tree = render(<MultiParagraph text='Test text' />)
  // single line
  expect(tree.getByText('Test text')).toBeInTheDocument()

  // multi line
  tree.rerender(<MultiParagraph text={`line 1\nline 2\nline 3\n`} />)
  expect(tree.getByText('line 1')).toBeInTheDocument()
  expect(tree.getByText('line 2')).toBeInTheDocument()
  expect(tree.getByText('line 3')).toBeInTheDocument()
})
