import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renders app title', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  expect(getByText('fullstrapp')).toBeInTheDocument()
})
