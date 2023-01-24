import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './contentSwitcherStyle'
import { IcontentSwitcher } from './contentSwitcher'

export default function ContentSwitcher({
  label,
  handleClick,
  style,
  sizeIcon,
  startIcon,
  startIconSelected,
  isActive,
  idButtonSwitcher
}: IcontentSwitcher) {
  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{backgroundColor: 'white', height: 400, padding: 60}}>
      <Styles.Container sizeIcon={sizeIcon} style={{ ...style }}>
        {!isActive ? (
          <Styles.ContentSwitcher onClick={handleClick} id={idButtonSwitcher}>
            {startIcon}
            {label}
          </Styles.ContentSwitcher>
        ) : (
          <Styles.ContentSwitcherSelected sizeIcon={sizeIcon} onClick={handleClick} id={idButtonSwitcher}>
            {startIconSelected}
            {label}
          </Styles.ContentSwitcherSelected>
        )}
      </Styles.Container>
      </div>
    </ThemeProvider>
  )
}
