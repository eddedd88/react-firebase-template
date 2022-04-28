import {
  collection,
  getFirestore,
  WhereFilterOp,
  OrderByDirection,
  query,
  limit,
  orderBy,
  where,
  getDocs,
  getDoc,
  doc,
  addDoc,
  Timestamp,
  FieldValue,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import FirestoreCollectionPaths from '../types/FirestoreCollectionPaths'

const getById = async <T extends keyof FirestoreCollectionPaths>(
  collectionPath: T,
  recordId: string
) => {
  const db = getFirestore()
  const docRef = doc(db, collectionPath, recordId)
  const result = await getDoc(docRef)
  if (result.exists()) {
    return {
      id: result.id,
      ...result.data()
    } as FirestoreCollectionPaths[T]
  }
}

type WhereClause<T extends keyof FirestoreCollectionPaths> = [
  Extract<keyof Omit<FirestoreCollectionPaths[T], 'id'>, string>,
  WhereFilterOp,
  any
]
type OrderByClause<T> = [Extract<T, string>, OrderByDirection?]

async function runQuery<T extends keyof FirestoreCollectionPaths>({
  collection: collectionPath,
  where: whereClause = [],
  orderBy: orderByClause,
  limit: limitClause = 1000
}: {
  collection: T
  where?: WhereClause<T>[] | WhereClause<T>
  orderBy?: OrderByClause<keyof Omit<FirestoreCollectionPaths[T], 'id'>>
  limit?: number
}) {
  const db = getFirestore()
  if (isSingleWhereClause(whereClause)) {
    whereClause = [whereClause]
  }

  const optionalQueryOptions = [
    ...whereClause.map(w => where(...w)),
    orderByClause ? orderBy(...orderByClause) : undefined
  ].filter(isNotUndefined)

  const q = query<any>(
    collection(db, collectionPath),
    ...optionalQueryOptions,
    limit(limitClause)
  )

  const result = await getDocs<FirestoreCollectionPaths[T]>(q)
  return result.docs.map(item => ({
    ...item.data(),
    id: item.id
  }))
}

function isNotUndefined<T>(val: T | undefined): val is T {
  return !!val
}

function isSingleWhereClause(
  whereClause: WhereClause<any> | WhereClause<any>[]
): whereClause is WhereClause<any> {
  return whereClause.length > 0 && !Array.isArray(whereClause[0])
}

// server timestamps must be Firestore Fieldvalues
type TimestampToFieldValue<T> = {
  [K in keyof T]: T[K] extends Timestamp ? FieldValue : T[K]
}

const addItem = async <T extends keyof FirestoreCollectionPaths>(
  collectionPath: T,
  item: TimestampToFieldValue<Omit<FirestoreCollectionPaths[T], 'id'>>
) => {
  const firestore = getFirestore()
  const result = await addDoc(collection(firestore, collectionPath), item)

  return result // as FirestoreCollectionPaths[T]
}

const updateItem = async <T extends keyof FirestoreCollectionPaths>(
  collectionPath: T,
  itemId: string,
  item: Partial<TimestampToFieldValue<Omit<FirestoreCollectionPaths[T], 'id'>>>
) => {
  const firestore = getFirestore()
  const result = await updateDoc(doc(firestore, collectionPath, itemId), item)

  return result // as FirestoreCollectionPaths[T]
}

const deleteItem = async <T extends keyof FirestoreCollectionPaths>(
  collectionPath: T,
  itemId: string
) => {
  const firestore = getFirestore()
  return await deleteDoc(doc(firestore, collectionPath, itemId))
}

const db = {
  getById,
  runQuery,
  addItem,
  updateItem,
  deleteItem
}

export default db
