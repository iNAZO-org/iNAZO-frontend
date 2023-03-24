export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const LOCAL_STORAGE_BOOKMARK_KEY = 'bookmark'
export const API_ENDPOINTS = {
  search: '/api/grade_distribution',
} as const

export type ApiEndpoints = typeof API_ENDPOINTS
