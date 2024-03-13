import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './avatarStyles'
import { IAvatar } from './avatar'
import { useEffect, useState } from 'react'

export default function Avatar({ size, src, alt, className, disabled, onClick, isActiveClick, id, style }: IAvatar) {

  const [isImage, setIsImage] = useState(!!src); // Assume que a imagem está presente inicialmente
  const defaultImg = 'https://cdn-images.frstfalconi.cloud/path582.svg';

  useEffect(() =>{
    setIsImage(!!src)
  }, [src])


  return (
    <ThemeProvider theme={FRSTTheme}> {/* Certifique-se de ter definido FRSTTheme */}
      <Styles.AvatarWrapper size={size} className={className} onClick={onClick} isActiveClick={isActiveClick} id={id} style={style}>
        {isImage ? ( // Renderize a imagem apenas se houver uma URL válida
          <Styles.AvatarImg src={src} size={size} disabled={disabled} onError={() => setIsImage(false)} /> 
        ) : (
          <Styles.AvatarImg src={defaultImg} size={size} disabled={disabled} />
        )}
      </Styles.AvatarWrapper>
    </ThemeProvider>
  )
}