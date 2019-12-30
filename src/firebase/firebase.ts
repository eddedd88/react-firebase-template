import firebase from 'firebase/app'
import 'firebase/firestore'

// firebase config for Development
let firebaseConfig = {
  projectId: 'PROJECT_ID',
  apiKey: 'API_KEY',
  appId: 'APP_ID',
  measurementId: 'MEASUREMENT_ID'
}

// firebase config for Production
if (process.env.NODE_ENV === 'production') {
  firebaseConfig = {
    projectId: 'PROJECT_ID',
    apiKey: 'API_KEY',
    appId: 'APP_ID',
    measurementId: 'MEASUREMENT_ID'
  }
}

firebase.initializeApp(firebaseConfig)

export default firebase
