/**
 * Define the different parts of your state here
 * using https://recoiljs.org/
 */
import { atom } from 'recoil'

export const sessionState = atom<{
  user: {
    uid: string
    email: string | null
    displayName: string | null
  } | null
  isAuthenticating: boolean
}>({
  key: 'session',
  default: {
    isAuthenticating: true,
    user: null
  }
})
