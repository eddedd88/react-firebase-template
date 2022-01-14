import { User } from 'firebase/auth'

export const mockOnAuthStateChanged = jest.fn()
const mockUser = (firebaseUser: Partial<User>) => {
  mockOnAuthStateChanged.mockImplementation((_, cb) => {
    cb(firebaseUser)
  })
}

export default mockUser
