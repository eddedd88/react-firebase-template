import firebase from './firebase'
import 'firebase/firestore'
import CustomFirestore from '../types/CustomFirestore'

const firestore = firebase.firestore() as CustomFirestore

if (process.env.NODE_ENV !== 'production') {
  firestore.useEmulator('localhost', 8080)
}

if (process.env.NODE_ENV === 'production') {
  // support offline mode
  firestore.enablePersistence({
    synchronizeTabs: true
  })
}

window.addEventListener('offline', () => firestore.disableNetwork())
window.addEventListener('online', () => firestore.enableNetwork())

export default firestore
