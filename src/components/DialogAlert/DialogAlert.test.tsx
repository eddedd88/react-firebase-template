import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DialogAlert from './DialogAlert'

test('renders correctly', () => {
  // with default props
  const tree = render(
    <DialogAlert
      text='Dialog Text'
      confirmLabel='Confirm Label'
      onClose={jest.fn()}
      onConfirm={jest.fn()}
      open
    >
      Test Content
    </DialogAlert>
  )
  expect(tree.getByText('Cancel')).toBeInTheDocument()

  tree.rerender(
    <DialogAlert
      title='Dialog Alert Title'
      text='Dialog Text'
      confirmLabel='Confirm Label'
      cancelLabel='Cancel Label'
      onClose={jest.fn()}
      onConfirm={jest.fn()}
      open
    >
      Extra Content
    </DialogAlert>
  )
  expect(tree.getByText('Dialog Alert Title')).toBeInTheDocument()
  expect(tree.getByText('Confirm Label')).toBeInTheDocument()
  expect(tree.getByText('Dialog Text')).toBeInTheDocument()
  expect(tree.getByText('Cancel Label')).toBeInTheDocument()
  expect(tree.getByText('Extra Content')).toBeInTheDocument()
})

test('cancel and confirm click event', () => {
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()
  const tree = render(
    <DialogAlert
      text='text'
      confirmLabel='confirm button'
      cancelLabel='cancel button'
      onClose={onCloseMock}
      onConfirm={onConfirmMock}
      open
    />
  )
  fireEvent.click(tree.getByText('cancel button'))
  expect(onCloseMock).toHaveBeenCalledTimes(1)

  fireEvent.click(tree.getByText('confirm button'))
  expect(onConfirmMock).toHaveBeenCalledTimes(1)
})
