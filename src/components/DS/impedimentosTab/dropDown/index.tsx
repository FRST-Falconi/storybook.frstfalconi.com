import { Popover } from '@mui/material'
import {
    ContainerDropdown,
    DropdownRow
} from './styles'
import { TabInfo } from '../impedimentosTab'

interface DropdownProps {
    isOpen: boolean
    onClose: () => void
    anchor: HTMLDivElement | null
    impedimentoList: Array<TabInfo>
    maxTabs: number
    onClickImpedimento: (impedimento: TabInfo) => void
}

export default function Dropdown({
    isOpen,
    anchor,
    onClose,
    impedimentoList,
    onClickImpedimento
}: DropdownProps) {

    const render = () => {
        return (
            impedimentoList.map((item, index) => {
                return (
                    <DropdownRow onClick={() => onClickImpedimento(item)} key={index}>
                        <p>{item.title}</p>
                    </DropdownRow>
                )
            })
        )
    }

    return (
        <Popover
            open={isOpen}
            onClose={onClose}
            anchorEl={anchor}
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
            }}
            transformOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
        >
            <ContainerDropdown>
                {render()}
            </ContainerDropdown>
        </Popover>
    )
}