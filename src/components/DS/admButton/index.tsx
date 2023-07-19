import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { AvatarContent, PlusButton, ImageAvatarContent } from './admButton.styles'
import { EmptyAvatar } from '@shared/icons'
import Tooltip from '@components/DS/tooltip'
import { IAdmButton } from './admButton'

export default function AdmButton({ variant, count, textTooltip }: IAdmButton) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Tooltip
                trigger={'hover'}
                content={textTooltip}
                direction={'bottom'}
                style={{
                    fontFamily: 'PT Sans',
                    fontWeight: 400,
                    color: 'rgba(117, 117, 117, 1)'
                }}
            >
                <AvatarContent background={variant == 'add' ? '#E0E0E0' :
                    'rgba(68, 68, 68, 1)'}>
                    {variant == 'count' && <div>+{count}</div>}
                    {variant == 'add' && (
                        <>
                            <ImageAvatarContent>
                                <EmptyAvatar />
                            </ImageAvatarContent>

                            <PlusButton>+</PlusButton>
                        </>
                    )}
                </AvatarContent>
            </Tooltip>
        </ThemeProvider>
    )
}
