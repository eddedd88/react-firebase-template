import firebase from 'firebase'

export const mockOnSnapshot = jest.fn()
export const mockAuth = {
  onAuthStateChanged: jest.fn()
}

export const mockUser = (firebaseUser: Partial<firebase.User>) => {
  mockAuth.onAuthStateChanged.mockImplementation(cb => {
    cb(firebaseUser)
  })
}

type FirestoreDocument = {
  id: string
  [key: string]: any
}
export const mockCollectionSnapshot = <T extends FirestoreDocument>(
  items: T[]
) => {
  mockOnSnapshot.mockImplementationOnce(cb => {
    cb({
      docs: items.map(item => ({
        id: item.id,
        data: () => item
      }))
    })
  })
}
