import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import BottomNavBarWithRouter, { BottomNavBar } from './BottomNavBar'

describe('BottomNavBar', () => {
  it('renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer()
    const tree = renderer.render(
      <BottomNavBar
        classes={{
          root: 'test'
        }}
        location={{
          pathname: '/test'
        }}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders with router correctly', () => {
    const renderer = ShallowRenderer.createRenderer()
    const tree = renderer.render(<BottomNavBarWithRouter />)
    expect(tree).toMatchSnapshot()
  })
})
