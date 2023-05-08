import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
import { Divider } from '@mui/material'
import { TrashDelete } from '@shared/icons'
import * as Styles from './menuStyle'

export default function CardMenu({ id, menuOptions }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (option: any) => {
    setAnchorEl(null)
    option?.action(id, option)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ padding: '0px' }}
      >
        <MoreVertIcon />
      </IconButton>

      {open && (
        <>
          <Styles.MenuIconOpen />
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '300px',
                position: 'relative'
              }
            }}
            sx={{
              '& .MuiMenu-paper': {
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-20px',
                  right: '10px',
                  borderWidth: '10px',
                  borderStyle: 'solid',
                  borderColor: 'transparent transparent #fff transparent',
                  zIndex: '9999'
                }
              }
            }}
          >
            {menuOptions?.map((option, index) => (
              <>
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose(option)
                  }}
                  sx={{
                    color: option?.type === 'delete' ? '#923534' : '#000000',
                    '&:hover': {
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {option?.type === 'delete' ? <TrashDelete fill="#923534" width="30px" /> : option?.icon}{' '}
                  {option?.label}
                </MenuItem>
                <Divider />
              </>
            ))}
          </Menu>
        </>
      )}
    </div>
  )
}
