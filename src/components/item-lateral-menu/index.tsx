import React,{ useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './itemLateralMenuStyles'
import { IItemLateralMenu } from './itemLateralMenu'
import Button from '@components/buttons'
import * as Icons from '@shared/icons'

export default function LateralMenu({ label, onClick, button, beginComponent, selected, subItems, style }: IItemLateralMenu) {
    const [isActive, setIsActive] = useState(selected);

    useEffect(() => {
        setIsActive(selected)
    }, [selected])

    return (
        <ThemeProvider theme={FRSTTheme}>
            { subItems && subItems.length > 0 ? 
                <Styles.WrapperCompound isOpen={isActive} style={{...style}}>
                    <Styles.WrapperItem active={isActive} onClick={(e) => setIsActive(!isActive)}
                    style={{...style, margin: 0, padding: 0, justifyContent: 'space-between'}} >
                        <Styles.WrapperItem style={{background: 'transparent', width: '100%'}}>
                            { beginComponent && 
                                <Styles.WrapperComponent active={isActive}>
                                    {beginComponent}
                                </Styles.WrapperComponent>
                            }
                            <Styles.WrapperMainLabel active={isActive} style={{marginLeft: beginComponent ? '8px': '0px'}}>
                                { label }
                            </Styles.WrapperMainLabel>
                        </Styles.WrapperItem>
                        { button && button?.label &&
                            <Styles.WrapperButton>
                                <Button 
                                    label={button.label}
                                    handleClick={(e) => button.onClick(e)}
                                    variant={button?.variant ? button.variant : 'primary'}
                                />
                            </Styles.WrapperButton>
                        }
                        <Styles.WrapperIconDrop isOpen={isActive}>
                            <Icons.DropdownIconLine fill={'#000'}/>
                        </Styles.WrapperIconDrop>
                    </Styles.WrapperItem>
                    <Styles.WrapperSubItems isOpen={isActive}>
                        {subItems.map((item, index) => {
                            return <Styles.SubItem key={index} onClick={() => item.onClick(item.id)}>
                                {item.label}
                            </Styles.SubItem>
                        })}
                    </Styles.WrapperSubItems>
                </Styles.WrapperCompound>
            :
                <Styles.WrapperItem active={isActive} style={{...style, margin: 0, padding: 0, justifyContent: 'space-between'}} >
                    <Styles.WrapperItem style={{background: 'transparent', width: '100%'}} onClick={(e) => onClick(e)}>
                        { beginComponent && 
                            <Styles.WrapperComponent active={isActive}>
                                {beginComponent}
                            </Styles.WrapperComponent>
                        }
                        <Styles.WrapperMainLabel active={isActive} style={{marginLeft: beginComponent ? '8px': '0px'}}>
                            { label }
                        </Styles.WrapperMainLabel>
                    </Styles.WrapperItem>
                    { button && button?.label &&
                        <Styles.WrapperButton>
                            <Button 
                                label={button.label}
                                handleClick={(e) => button.onClick(e)}
                                variant={button?.variant ? button.variant : 'primary'}
                            />
                        </Styles.WrapperButton>
                    }
                </Styles.WrapperItem>
            }
        </ThemeProvider>
    )
}
