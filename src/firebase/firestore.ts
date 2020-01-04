import firebase from './firebase'
import 'firebase/firestore'
import FirestoreCollectionPath from '../models/FirestoreCollectionPath'

// use typed collection paths
interface CustomFirestore extends firebase.firestore.Firestore {
  collection(
    collectionPath: FirestoreCollectionPath
  ): firebase.firestore.CollectionReference
}

const firestore: CustomFirestore = firebase.firestore()

// support offline mode
firestore.enablePersistence()
window.addEventListener('offline', () => firestore.disableNetwork())
window.addEventListener('online', () => firestore.enableNetwork())

export default firestore
