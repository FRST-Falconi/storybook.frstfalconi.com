import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { AvatarContent, PlusButton, ImageAvatarContent, ImageContent } from './admButton.styles'
import { EmptyAvatar } from '@shared/icons'
import { IAdmButton } from './admButton'
import { useMemo } from 'react'

export default function AdmButton({ variant, count, image, onClick }: IAdmButton) {

    const backgroudVariant = useMemo(() =>{
        if (variant === 'count' || variant === 'countMore') return'rgba(68, 68, 68, 1)'
        return '#E0E0E0'
        
    }, [variant] )

    return (
        <ThemeProvider theme={FRSTTheme}>
                <AvatarContent onClick={onClick} background={backgroudVariant}>
                    {variant == 'count' && <div style={{paddingRight: '6px'}}>+{count}</div>}
                    {variant == 'countMore' && <div style={{paddingRight: '6px'}}>{count}+</div>}
                    {variant == 'add' && (
                        <>
                            <ImageAvatarContent>
                                <EmptyAvatar />
                            </ImageAvatarContent>

                            <PlusButton>+</PlusButton>
                        </>
                        
                    )} {variant == 'image' && (
                        <>{image ? <ImageContent><img src={image} alt="" /></ImageContent> : <ImageAvatarContent><EmptyAvatar/></ImageAvatarContent>}
                            
                                
                            
                        </>
                    )}

                </AvatarContent>
        </ThemeProvider>
    )
}
