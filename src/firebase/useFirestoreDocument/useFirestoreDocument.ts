import { useEffect, useState } from 'react'
import FirestoreCollectionPath from '../../models/FirestoreCollectionPath'
import firestore from '../firestore'

export type FirestoreDocumentResult<T> = {
  loading: boolean
  data?: T
  error?: Error
}

const useFirestoreDocument = <T extends {}>(
  collectionPath: FirestoreCollectionPath,
  documentId: string
) => {
  const [result, setResult] = useState<FirestoreDocumentResult<T>>({
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
                id: result.id,
                ...(result.data() as T)
              }
            })
          },
          error => {
            console.error(error)
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
