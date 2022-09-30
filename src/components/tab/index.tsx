import React, { useEffect, useState } from 'react'
import {
  IButtonGroup
} from './index.d'
import { ThemeProvider } from 'styled-components'
import ButtonGroup from '@components/EBR/buttons-group'

import { ButtonGroupWrapper, TabItemPrimary, WrapperTabPrimary } from './styles'

import Button from '../buttons'

export default function Tab({
  tabs,
  active,
  variant,
  style
}: IButtonGroup) {
  const [ activeItem, setActiveItem ] = useState(active)

  useEffect(() => {
    setActiveItem(active)
  }, [active])

  return (
    <ButtonGroupWrapper className="buttons-group">
      { variant == 'secondary' ?
        <ButtonGroup active={activeItem}>
          { tabs && tabs.length > 0 && tabs.map((tabItem, index) => {
            return <Button 
                  key={index}
                    active={ activeItem}
                    variant='primary'
                    value={tabItem?.value} 
                    label={tabItem?.label} 
                    disabled={tabItem.disabled} 
                    handleClick={ () => tabItem.handleClick(tabItem.value) }
                  />
          })}
        </ButtonGroup> 
        : 
        <WrapperTabPrimary style={{...style}}>
          { tabs && tabs.length > 0 && tabs.map((tabItem, index) => {
            return <TabItemPrimary 
                    key={index}
                    active={ tabItem?.value == activeItem}
                    onClick={ () => tabItem.handleClick(tabItem.value) }
                  >
                    {tabItem?.label}
                  </TabItemPrimary>
          })}
        </WrapperTabPrimary>
        }
    </ButtonGroupWrapper>
  )
}