export interface ImpedimentosTabProps {
    maxTabs: number
    tabsList: Array<TabInfo>
    onSaveNewImpedimento: (impedimento: string) => void
    onSelectedTab: (selectedTab: TabInfo) => void
}

export interface TabInfo {
    id: string
    avatar: string
    description: string
    title: string
    isGoalOwner?: boolean
}