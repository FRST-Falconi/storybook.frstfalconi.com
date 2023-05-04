import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState } from 'react'
import { Divider } from '@mui/material'

const options = [
  { label: 'Editar Plano de conteúdo', icon: null, type: 'edit', action: null },
  { label: 'Duplicar Plano de conteúdo', icon: null, type: 'duplicate', action: null },
  { label: 'Desativar Plano de conteúdo', icon: null, type: 'disable', action: null },
  { label: 'Excluir Plano de conteúdo', icon: 'edit icon', type: 'delete', action: null }
]

export default function CardMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
              width: '300px'
            }
          }}
        >
          {options.map((option, index) => (
            <>
              <MenuItem
                key={index}
                onClick={() => {
                  handleClose(), option?.action
                }}
                sx={{
                  color: option?.type === 'delete' ? '#923534' : '#000000'
                }}
              >
                {option?.icon} {option?.label}
              </MenuItem>
              <Divider />
            </>
          ))}
        </Menu>
      )}
    </div>
  )
}
