import React, { useEffect, useMemo, useState } from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { Table, TableRow, TableContainer, TableHeader, TableChecked, ContainerSelected, TableAdm } from './groupTableStyles'
import { IGroupsTable } from './groupsTable'
import { EditIcon, Trash } from '@shared/icons'
import AdmButton from '../admButton'
import Checkbox from '@components/form-elements/checkbox'

const TdTrashButton = ({ onClick }) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<td
			onClick={onClick}
			style={{ cursor: 'pointer' }}
			onMouseLeave={() => setIsHover(false)}
			onMouseEnter={() => setIsHover(true)}
		>
			<Trash width="24" height="24" fill={isHover ? 'rgba(165, 0, 0, 1)' : 'rgba(68, 68, 68, 1) '} />
		</td>
	)
}

const TdEditButtom = ({ onClick }) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<td
			onClick={onClick}
			style={{ width: 2, cursor: 'pointer' }}
			onMouseLeave={() => setIsHover(false)}
			onMouseEnter={() => setIsHover(true)}
		>
			<EditIcon width="24" height="24" fill={isHover ? 'rgba(6, 69, 173, 1)' : 'rgba(68, 68, 68, 1) '} />
		</td>
	)
}

export default function GroupsTable(props: IGroupsTable) {
	const {
		textHeader,
		textHeader2,
		textHeader3,
		textHeader4,
		items,
		selected,
		textTooltipAdd,
		textTooltipCount,
		deleted,
		onDeleteClick,
		onEditClick,
		onDeleteAllSelected,
		AdmMoreClick,
		onShowMoreClick
	} = props

	const [isAllChecked, setIsAllChecked] = useState(false)
	const [internalItems, setInternalItems] = useState([])

	function handleToggleSelectAll() {
		const value = !isAllChecked
		setIsAllChecked(value)
		setInternalItems(prev => {
			return prev.map(i => ({ ...i, checked: value }))
		})
	}

	function handleToggleSelectRow(index: number) {
		setInternalItems(prev => {
			const newData = [...prev]
			newData[index].checked = !newData[index].checked
			return newData
		})
		setIsAllChecked(false)
	}

	function handleDeleteAllSelected() {
		onDeleteAllSelected(internalItems.filter(i => i.checked).map(i => i.id))
	}

	useEffect(() => {
		setInternalItems(items.map(i => ({ ...i, checked: false })))
	}, [items])

	const selectedItems = useMemo(() => {
		return internalItems.filter(i => i.checked).length
	}, [internalItems])

	const maxAdmToShow = 3

	return (
		<ThemeProvider theme={FRSTTheme}>
			<ContainerSelected> <div>{selected} {selectedItems}</div>
				{selectedItems > 1 && <span onClick={handleDeleteAllSelected}><Trash fill='rgba(165, 0, 0, 1)' />{deleted}</span>}
			</ContainerSelected>
			<TableContainer>
				<Table>
					<tr>
						<TableHeader style={{ textAlign: 'start', paddingLeft: '18px', display: 'flex', alignItems: 'center' }}>
							<Checkbox isChecked={isAllChecked} label='' handleCheck={handleToggleSelectAll} color='rgba(67, 159, 159, 1)' />
							<span>{textHeader}</span>
						</TableHeader>
						<TableHeader>{textHeader2}</TableHeader>
						<TableHeader style={{ width: '180px' }}>{textHeader3}</TableHeader>
						<TableHeader style={{ width: '180px' }}>{textHeader4}</TableHeader>
					</tr>
					<tbody>
						{internalItems.map((i, index) => (
							<TableRow key={index}>
								<TableChecked>
									<Checkbox label={i.group} handleCheck={() => handleToggleSelectRow(index)} isChecked={i.checked} />
								</TableChecked>
								<TableAdm>
									<div>
										<AdmButton variant={'add'} onClick={() => AdmMoreClick(i.id)} textTooltip={textTooltipAdd} />
										{i.adms.length > maxAdmToShow && <AdmButton onClick={() => onShowMoreClick(i.id)} variant={'count'} count={i.adms.length - maxAdmToShow} textTooltip={textTooltipCount} />}

										{i.adms.filter((a, aIndex) => aIndex < maxAdmToShow).map((adm) => {
											return <AdmButton key={adm.id} image={adm.image} variant={'image'} textTooltip={adm.name} />
										})}
									</div>
								</TableAdm>
								<TdEditButtom onClick={() => onEditClick(i.id)} />
								<TdTrashButton onClick={() => onDeleteClick(i.id, index)} />
							</TableRow>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	)
}
