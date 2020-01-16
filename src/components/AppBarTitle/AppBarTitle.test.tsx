import React from 'react'
import { render } from '@testing-library/react'
import AppBarTitle from './AppBarTitle'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

test('renders correctly', () => {
  const tree = render(
    <MuiThemeProvider theme={createMuiTheme()}>
      <AppBarTitle>test title</AppBarTitle>
    </MuiThemeProvider>
  )
  expect(tree.getByText('test title')).toBeInTheDocument()
})
