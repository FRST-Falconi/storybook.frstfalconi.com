import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { AvatarContent, PlusButton, ImageAvatarContent, ImageContent } from './admButton.styles'
import { EmptyAvatar } from '@shared/icons'
import { IAdmButton } from './admButton'

export default function AdmButton({ variant, count, image, onClick }: IAdmButton) {
    return (
        <ThemeProvider theme={FRSTTheme}>
                <AvatarContent onClick={onClick} background={variant != 'count' ? '#E0E0E0' :
                    'rgba(68, 68, 68, 1)'}>
                    {variant == 'count' && <div style={{paddingRight: '6px'}}>+{count}</div>}
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
