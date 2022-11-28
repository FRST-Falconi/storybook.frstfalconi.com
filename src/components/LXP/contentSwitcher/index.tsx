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
          setIsClicked(true)
          handleClick
        }}
      >
        {!isClicked && !isActive ? (
          <Styles.ContentSwitcher>
            {startIcon}
            {label}
          </Styles.ContentSwitcher>
        ) : (
          <Styles.ContentSwitcherSelected sizeIcon={sizeIcon}>
            {startIconSelected}
            {label}
          </Styles.ContentSwitcherSelected>
        )}
      </Styles.Container>
    </ThemeProvider>
  )
}
