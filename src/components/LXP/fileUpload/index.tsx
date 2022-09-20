import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './fileUploadStyles'
import { IFileUpload } from './FileUpload'

export default function FileUpload({ variant, src, alt, disabled, startIcon, style, handleClick }: IFileUpload) {
    
    return (        
        <ThemeProvider theme={FRSTTheme}>
        { variant === 'landscape' ?            
            <Styles.LandscapeContainer   style={{...style}}  className={variant = 'landscape'} disabled={disabled} onClick={handleClick}>
                <Styles.ImgLandscape
                    src={src }
                    alt={alt }
                />
                <Styles.UploadCam className='oculto'>{startIcon}</Styles.UploadCam>
                <Styles.TextFileUpload>
                    <p>Clique para</p>
                    <p>adicionar imagem</p>
                </Styles.TextFileUpload>
            </Styles.LandscapeContainer>
        : variant === 'portrait' ?
            <Styles.PortraitContainer style={{...style}} className={variant = 'portrait'} disabled={disabled} onClick={handleClick}>
                <Styles.ImgPortrait
                    src={src}
                    alt={alt}                    
                />
                <Styles.UploadCam className='oculto'>{startIcon}</Styles.UploadCam>
                <Styles.TextFileUpload>
                    <p>Clique para</p>
                    <p>adicionar imagem</p>
                </Styles.TextFileUpload>
            </Styles.PortraitContainer>
        : null
        }                  
        </ThemeProvider>            
    )
}
