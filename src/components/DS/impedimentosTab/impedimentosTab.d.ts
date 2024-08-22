export interface ImpedimentosTabProps {
    maxTabs: number
    tabsList: Array<TabInfo>
    showAddButton?: boolean
    onSaveNewImpedimento: (impedimento: string) => void
    onSelectedTab: (selectedTab: TabInfo) => void
    idSelectedTab?: string
    currentTab?: any
    handleClickAvatar?: () => void
}

export interface TabInfo {
    id: string
    avatar: string
    user_name: string
    description: string
    title: string
    isGoalOwner?: boolean
    showOptions?: boolean
    
    disabledPriorize?: boolean
    handlePriorize?: (impedimento: TabInfo) => void
    handleDelete?: (impedimento: TabInfo) => void
    handleEdit?: (updatedImpedimento: TabInfo) => void
}