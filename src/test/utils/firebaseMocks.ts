import firebase from 'firebase'
import FirestoreCollectionPaths from '../../types/FirestoreCollectionPaths'

export const mockedCollections: {
  [key in keyof FirestoreCollectionPaths]?: Array<FirestoreCollectionPaths[key]>
} = {}
export const mockCollection = <T extends keyof FirestoreCollectionPaths>(
  path: T,
  collection: Array<FirestoreCollectionPaths[T]>
) => {
  mockedCollections[path] = collection
}

export const clearCollectionMocks = () => {
  Object.keys(mockedCollections).forEach(key => {
    mockedCollections[key as keyof FirestoreCollectionPaths] = []
  })
}

export const mockAuth = {
  onAuthStateChanged: jest.fn(),
  useEmulator: () => {},
  signInWithCredential: () => {}
}
export const mockUser = (firebaseUser: Partial<firebase.User>) => {
  mockAuth.onAuthStateChanged.mockImplementation(cb => {
    cb(firebaseUser)
  })
}
