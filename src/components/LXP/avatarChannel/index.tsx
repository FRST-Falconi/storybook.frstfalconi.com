import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './avatarChannelStyles'
import { IAvatar } from './avatarChannel'
import * as Icons from '../../../shared/icons'
import PopOver from '@components/LXP/popOver'

export default function AvatarChannel({ size, channel, className, disabled, color, src, onChange }: IAvatar) {

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.ContainerGeral className='geral'>           
            <Styles.AvatarChannel
                size={size}
                onClick={onChange}
                className={className}
                disabled={disabled}
                src={src}
                color={color ? color : '#6a3f86'}
            >
               {
                  !src  && 
                    <Styles.Channel>{channel}</Styles.Channel> 
               } 
                
                
                <Styles.AvatarCircle className='hide'>
                    <Styles.AvatarCam >
                        <Icons.Cam />
                    </Styles.AvatarCam>                    
                </Styles.AvatarCircle>
            </Styles.AvatarChannel>
                <Styles.ContainerPopOver className='popOver'>
                    <PopOver
                        children={'Alterar avatar'}
                        variant={'lowLeft'}
                    />
                </Styles.ContainerPopOver>                   
            </Styles.ContainerGeral>
        </ThemeProvider>
    )
}
