import { useEffect, useState } from 'react'
import FirestoreCollectionPaths from '../../types/FirestoreCollectionPaths'
import FirestoreResult from '../../types/FirestoreResult'
import firestore from '../../firebase/firestore'

const useFirestoreDocument = <T extends keyof FirestoreCollectionPaths>(
  collectionPath: T,
  documentId: string
) => {
  const [result, setResult] = useState<
    FirestoreResult<FirestoreCollectionPaths[T]>
  >({
    loading: true
  })

  useEffect(
    () =>
      firestore
        .collection(collectionPath)
        .doc(documentId)
        .onSnapshot(
          result => {
            setResult({
              loading: false,
              data: {
                ...(result.data() as FirestoreCollectionPaths[T]),
                id: result.id
              },
              error: undefined
            })
          },
          error => {
            setResult({
              loading: false,
              error
            })
          }
        ),
    [collectionPath, documentId]
  )

  return result
}

export default useFirestoreDocument
