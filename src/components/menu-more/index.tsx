import { useEffect, useState, MouseEvent } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import '../../shared/global.css'

import { 
    ButtonMore,
    MenuCustom,
    MenuItemCustom,
    TextOption,
    IconOption } from './menuMoreStyles'
import { IMenuMore } from './menuMore'


export default function MenuMore({iconButton, options, style}: IMenuMore) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [activeClick, setActiveClick] = useState([false, false])
    const open = Boolean(anchorEl)
    
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    
    return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{...style}}>
        <ButtonMore
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
            {iconButton}
        </ButtonMore>
        {options && options?.length > 0 && 
            <MenuCustom
                id="basic-menu"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            > 
                { options.map((itemOption, index)=> {
                    return <>
                        <MenuItemCustom 
                            key={index}
                            onClick={() =>  itemOption?.onClick()}
                            style={{borderBottom: ((options?.length -1) == index) ? '' : '1px solid #EBEBEB',
                                color: itemOption?.color ? itemOption?.color : '#222'
                            }}
                            disableRipple
                        >
                            <IconOption>{itemOption?.startIcon && itemOption.startIcon}</IconOption>
                            <TextOption>{itemOption?.description}</TextOption>
                        </MenuItemCustom>
                    </>
                  })
                }
            </MenuCustom>
        }
      </div>
      </ThemeProvider>
    )
}
  