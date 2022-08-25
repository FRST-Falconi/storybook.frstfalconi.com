import React from "react"

declare type enumTypeAccordion = 'horizontal' | 'vertical';
declare type enumtypeTab = 'transparent' | 'filled';

export interface IAccordionTabs {
    titleAccordion?: string,
    typeAccordion?: enumTypeAccordion,
    typeButtonTab?: enumtypeTab,
    titleTabs?: any,
    activeTabID?: string,
    handleActiveTab?: (e) => void,
    hasCleanButton?: boolean,
    hasCounterTab?: boolean,    
    textCleanButton?: string,
    handleActionClean?: (e) => void,
    children?: any,
    style?: any
}
