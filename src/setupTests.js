import 'jest-localstorage-mock'

jest.mock('firebase/app', () => ({
  firestore: jest.fn(() => ({
    settings: jest.fn(),
    enablePersistence: jest.fn()
  })),
  auth: jest.fn(),
  initializeApp: jest.fn(),
  analytics: jest.fn()
}))

jest.mock('firebaseui')
