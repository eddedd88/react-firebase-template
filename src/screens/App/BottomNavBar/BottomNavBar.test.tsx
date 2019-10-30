import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import BottomNavBar from './BottomNavBar'

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/test'
  })
}))

describe('BottomNavBar', () => {
  it('renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer()
    const tree = renderer.render(<BottomNavBar />)
    expect(tree).toMatchSnapshot()
  })
})
