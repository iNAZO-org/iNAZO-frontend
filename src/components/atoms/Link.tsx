import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import MUILink from '@mui/material/Link'
import NextLink from 'next/link'

type LinkProps = ComponentPropsWithoutRef<typeof MUILink> & {
  children?: ReactNode
}

const Link: FC<LinkProps> = ({ sx, children, ...props }) => {
  return (
    <MUILink {...props} component={NextLink} sx={sx}>
      {children}
    </MUILink>
  )
}

export default Link
