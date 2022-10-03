import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './avatarChannelStyles'
import { IAvatar } from './avatarChannel'
import * as Icons from '../../../shared/icons'
import PopOver from '@components/LXP/popOver'
import { useState } from 'react'

export default function AvatarChannel({ size, channel, className, disabled, color, onChange, contentPopOver }: IAvatar) {

    const [actionArea, setActionArea] = useState(false);

    function ContentPopOver({content}) {
        return <div>{content ? content : 'Alterar avatar'}</div>
    }

    function onChangeViewPopOver(value) {
        setTimeout(() => setActionArea(value), 100);
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.ContainerGeral className='geral'>           
            <Styles.AvatarChannel
                size={size}
                onClick={onChange}
                className={className}
                disabled={disabled}
                color={color ? color : '#6a3f86'}
                onMouseOver={() => onChangeViewPopOver(true)}
                onMouseOut={() => onChangeViewPopOver(false)}
            >
                <PopOver
                    position={'top'}
                    align={'center'}
                    isOpen={actionArea}
                    clickOutside={() => {}}
                    padding={15}
                    contentPopOver = { <ContentPopOver content={contentPopOver}/> }
                    style={{marginLeft: '3px'}}
                >
                { actionArea ?   
                    <Styles.AvatarCircle>
                        <Styles.AvatarCam >
                            <Icons.Cam />
                        </Styles.AvatarCam>
                    </Styles.AvatarCircle>
                    :                 
                    <Styles.Channel>{channel}</Styles.Channel> 
                }
                </PopOver>
            </Styles.AvatarChannel>                
            </Styles.ContainerGeral>
        </ThemeProvider>
    )
}
