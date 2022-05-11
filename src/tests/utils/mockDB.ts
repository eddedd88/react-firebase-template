import FirestoreCollectionPaths from '../../types/FirestoreCollectionPaths'

export let mockedCollections: {
  [key in keyof FirestoreCollectionPaths]: Array<FirestoreCollectionPaths[key]>
} = {
  todos: []
}

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
