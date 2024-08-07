import { useEffect, useState, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import '../../shared/global.css'

import { MoreDotsVertical } from './../../shared/icons'

import { ButtonMore, MenuCustom, MenuItemCustom, TextOption, IconOption, ButtonMenuNotification } from './menuMoreStyles'
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
  isDarkMode = false,
  isContainerOptions
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
                  <ButtonMenuNotification onClick={() => {
                      itemOption?.onClick()
                      closeAfterClick && handleClose()
                    }}
                    isColor={itemOption?.color}
                    isDarkMode={isDarkMode}
                    disabled={itemOption.disabled}
                    isContainerOptions={isContainerOptions}
                  >
                    {itemOption?.startIcon && <IconOption>{itemOption?.startIcon}</IconOption>}
                    {itemOption?.description}
                  </ButtonMenuNotification>
                  {/* <MenuItemCustom
                    isPaddingInMenu={isPaddingInMenu}
                    isDarkMode={isDarkMode}
                    onClick={() => {
                      itemOption?.onClick()
                      closeAfterClick && handleClose()
                    }}
                    style={{
                      borderBottom:
                        listOptions?.length - 1 == index ? '' : isDarkMode ? '1px solid #525252 !important' : '1px solid #EBEBEB !important',
                      color: itemOption?.color ? itemOption?.color : '#222 !important',
                      pointerEvents: itemOption?.disabled ? 'none' : 'auto',
                      cursor: itemOption?.disabled ? 'default !important' : 'pointer !important'
                    }}
                    disableRipple
                  >
                    {itemOption?.startIcon && <IconOption>{itemOption?.startIcon}</IconOption>}
                    <TextOption style={!itemOption?.startIcon ? { marginLeft: '0px !important' } : {}}>
                      {itemOption?.description}
                    </TextOption>
                  </MenuItemCustom> */}
                </Box>
              )
            })}
          </MenuCustom>
        )}
      </div>
    </ThemeProvider>
  )
}
