import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DialogForm from './DialogForm'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()
const submitMock = jest.fn(e => e.preventDefault())
const closeMock = jest.fn()
const TestComp = (
  <MuiThemeProvider theme={theme}>
    <DialogForm
      title='Test title'
      onSubmit={submitMock}
      onClose={closeMock}
      submitLabel='Submit'
      cancelLabel='Dont Submit'
      appBarSubmitButton={<button type='submit'>app bar submit</button>}
      open
    >
      a test form
    </DialogForm>
  </MuiThemeProvider>
)

afterEach(() => {
  window.resizeTo(theme.breakpoints.values.lg, 1)
})

test('renders correctly', () => {
  const tree = render(TestComp)
  expect(tree.getByText('Test title')).toBeInTheDocument()
  expect(tree.getByText('Submit')).toBeInTheDocument()
  expect(tree.getByText('Dont Submit')).toBeInTheDocument()
  expect(tree.getByText('a test form')).toBeInTheDocument()
  expect(tree.queryByText('app bar submit')).toBeNull()
  tree.unmount()

  window.resizeTo(theme.breakpoints.values.sm, 1)
  const tree2 = render(TestComp)
  expect(tree2.getByText('app bar submit')).toBeInTheDocument()
  expect(tree2.getByTitle('Close')).toBeInTheDocument()
  expect(tree2.queryByText('Dont Submit')).toBeNull()
  tree2.unmount()

  // default labels
  window.resizeTo(theme.breakpoints.values.lg, 1)
  const DefaultTestComp = (
    <MuiThemeProvider theme={theme}>
      <DialogForm
        title='Test title'
        onSubmit={jest.fn()}
        onClose={jest.fn()}
        open
      >
        a test form
      </DialogForm>
    </MuiThemeProvider>
  )
  const tree3 = render(DefaultTestComp)
  expect(tree3.getByText('Save')).toBeInTheDocument()
  expect(tree3.getByText('Cancel')).toBeInTheDocument()
  tree3.unmount()

  window.resizeTo(theme.breakpoints.values.sm, 1)
  const tree4 = render(DefaultTestComp)
  expect(tree4.getByText('Save')).toBeInTheDocument()
  expect(tree4.getByTitle('Close')).toBeInTheDocument()
})

test('save the form', () => {
  const tree = render(TestComp)
  fireEvent.click(tree.getByText('Submit'))
  expect(submitMock).toHaveBeenCalledTimes(1)
  submitMock.mockClear()
  tree.unmount()

  window.resizeTo(theme.breakpoints.values.sm, 1)
  const tree2 = render(TestComp)
  fireEvent.click(tree2.getByText('app bar submit'))
  expect(submitMock).toHaveBeenCalledTimes(1)
})

test('cancel the form', () => {
  const tree = render(TestComp)
  fireEvent.click(tree.getByText('Dont Submit'))
  expect(closeMock).toHaveBeenCalledTimes(1)
  closeMock.mockClear()
  tree.unmount()

  window.resizeTo(theme.breakpoints.values.sm, 1)
  const tree2 = render(TestComp)
  fireEvent.click(tree2.getByTitle('Close'))
  expect(closeMock).toHaveBeenCalledTimes(1)
})
