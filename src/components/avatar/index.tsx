import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './avatarStyles'
import { IAvatar } from './avatar'

export default function Avatar({ size, src, alt, className, disabled, onClick, isActiveClick, id, style }: IAvatar) {
  const defaultImg = 'https://i.gyazo.com/499dda909b1ebfe0375d1efa2d5d00a8.png'
  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.AvatarWrapper size={size} className={className} onClick={onClick} isActiveClick={isActiveClick} id={id} style={style}>
        <Styles.AvatarImg src={src || defaultImg} alt={alt} size={size} disabled={disabled} />
      </Styles.AvatarWrapper>
    </ThemeProvider>
  )
}
