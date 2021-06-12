import firebase from 'firebase/app'
import 'firebase/auth'

// firebase config can be found in your firebase project
const firebaseConfig = {}

firebase.initializeApp(firebaseConfig)
if (process.env.NODE_ENV !== 'production') {
  firebase.auth().useEmulator('http://localhost:9099')
  firebase
    .auth()
    .signInWithCredential(
      firebase.auth.EmailAuthProvider.credential('john@doe.com', '123123')
    )
}

export default firebase
