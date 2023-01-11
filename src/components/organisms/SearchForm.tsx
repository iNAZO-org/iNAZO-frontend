import SearchIcon from '@mui/icons-material/Search'
import {
  Grid,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material'
import { FC, useState } from 'react'

type SearchFormProps = {
  selectSortValue: string
  onEnter?: (searchInput: string) => void
  onSelectSortChange?: (selectSortValue: string) => void
}

const SearchForm: FC<SearchFormProps> = ({
  selectSortValue,
  onEnter,
  onSelectSortChange,
}) => {
  const [composing, setComposition] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  return (
    <Grid container sx={{ my: '5rem' }}>
      <Grid item xs={4}>
        <TextField
          label="講義を検索する"
          helperText="講義名・教員名・年度・学部・クラスなどで検索ができます"
          type="search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            onCompositionStart: () => setComposition(true),
            onCompositionEnd: () => setComposition(false),
          }}
          onKeyDown={(e) => {
            if (composing) return
            if (e.key === 'Enter') {
              onEnter?.(searchInput)
            }
          }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Grid>

      <Grid item xs={5} />

      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel id="search-label">Sort</InputLabel>
          <Select
            labelId="search-label"
            label="Sort"
            value={selectSortValue}
            onChange={(e) => {
              onSelectSortChange?.(e.target.value)
            }}
          >
            <MenuItem value="latest">新着順</MenuItem>
            <MenuItem value="-gpa">GPA (降順)</MenuItem>
            <MenuItem value="gpa">GPA (昇順)</MenuItem>
            <MenuItem value="failure">単位取得者数</MenuItem>
            <MenuItem value="-failure">落単者数</MenuItem>
            <MenuItem value="-a_band">A帯 (降順)</MenuItem>
            <MenuItem value="a_band">A帯 (昇順)</MenuItem>
            <MenuItem value="-f">F (降順)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SearchForm
