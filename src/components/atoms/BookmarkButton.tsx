import { FC, useEffect, useState } from 'react'

import { Star } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { yellow } from '@mui/material/colors'

import { BaseProps } from '@/types'
import { getBookmarkListFromLocalStorage, uniqueArray } from '@/utils/common'
import { LOCAL_STORAGE_BOOKMARK_KEY } from '@/utils/settings'

type BookmarkButtonProps = {
  gradeDistributionId: number
} & BaseProps

/* 1,2,3,4,5 ... ,100 の形式で保存する */
const BookmarkButton: FC<BookmarkButtonProps> = ({
  gradeDistributionId,
  sx,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const bookmarkList = getBookmarkListFromLocalStorage()
    setIsBookmarked(bookmarkList.includes(gradeDistributionId))
  }, [gradeDistributionId])

  const handleBookmarkClick = () => {
    let bookmarkList = getBookmarkListFromLocalStorage()

    if (isBookmarked) {
      bookmarkList = bookmarkList.filter((v) => v !== gradeDistributionId)
    } else {
      bookmarkList.push(gradeDistributionId)
    }

    // 保存時にIDがユニークであることと、型式に沿っていることを保証する
    const uniqueBookmarkList = uniqueArray(bookmarkList)
    localStorage.setItem(
      LOCAL_STORAGE_BOOKMARK_KEY,
      uniqueBookmarkList.join(','),
    )

    setIsBookmarked((prev) => !prev)
  }

  return (
    <IconButton onClick={handleBookmarkClick} sx={{ ...sx }}>
      <Star
        sx={{
          fontSize: 40,
          ...(isBookmarked ? { color: yellow[600] } : { color: '#757575' }),
        }}
      />
    </IconButton>
  )
}

export default BookmarkButton
