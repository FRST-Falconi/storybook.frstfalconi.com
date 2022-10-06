import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './lateralMenuStyles'
import { ILateralMenu } from './lateralMenu'
import IItemLateralMenu from '@components/item-lateral-menu'

import Avatar from '@components/avatar'
import Button from '@components/buttons'

export default function LateralMenu({ variant, hiddenButtonHeader, avatar, name, channel, button, listOptions, style }: ILateralMenu) {
    return (
        <ThemeProvider theme={FRSTTheme}>
                <Styles.WrapperCard style={{...style}}>
                    <Styles.WrapperHeader>
                        <Avatar 
                            src={avatar.src}
                            alt={avatar.alt ? avatar.alt : 'Image profile avatar'}
                            size={avatar.size ? avatar.size : '80px'} 
                        />
                        <Styles.NameProfile>
                            {name}
                        </Styles.NameProfile>
                        { channel &&
                            <Styles.Channel>
                                {channel}
                            </Styles.Channel>
                        }
                        { !hiddenButtonHeader && 
                            <Styles.WrapperButton>
                                    { !channel ?
                                        <Button 
                                            variant='primary'
                                            label={button.label}
                                            handleClick={(e) => button.onClick(e)}
                                        /> 
                                        :
                                        <Button 
                                            variant='link'
                                            label={button.label}
                                            handleClick={(e) => button.onClick(e)}
                                        />
                                    }
                            </Styles.WrapperButton>
                        }

                        <Styles.HR/>

                    </Styles.WrapperHeader>
                    { listOptions && listOptions.length > 0 && listOptions.map((item, index) => {
                        return (
                        <IItemLateralMenu 
                            label={item.label}
                            button={item.button}
                            beginComponent={item.beginComponent}
                            activeBeginIcon={item.activeBeginIcon}
                            hiddenIconDropArrow={item.hiddenIconDropArrow}
                            onClick={(e) => item.onClick(e)}
                            selected={item.selected}
                            subItems={item.subItems}
                            style={{width: '100%'}}
                        />)
                    })}
                </Styles.WrapperCard>
        </ThemeProvider>
    )
}
