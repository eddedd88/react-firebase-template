// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import {
  mockAuth,
  mockedCollections,
  clearCollectionMocks
} from './test/utils/firebaseMocks'
import FirestoreCollectionPaths from './types/FirestoreCollectionPaths'

// used by Material-Ui to compute media queries
// allows you to test your components in different window sizes
import mediaQuery from 'css-mediaquery'

jest.mock('firebaseui')
jest.mock('firebase/app', () => ({
  firestore: Object.assign(
    jest.fn(() => ({
      useEmulator: jest.fn(),
      settings: jest.fn(),
      enablePersistence: jest.fn(),
      collection: (path: keyof FirestoreCollectionPaths) => {
        const items = mockedCollections[path] || []
        const mockedFirebaseCollection = {
          docs: items.map(item => ({
            id: item.id,
            data: () => item
          }))
        }
        return {
          onSnapshot: (cb: Function) => cb(mockedFirebaseCollection),
          get: () => Promise.resolve(mockedFirebaseCollection),
          where: () => ({
            onSnapshot: (cb: Function) => cb(mockedFirebaseCollection),
            get: () => Promise.resolve(mockedFirebaseCollection)
          })
        }
      }
    })),
    {
      Timestamp: {
        now: jest.fn(() => 123)
      }
    }
  ),
  auth: Object.assign(() => mockAuth, {
    EmailAuthProvider: {
      credential: () => {}
    },
    GoogleAuthProvider: {}
  }),
  initializeApp: jest.fn()
}))

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
