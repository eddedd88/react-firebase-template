import FirestoreCollectionPaths from '../../types/FirestoreCollectionPaths'
import { mockedCollections } from './mockDB'

type MockDoc = {
  tableName: keyof FirestoreCollectionPaths
  docId: string
}

const mockFirestore = {
  query: (tableName: string) => tableName,
  collection: (_: any, tableName: string) => tableName,
  doc: (_: any, tableName: string, docId: string) => ({
    tableName,
    docId
  }),
  getDoc: (docRef: MockDoc) => {
    const { id, ...rest } =
      mockedCollections[docRef.tableName].find(i => i.id === docRef.docId) || {}
    return Promise.resolve({
      exists: () => !!id,
      id,
      data: () => rest
    })
  },
  getDocs: (tableName: keyof FirestoreCollectionPaths) =>
    Promise.resolve({
      docs: mockedCollections[tableName].map(({ id, ...rest }) => ({
        id,
        data: () => rest
      }))
    }),
  updateDoc: ({ tableName, docId }: MockDoc, itemChanges: Object) => {
    mockedCollections[tableName] = mockedCollections[tableName].map(record =>
      record.id === docId ? { ...record, ...itemChanges } : record
    )
    return Promise.resolve()
  },
  deleteDoc: ({ tableName, docId }: MockDoc) => {
    mockedCollections[tableName] = mockedCollections[tableName].filter(
      record => record.id === docId
    )
    return Promise.resolve()
  },
  getFirestore: jest.fn(),
  limit: jest.fn(),
  where: jest.fn(),
  orderBy: jest.fn(),
  serverTimestamp: () => 'server side stamp',
  Timestamp: {
    now: jest.fn(() => 123)
  }
}

export default mockFirestore
