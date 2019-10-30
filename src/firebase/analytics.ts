import firebase from './firebase'
import 'firebase/analytics'

const analytics = firebase.analytics()

if (process.env.NODE_ENV !== 'production') {
  analytics.setAnalyticsCollectionEnabled(false)
}

export default analytics
