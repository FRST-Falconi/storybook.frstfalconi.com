import React from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { Table, TableRow, TableContainer, TableHeader, TableChecked } from './groupTableStyles'
import { IGroupsTable } from './groupsTable'
import { CheckboxChecked, CheckboxEmpty, EditIcon, Trash } from '@shared/icons'

export default function GroupsTable(props: IGroupsTable) {
    const { textHeader, textHeader2, textHeader3, textHeader4, items } = props
    return (
        <ThemeProvider theme={FRSTTheme}>
            <TableContainer>
                <Table>
                    <tr>
                        <TableHeader>{textHeader}</TableHeader>
                        <TableHeader>{textHeader2}</TableHeader>
                        <TableHeader>{textHeader3}</TableHeader>
                        <TableHeader>{textHeader4}</TableHeader>
                    </tr>
                    <tbody>
                        {items.map((i, index) => (
                            <TableRow>
                                <TableChecked>
                                    {i.checked ? <CheckboxChecked /> : <CheckboxEmpty />}
                                    <span>{i.group}</span>
                                </TableChecked>
                                <td>Josiane</td>
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
