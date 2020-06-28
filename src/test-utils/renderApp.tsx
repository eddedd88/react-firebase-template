import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { mockUser } from './firebaseMocks'

type InitialState = {
  user: Parameters<typeof mockUser>[0]
}

const defaultInitialState: InitialState = {
  user: {
    uid: 'user123'
  }
}

const renderApp = (initialState?: Partial<InitialState>) => {
  const { user } = {
    ...defaultInitialState,
    ...initialState
  }

  mockUser(user)

  render(<div id='root' />)
  act(() => {
    require('../index.tsx')
  })
  return screen
}

export default renderApp
