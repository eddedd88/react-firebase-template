// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import 'jest-localstorage-mock'

jest.mock('firebase/app', () => ({
  firestore: jest.fn(() => ({
    settings: jest.fn(),
    enablePersistence: jest.fn()
  })),
  auth: jest.fn(),
  initializeApp: jest.fn(),
  analytics: jest.fn(() => ({
    setAnalyticsCollectionEnabled: jest.fn(),
    logEvent: jest.fn()
  }))
}))

jest.mock('firebaseui')
