import firebase from 'firebase/app'
import 'firebase/firestore'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY || ''
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID || ''

const config = {
  apiKey,
  projectId,
  authDomain: `${projectId}.firebaseapp.com`,
  storageBucket: `gs://${projectId}.appspot.com`
  // messagingSenderId: "<SENDER_ID>",
  // databaseURL: `https://${projectId}.firebaseio.com`
}

firebase.initializeApp(config)

export default firebase
