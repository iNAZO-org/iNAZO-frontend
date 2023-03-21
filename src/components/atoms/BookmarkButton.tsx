import { BaseProps } from '@/types'
import { Star } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { uniqueArray } from '@/utils/common'
import { LOCAL_STORAGE_BOOKMARK_KEY } from '@/utils/settings'

type BookmarkButtonProps = {
  gradeDistributionId: number
} & BaseProps

const BookmarkButton = ({ gradeDistributionId, sx }: BookmarkButtonProps) => {
  const handleBookmarkClick = () => {
    /* 1,2,3,4,5 ... ,100 の形式で保存する */
    const bookmarkList = (
      localStorage.getItem(LOCAL_STORAGE_BOOKMARK_KEY) || ''
    )
      .split(',')
      .filter((v) => !isNaN(parseInt(v)))
      .map((v) => parseInt(v))
    bookmarkList.push(gradeDistributionId)
    const uniqueBookmarkList = uniqueArray(bookmarkList)
    // 保存時にIDがユニークであることと、型式に沿っていることを保証する
    localStorage.setItem(
      LOCAL_STORAGE_BOOKMARK_KEY,
      uniqueBookmarkList.join(','),
    )
  }

  return (
    <IconButton onClick={handleBookmarkClick} sx={sx}>
      <Star />
    </IconButton>
  )
}

export default BookmarkButton
