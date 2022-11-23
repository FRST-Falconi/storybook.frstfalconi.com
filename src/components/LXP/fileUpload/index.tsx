import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './fileUploadStyles'
import { IFileUpload } from './FileUpload'
import { useState } from 'react'

export default function FileUpload({ variant, src, alt, disabled, startIcon, style, handleClick, selectedFile}: IFileUpload) {
    const [uploadFile, setUploadFile] = useState({})

    const handleFileSelected = (file) => {
        setUploadFile(file)
        selectedFile([selectedFile])
    }
    
    return (        
        <ThemeProvider theme={FRSTTheme}>
        { variant === 'landscape' ?            
            <Styles.LandscapeContainer   style={{...style}}  className={variant = 'landscape'} htmlFor={'fileSelector'}>
                 
                 <input type="file" id='fileSelector' accept='.jpg, .jpeg, .png' onChange={ (e) => handleFileSelected(e.target.files[0])}
                        />
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
            <Styles.PortraitContainer style={{...style}} className={variant = 'portrait'} htmlFor={'fileSelector'}>
                <input type="file" id='fileSelector' accept='.jpg, .jpeg, .png' onChange={ (e) => handleFileSelected(e.target.files[0])}
                        />
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
