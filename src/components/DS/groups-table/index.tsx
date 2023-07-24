import React, { useState } from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import {
    Table,
    TableRow,
    TableContainer,
    TableHeader,
    TableChecked,
    ContainerSelected
} from './groupTableStyles'
import { IGroupsTable } from './groupsTable'
import { CheckboxChecked, CheckboxEmpty, EditIcon, Trash } from '@shared/icons'
import AdmButton from '../admButton'

const TdTrashButton =({onClick}) => {
    const [isHover, setIsHover] = useState(false)
    return (
        <td onClick={onClick} style={{cursor:'pointer'}} onMouseLeave={()=> setIsHover(false)} onMouseEnter={()=> setIsHover(true)} >
            <Trash width="24" height="24" fill={isHover ? 'rgba(165, 0, 0, 1)' : 'rgba(68, 68, 68, 1) '} />
        </td>
    )
}
export default function GroupsTable(props: IGroupsTable) {
    const { textHeader, textHeader2, textHeader3, textHeader4, items, selected, textTooltipAdd, textTooltipCount, onDeleteClick } = props
    return (
        <ThemeProvider theme={FRSTTheme}>
            <ContainerSelected>{selected}</ContainerSelected>
            <TableContainer>
                <Table>
                    <tr>
                        <TableHeader style={{ textAlign: 'start', paddingLeft: '48px' }}>{textHeader}</TableHeader>
                        <TableHeader>{textHeader2}</TableHeader>
                        <TableHeader style={{ width: '180px' }}>{textHeader3}</TableHeader>
                        <TableHeader style={{ width: '180px' }}>{textHeader4}</TableHeader>
                    </tr>
                    <tbody>
                        {items.map((i, index) => (
                            <TableRow>
                                <TableChecked>
                                    {i.checked ? <CheckboxChecked /> : <CheckboxEmpty />}
                                    <span>{i.group}</span>
                                </TableChecked>
                                <td>
                                    {i.adms.map((adm) => {
                                        return <AdmButton variant={'count'} count={0} textTooltip={textTooltipCount} />
                                    })}
                                </td>
                                <td style={{ width: 2, cursor: 'pointer' }}>
                                    <EditIcon fill="rgba(68, 68, 68, 1)" width="24" height="24" />
                                </td>
                            <TdTrashButton onClick={()=>onDeleteClick(i.id,index)}/>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    )
}
