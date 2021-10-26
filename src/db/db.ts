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
  doc
} from 'firebase/firestore'
import FirestoreCollectionPaths from '../types/FirestoreCollectionPaths'

export const getById = async <T extends keyof FirestoreCollectionPaths>(
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
export async function runQuery<T extends keyof FirestoreCollectionPaths>({
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
  return whereClause.length === 1 && Array.isArray(whereClause[0])
}
