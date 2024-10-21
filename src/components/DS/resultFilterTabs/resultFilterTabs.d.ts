export interface IResult {
    value_indicator: number | string
    expectation_date: string
    name: string
    editable?: boolean
    version: number
    hiddeVersionInName?: boolean
}

export interface ResultFilterTabsProps {
    results: Array<IResult>
    onTabChange?: (index: number) => void // Prop para manipulação externa
    onDelete?: () => void
    onEdit?: (payload: IResult) => void
    tabLimit?: number
}