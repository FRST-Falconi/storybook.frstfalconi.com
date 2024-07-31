import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './avatarStyles'
import { IAvatar } from './avatar'
import { useEffect, useState } from 'react'

export default function Avatar({ size, src, alt, className, disabled, onClick, isActiveClick, id, style, border}: IAvatar) {

  const [isImage, setIsImage] = useState(!!src); 
  const defaultImg = 'https://cdn-images.frstfalconi.cloud/path582.svg';

  useEffect(() =>{
    setIsImage(!!src)
  }, [src])


  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.AvatarWrapper size={size} className={className} onClick={onClick} isActiveClick={isActiveClick} id={id} style={style}>
        {isImage ? ( 
          <Styles.AvatarImg border={border} src={src} size={size} disabled={disabled} onError={() => setIsImage(false)} /> 
        ) : (
          <Styles.AvatarImg border={border}  src={defaultImg} size={size} disabled={disabled} />
        )}
      </Styles.AvatarWrapper>
    </ThemeProvider>
  )
}