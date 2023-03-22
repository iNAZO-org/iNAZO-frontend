import { LOCAL_STORAGE_BOOKMARK_KEY } from './settings'

export const uniqueArray = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

export const getBookmarkListFromLocalStorage = () => {
  const bookmarkList = (localStorage.getItem(LOCAL_STORAGE_BOOKMARK_KEY) || '')
    .split(',')
    .filter((v) => !isNaN(parseInt(v)))
    .map((v) => parseInt(v))
  return bookmarkList
}

export const unreachable = (v: never) => {
  throw new Error('到達するべきではない箇所が実行されました', v)
}
