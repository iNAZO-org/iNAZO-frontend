import { LOCAL_STORAGE_BOOKMARK_KEY } from './settings'

export const uniqueArray = <T extends any[]>(arr: T): T[] => {
  return Array.from(new Set(arr))
}

export const getBookmarkListFromLocalStorage = () => {
  const bookmarkList = (localStorage.getItem(LOCAL_STORAGE_BOOKMARK_KEY) || '')
    .split(',')
    .filter((v) => !isNaN(parseInt(v)))
    .map((v) => parseInt(v))
  return bookmarkList
}