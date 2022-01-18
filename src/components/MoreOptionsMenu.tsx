import { useRef, ReactNode } from 'react'
import { Menu, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

type Props = {
  children: ReactNode
  open: boolean
  onClose: () => void
  onOpen: () => void
}

const MoreOptionsMenu = (props: Props) => {
  const menuAnchorEl = useRef(null)

  return (
    <>
      <IconButton
        color='inherit'
        onClick={props.onOpen}
        ref={menuAnchorEl}
        edge='end'
      >
        <MoreVertIcon color='inherit' />
      </IconButton>
      <Menu
        open={props.open}
        anchorEl={menuAnchorEl.current}
        onClose={props.onClose}
      >
        {props.children}
      </Menu>
    </>
  )
}

export default MoreOptionsMenu
