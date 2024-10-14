import { Popover } from '@mui/material'
import {
    ContainerDropdown,
    DropdownRow
} from './styles'
import { IResult } from '../resultFilterTabs'

interface DropdownProps {
    isOpen: boolean
    onClose: () => void
    anchor?: HTMLDivElement | null
    ResultList: Array<IResult>
    maxTabs: number
    onClickResultList: (result: IResult) => void
}

export default function DropdownResult({
    isOpen,
    anchor,
    onClose,
    ResultList,
    onClickResultList
}: DropdownProps) {

    const render = () => {
        return (
            ResultList.map((item, index) => {
                return (
                    <DropdownRow onClick={() => onClickResultList(item)} key={index}>
                        <p>{item.name} {item.version}</p>
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