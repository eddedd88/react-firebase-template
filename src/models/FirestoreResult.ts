type FirestoreResult<T> = {
  loading: boolean
  data?: T
  error?: Error
}

export default FirestoreResult
