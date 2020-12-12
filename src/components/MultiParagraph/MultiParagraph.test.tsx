import { render } from '@testing-library/react'
import MultiParagraph from './MultiParagraph'

test('renders correctly', () => {
  const view = render(<MultiParagraph text='Test text' />)
  // single line
  expect(view.getByText('Test text')).toBeInTheDocument()

  // multi line
  view.rerender(<MultiParagraph text={`line 1\nline 2\nline 3\n`} />)
  expect(view.getByText('line 1')).toBeInTheDocument()
  expect(view.getByText('line 2')).toBeInTheDocument()
  expect(view.getByText('line 3')).toBeInTheDocument()
})
