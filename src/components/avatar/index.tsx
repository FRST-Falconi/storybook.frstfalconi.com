import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './avatarStyles'
import { IAvatar } from './avatar'
import { useEffect, useState } from 'react'

export default function Avatar({ size, src, alt, className, disabled, onClick, isActiveClick, id, style }: IAvatar) {
  const [isImage, setIsImage] = useState(false)

  const defaultImg = 'https://cdn-images.frstfalconi.cloud/Avatar_default.png'

  useEffect(() => {
    setIsImage(!!src);
  }, [src]);

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.AvatarWrapper size={size} className={className} onClick={onClick} isActiveClick={isActiveClick} id={id} style={style}>
        <Styles.AvatarImg src={isImage ? src : defaultImg} size={size} disabled={disabled}/>
      </Styles.AvatarWrapper>
    </ThemeProvider>
  )
}