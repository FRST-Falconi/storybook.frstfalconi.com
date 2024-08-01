export interface ImpedimentosTabProps {
    maxTabs: number
    tabsList: Array<TabInfo>
    onSaveNewImpedimento: (impedimento: string) => void
}

export interface TabInfo {
    id: string
    avatar: string
    description: string
}