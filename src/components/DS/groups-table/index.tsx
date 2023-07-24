import React from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { Table, TableRow, TableContainer, TableHeader, TableChecked } from './groupTableStyles'
import { IGroupsTable } from './groupsTable'
import { CheckboxChecked, CheckboxEmpty, EditIcon, Trash } from '@shared/icons'
import AdmButton from '../admButton'

export default function GroupsTable(props: IGroupsTable) {
    const { textHeader, textHeader2, textHeader3, textHeader4, items, textTooltipAdd, textTooltipCount } = props
    return (
        <ThemeProvider theme={FRSTTheme}>
            <TableContainer>
                <Table>
                    <tr>
                        <TableHeader style={{textAlign:'start', paddingLeft:'48px'}}>{textHeader}</TableHeader>
                        <TableHeader>{textHeader2}</TableHeader>
                        <TableHeader style={{width:'180px'}}>{textHeader3}</TableHeader>
                        <TableHeader style={{width:'180px'}}>{textHeader4}</TableHeader>
                    </tr>
                    <tbody>
                        {items.map((i, index) => (
                            <TableRow>
                                <TableChecked>
                                    {i.checked ? <CheckboxChecked /> : <CheckboxEmpty />}
                                    <span>{i.group}</span>
                                </TableChecked>
                                <td>{
                                    i.adms.map(adm => {
                                    
                                    return <AdmButton variant={'count'} count={0} textTooltip={textTooltipCount}/>})
                                }
                                </td>
                                <td style={{width:2}}>
                                    <EditIcon fill="rgba(68, 68, 68, 1)" width="24" height="24" />
                                </td>
                                <td style={{padding:'18'}}>
                                    <Trash fill="rgba(68, 68, 68, 1)" width="24" height="24" />
                                </td>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    )
}
