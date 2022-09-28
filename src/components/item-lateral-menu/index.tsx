import React,{ useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './itemLateralMenuStyles'
import { IItemLateralMenu } from './itemLateralMenu'

export default function LateralMenu({ label, onClick, button, beginComponent, selected, subItems, style }: IItemLateralMenu) {
    const [isActive, setIsActive] = useState(selected);

    useEffect(() => {
        setIsActive(selected)
    }, [selected])

    return (
        <ThemeProvider theme={FRSTTheme}>
            { subItems && subItems.length > 0 ? 
            <></>
            :
                <Styles.WrapperItem onClick={(e) => onClick(e)} active={isActive} style={{...style}} >
                    { beginComponent && 
                        <Styles.WrapperComponent active={isActive}>
                            {beginComponent}
                        </Styles.WrapperComponent>
                    }
                    <Styles.WrapperMainLabel active={isActive} style={{marginLeft: beginComponent ? '8px': '0px'}}>
                        { label }
                    </Styles.WrapperMainLabel>
                    { button &&                        
                        <Styles.WrapperComponent active={isActive}>
                            {beginComponent}
                        </Styles.WrapperComponent>
                    }
                </Styles.WrapperItem>
            }
        </ThemeProvider>
    )
}


// label: string,
// onClick?: () => void,
// beginComponent?: any,
// selected?: boolean,
// subItems?: Array<typeSubItem>,
// style?: React.CSSProperties


// label: 'Label',
// onClick: () => alert('label'),
// beginComponent: <Icons.Noun/>,