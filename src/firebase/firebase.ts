import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase config for Development
let firebaseConfig = {}

// firebase config for Production
if (process.env.NODE_ENV === 'production') {
  firebaseConfig = {}
}

firebase.initializeApp(firebaseConfig)

export default firebase
