import { useEffect, useState, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import '../../shared/global.css'

import { MoreDotsVertical } from './../../shared/icons'

import { ButtonMore, MenuCustom, MenuItemCustom, TextOption, IconOption } from './menuMoreStyles'
import { IMenuMore } from './menuMore'
import { Box } from '@mui/material'

export default function MenuMore({
  iconButton,
  options,
  style,
  closeAfterClick,
  isHover = true,
  isArrowInMenu = true,
  isPaddingInMenu = true,
  isDarkMode = false
}: IMenuMore) {
  const [listOptions, setListOptions] = useState(options)

  useEffect(() => {
    setListOptions(options)
  }, [options])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ ...style }}>
        <ButtonMore
          id="basic-button"
          disableRipple={isHover ? false : true}
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          isHover={isHover}
        >
          {iconButton ? iconButton : <MoreDotsVertical fill="#444" />}
        </ButtonMore>
        {listOptions && listOptions?.length > 0 && (
          <MenuCustom
            id="basic-menu"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            isArrowInMenu={isArrowInMenu}
            isPaddingInMenu={isPaddingInMenu}
            isDarkMode={isDarkMode}
          >
            {listOptions.map((itemOption, index) => {
              return (
                <Box key={index}>
                  <MenuItemCustom
                    isPaddingInMenu={isPaddingInMenu}
                    isDarkMode={isDarkMode}
                    onClick={() => {
                      itemOption?.onClick()
                      closeAfterClick && handleClose()
                    }}
                    style={{
                      borderBottom:
                        listOptions?.length - 1 == index ? '' : isDarkMode ? '1px solid #525252' : '1px solid #EBEBEB',
                      color: itemOption?.color ? itemOption?.color : '#222',
                      pointerEvents: itemOption?.disabled ? 'none' : 'auto',
                      cursor: itemOption?.disabled ? 'default' : 'pointer'
                    }}
                    disableRipple
                  >
                    {itemOption?.startIcon && <IconOption>{itemOption?.startIcon}</IconOption>}
                    <TextOption style={!itemOption?.startIcon ? { marginLeft: '0px' } : {}}>
                      {itemOption?.description}
                    </TextOption>
                  </MenuItemCustom>
                </Box>
              )
            })}
          </MenuCustom>
        )}
      </div>
    </ThemeProvider>
  )
}
