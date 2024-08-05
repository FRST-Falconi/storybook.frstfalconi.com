export interface ImpedimentosTabProps {
    maxTabs: number
    tabsList: Array<TabInfo>
    showOptions?: boolean
    onSaveNewImpedimento: (impedimento: string) => void
    onSelectedTab: (selectedTab: TabInfo) => void
    handlePriorize?: (impedimento: TabInfo) => void
    handleDelete?: (impedimento: TabInfo) => void
    handleEdit?: (updatedImpedimento: TabInfo) => void
}

export interface TabInfo {
    id: string
    avatar: string
    description: string
    title: string
    isGoalOwner?: boolean
}