import { Article, GitHub, Twitter } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer style={{ position: 'sticky', top: '100vh' }}>
      <Box sx={{ backgroundColor: 'primary.main', py: '1.5rem' }}>
        <Box
          sx={{
            display: 'flex',
            pb: '1.5rem',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <IconButton
            href="https://github.com/karintou8710/iNAZO-frontend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            sx={{ color: 'white' }}
          >
            <GitHub sx={{ fontSize: '32px' }} />
          </IconButton>
          <IconButton
            href="https://twitter.com/iNAZO_HU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            sx={{ color: 'white' }}
          >
            <Twitter sx={{ fontSize: '32px' }} />
          </IconButton>
          <IconButton
            href="https://forms.gle/tLRiKrShckWsiuXs9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="article"
            sx={{ color: 'white' }}
          >
            <Article sx={{ fontSize: '32px' }} />
          </IconButton>
        </Box>
        <Typography align="center" color="white">
          2022 - iNAZO
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer
