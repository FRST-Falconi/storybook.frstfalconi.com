import React, { useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './itemMenuGlobalStyles'
import { IItemMenuGlobal } from './itemMenuGlobal'

import { FRSTLogo } from '@shared/icons'

export default function ItemGlobalMenu({
  variant,
  type,
  label,
  handleOnClick,
  wrapText,
  pressed,
  style,
  icon,
  customMenu
}: IItemMenuGlobal) {
  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.Wrapper
        variant={variant}
        pressed={pressed}
        typeItem={type}
        wrapText={wrapText}
        style={{ ...style }}
        onClick={handleOnClick}
      >
        <span style={{ marginRight: customMenu ? 10 : 0 }}>{icon}</span>
        <span style={{ marginTop: customMenu ? -8 : 0 }}>{label}</span>
      </Styles.Wrapper>
    </ThemeProvider>
  )
}
