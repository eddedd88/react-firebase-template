// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import './tests/utils/mockFirestore'

// used by Material-Ui to compute media queries
// allows you to test your components in different window sizes
import mediaQuery from 'css-mediaquery'
import { clearCollectionMocks } from './tests/utils/mockDB'

jest.mock('firebase/app')
jest.mock('firebase/auth')
// jest.mock('firebaseui')

afterEach(() => {
  clearCollectionMocks()
})

// global function to resize window and to test responsiveness
window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height
  }).dispatchEvent(new this.Event('resize'))
}

// global function used by Material-ui to compute media queries
window.matchMedia = (query: string) => ({
  matches: mediaQuery.match(query, { width: window.innerWidth }),
  media: '',
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
  onchange: () => {}
})
