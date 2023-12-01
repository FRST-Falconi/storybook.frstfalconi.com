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
                    {variant == 'count' && <div id='count' style={{paddingRight: '6px'}}>+{count}</div>}
                    {variant == 'countMore' && <div id='count-more' style={{paddingRight: '6px'}}>{count}+</div>}
                    {variant == 'add' && (
                        <>
                            <ImageAvatarContent id='add-people'>
                                <EmptyAvatar />
                            </ImageAvatarContent>

                            <PlusButton>+</PlusButton>
                        </>
                        
                    )} {variant == 'image' && (
                        <>{image ? <ImageContent id='avatar-image'><img src={image} alt="" /></ImageContent> : <ImageAvatarContent  id='avatar-empty'><EmptyAvatar/></ImageAvatarContent>}
                            
                                
                            
                        </>
                    )}

                </AvatarContent>
        </ThemeProvider>
    )
}
