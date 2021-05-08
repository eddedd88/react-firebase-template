import firebase from '../firebase'
import FirestoreResult from '../types/FirestoreResult'

const subscribeToFirestoreCollection = <T>(
  firestoreQuery: firebase.firestore.Query<T>,
  setResult: (result: FirestoreResult<T[]>) => void
) =>
  firestoreQuery.onSnapshot(
    result => {
      setResult({
        loading: false,
        data: result.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })),
        error: undefined
      })
    },
    error => {
      console.error(error)
      setResult({
        loading: false,
        error
      })
    }
  )

export default subscribeToFirestoreCollection
