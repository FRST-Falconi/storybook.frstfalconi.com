import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './avatarChannelStyles'
import { IAvatar } from './avatarChannel'
import * as Icons from '../../shared/icons'

export default function AvatarChannel({ size, src, alt, className, disabled, onChange }: IAvatar) {
    //const defaultImg = 'https://i.gyazo.com/499dda909b1ebfe0375d1efa2d5d00a8.png'
    
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.AvatarChannel 
            size={size} 
            onClick={onChange} 
            className={className}
            disabled={disabled}
            >
                <Styles.AvatarImg
                    src={src || null}                    
                    size={size}
                    disabled={disabled}
                    onClick={onChange}                    
                />
                <Styles.AvatarCircle className='hide'>
                    <Styles.AvatarCam >
                        <Icons.Cam />
                    </Styles.AvatarCam> 
                </Styles.AvatarCircle>
            </Styles.AvatarChannel>
        </ThemeProvider>
    )
}
