// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import 'jest-localstorage-mock'
import { mockAuth, mockOnSnapshot } from './test-utils/firebaseMocks'

// used by Material-Ui to compute media queries
// allows you to test your components in different window sizes
import mediaQuery from 'css-mediaquery'

jest.mock('firebase/app', () => ({
  firestore: jest.fn(() => ({
    settings: jest.fn(),
    enablePersistence: jest.fn(),
    collection: jest.fn(() => ({
      where: jest.fn(() => ({
        onSnapshot: mockOnSnapshot
      }))
    }))
  })),
  auth: Object.assign(
    jest.fn(() => mockAuth),
    {
      EmailAuthProvider: {},
      GoogleAuthProvider: {}
    }
  ),
  initializeApp: jest.fn()
}))

jest.mock('firebaseui')

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
