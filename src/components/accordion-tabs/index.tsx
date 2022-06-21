import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import { IAccordionTabs } from './accordionTabs'
import { TrashIcon, DropdownIcon } from '@shared/icons'

import { WrapperHeaderTabs, TitleAccordion, DropIcon,
    ContainerTitleTabs, ContainerCleanAction, TextClean,
    TitleTabWrapper, TextTitleTab, TextTotalTab, WrapperContent,
    TitleCurrentTabOpened } from './accordionTabsStyles'
import React,{ useLayoutEffect, useState } from 'react'

export default function AccordionTabs({ 
    titleAccordion, typeAccordion, typeButtonTab, titleTabs, 
    handleActiveTab, activeTabID, hasCleanButton, handleActionClean,
    textCleanButton, hasCounterTab, children, style }: IAccordionTabs) {

    useLayoutEffect(() => {
        const scrollContainer = document.getElementById("scrollTabsAccordion");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });
    }, []);
    
    const getCurrentTabOpened = () => {
        let nameTab = titleTabs.find((element: any) => element.id == activeTabID)

        if(nameTab && nameTab.description) return nameTab.description;
        else if(nameTab && nameTab.title) return nameTab.title;
    }

    const renderTitles = (item: any) => {
        let isOpened = item.id == activeTabID;

        let TabComponent = 
            <TitleTabWrapper typeButton={typeButtonTab} status={isOpened}  onClick={() => handleActiveTab(item.id)} key={item.id}>
                <TextTitleTab> { item.title } </TextTitleTab>
                { hasCounterTab && item.totalCounter > 0 &&
                 <TextTotalTab> ({item.totalCounter}) </TextTotalTab> }
                <DropIcon status={isOpened}>
                    <DropdownIcon fill={FRSTTheme['colors'].linkOnfocus}/> 
                </DropIcon>
            </TitleTabWrapper>
        
        return TabComponent;
    }
    
    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{ width:'100%', ...style}}>
                { titleAccordion && <TitleAccordion> { titleAccordion } </TitleAccordion> }
                
                { typeAccordion == 'horizontal' ? (
                    <WrapperHeaderTabs>
                        <ContainerTitleTabs id="scrollTabsAccordion">
                            { titleTabs.map(renderTitles) }
                        </ContainerTitleTabs>
                        
                        { hasCleanButton && 
                            <ContainerCleanAction onClick={() => handleActionClean('limpar') } >
                                <TrashIcon width='14px' height='17px'/>
                                <TextClean> { textCleanButton } </TextClean>
                            </ContainerCleanAction>  }
                    </WrapperHeaderTabs>
                ) : null }
            </div> 
            <WrapperContent status={activeTabID != '-1'}>
                <div style={{ width:'100%', ...style}}>
                    { getCurrentTabOpened() && <TitleCurrentTabOpened> { getCurrentTabOpened() } </TitleCurrentTabOpened>}
                    { children }
                </div>
            </WrapperContent>
        </ThemeProvider>
    )
}