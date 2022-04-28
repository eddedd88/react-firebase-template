// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { mockOnAuthStateChanged } from './tests/utils/mockUser'

// used by Material-Ui to compute media queries
// allows you to test your components in different window sizes
import mediaQuery from 'css-mediaquery'

jest.mock('firebase/app')
jest.mock('firebase/firestore', () => ({
  query: jest.fn(),
  collection: jest.fn(),
  limit: jest.fn(),
  getFirestore: jest.fn(),
  getDocs: () =>
    Promise.resolve({
      docs: []
    })
}))
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  onAuthStateChanged: mockOnAuthStateChanged
}))

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
