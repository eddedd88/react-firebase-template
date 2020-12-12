import { render, fireEvent } from '@testing-library/react'
import DialogAlert from './DialogAlert'

test('renders correctly', () => {
  // with default props
  const view = render(
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
  expect(view.getByText('Cancel')).toBeInTheDocument()

  view.rerender(
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
  expect(view.getByText('Dialog Alert Title')).toBeInTheDocument()
  expect(view.getByText('Confirm Label')).toBeInTheDocument()
  expect(view.getByText('Dialog Text')).toBeInTheDocument()
  expect(view.getByText('Cancel Label')).toBeInTheDocument()
  expect(view.getByText('Extra Content')).toBeInTheDocument()
})

test('cancel and confirm click event', () => {
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()
  const view = render(
    <DialogAlert
      text='text'
      confirmLabel='confirm button'
      cancelLabel='cancel button'
      onClose={onCloseMock}
      onConfirm={onConfirmMock}
      open
    />
  )
  fireEvent.click(view.getByText('cancel button'))
  expect(onCloseMock).toHaveBeenCalledTimes(1)

  fireEvent.click(view.getByText('confirm button'))
  expect(onConfirmMock).toHaveBeenCalledTimes(1)
})
