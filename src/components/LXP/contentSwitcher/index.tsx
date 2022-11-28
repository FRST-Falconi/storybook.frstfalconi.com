import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './contentSwitcherStyle'
import { IcontentSwitcher } from './contentSwitcher'
import { useState } from 'react'
import * as Icons from '@shared/icons'

export default function ContentSwitcher({
  label,
  handleClick,
  style,
  sizeIcon,
  startIcon,
  startIconSelected,
  isActive
}: IcontentSwitcher) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.Container
        sizeIcon={sizeIcon}
        style={{ ...style }}
        onClick={() => {
          !isClicked ? setIsClicked(true) : setIsClicked(false)
        }}
      >
        {!isClicked && !isActive ? (
          <Styles.ContentSwitcher onClick={handleClick}>
            {startIcon}
            {label}
          </Styles.ContentSwitcher>
        ) : (
          <Styles.ContentSwitcherSelected sizeIcon={sizeIcon} onClick={handleClick}>
            {startIconSelected}
            {label}
          </Styles.ContentSwitcherSelected>
        )}
      </Styles.Container>
    </ThemeProvider>
  )
}
