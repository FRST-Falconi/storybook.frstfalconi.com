import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { AvatarContent, PlusButton, ImageAvatarContent, ImageContent } from './admButton.styles'
import { EmptyAvatar } from '@shared/icons'
import Tooltip from '@components/DS/tooltip'
import { IAdmButton } from './admButton'

export default function AdmButton({ variant, count, textTooltip, image, onClick }: IAdmButton) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Tooltip
                delay={500}
                trigger={'hover'}
                content={textTooltip}
                direction={'bottom'}
                style={{
                    fontFamily: 'PT Sans',
                    fontWeight: 400,
                    color: 'rgba(117, 117, 117, 1)'
                }}
            >
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
            </Tooltip>
        </ThemeProvider>
    )
}
