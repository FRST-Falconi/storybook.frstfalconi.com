import React, { useEffect, useMemo, useState } from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import {
	Table,
	TableRow,
	TableContainer,
	TableHeader,
	TableChecked,
	ContainerSelected,
	TableAdm
} from './groupTableStyles'
import { IGroupsTable } from './groupsTable'
import { EditIcon, Trash, TrashDelete } from '@shared/icons'
import AdmButton from '../admButton'
import Checkbox from '@components/form-elements/checkbox'
import Tooltip from '../tooltip'

const TdTrashButton = ({ onClick }) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<div
			onClick={onClick}
			style={{ cursor: 'pointer' }}
			onMouseLeave={() => setIsHover(false)}
			onMouseEnter={() => setIsHover(true)}
		>
			<TrashDelete width="24px" height="24px" fill={isHover ? 'rgba(165, 0, 0, 1)' : 'rgba(68, 68, 68, 1) '} />
		</div>
	)
}

const TdEditButtom = ({ onClick }) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<div
			onClick={onClick}
			style={{ cursor: 'pointer' }}
			onMouseLeave={() => setIsHover(false)}
			onMouseEnter={() => setIsHover(true)}
		>
			<EditIcon width="18px" height="18px" fill={isHover ? 'rgba(6, 69, 173, 1)' : 'rgba(68, 68, 68, 1) '} />
		</div>
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
		onShowMoreClick,
		textTooltipAllSelected,
		onSelected
	} = props

	const [isAllChecked, setIsAllChecked] = useState(false)
	const [internalItems, setInternalItems] = useState([])

	useEffect(() => {
		onSelected(internalItems.filter((i) => i.checked))
	}, [internalItems])

	function handleToggleSelectAll() {
		const value = !isAllChecked
		setIsAllChecked(value)
		setInternalItems((prev) => {
			return prev.map((i) => ({ ...i, checked: value }))
		})
	}

	function handleToggleSelectRow(index: number) {
		setInternalItems((prev) => {
			const newData = [...prev]
			newData[index].checked = !newData[index].checked
			return newData
		})
		setIsAllChecked(false)
	}

	function handleDeleteAllSelected() {
		onDeleteAllSelected(internalItems.filter((i) => i.checked).map((i) => i.id))
	}

	useEffect(() => {
		setInternalItems(items.map((i) => ({ ...i, checked: false })))
	}, [items])

	const selectedItems = useMemo(() => {
		return internalItems.filter((i) => i.checked).length
	}, [internalItems])

	const maxAdmToShow = 3

	return (
		<ThemeProvider theme={FRSTTheme}>
			<ContainerSelected>
				{' '}
				<div>
					{selected} {selectedItems}
				</div>
				{selectedItems > 1 && (
					<span onClick={handleDeleteAllSelected} style={{ cursor: 'pointer' }}>
						<Trash fill="rgba(165, 0, 0, 1)" />
						{deleted}
					</span>
				)}
			</ContainerSelected>
			<TableContainer>
				<Table>
					<tr>
						<TableHeader style={{ textAlign: 'start', paddingLeft: '18px', display: 'flex', alignItems: 'center' }}>
							<Tooltip
								style={{
									width: '116px',
									height: '31px',
									top: '8px',
									left: '8px',
									display: 'flex',
									justifyContent: 'center',
									boxShadow:' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
								}}
								direction={'bottom'}
								content={textTooltipAllSelected}
								delay={500}
							>
								<Checkbox
									isChecked={isAllChecked}
									label=""
									handleCheck={handleToggleSelectAll}
									color="rgba(67, 159, 159, 1)"
								/>
							</Tooltip>
							<span>{textHeader}</span>
						</TableHeader>
						<TableHeader></TableHeader>
						<TableHeader style={{ width: '180px' }}>{textHeader2}</TableHeader>
						<TableHeader style={{ paddingRight: '52px', paddingLeft: '44px', width: '220px' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: '44px' }}>
								<div>{textHeader3}</div>
								<div >{textHeader4}</div>
							</div>
						</TableHeader>
					</tr>
					<tbody>
						{internalItems.map((i, index) => (
							<TableRow key={index}>
								<TableChecked>
									<Checkbox label={i.group} handleCheck={() => handleToggleSelectRow(index)} isChecked={i.checked} />
								</TableChecked>
								<td></td>
								<TableAdm>
									<div>
										<Tooltip
											content={textTooltipAdd}
											delay={500}
											direction={'bottom'}
											style={{
												fontFamily: 'PT Sans',
												fontWeight: 400,
												fontSize: '14px',
												color: 'rgba(117, 117, 117, 1)',
												width: '73px',
												height: '31px',
												top: '8px',
												left: '4px',
												display: 'flex',
												justifyContent: 'center',
												boxShadow:' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
											}}
										>
											<AdmButton variant={'add'} onClick={() => AdmMoreClick(i.id)} />
										</Tooltip>

										{i.adms.length > maxAdmToShow && (
											<Tooltip
												content={textTooltipCount}
												delay={500}
												direction={'bottom'}
												style={{
													fontFamily: 'PT Sans',
													fontWeight: 400,
													fontSize: '14px',
													color: 'rgba(117, 117, 117, 1)',
													width: '73px',
													height: '31px',
													top: '8px',
													left: '4px',
													boxShadow:' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
												}}
											>
												<AdmButton
													onClick={() => onShowMoreClick(i.id)}
													variant={'count'}
													count={i.adms.length - maxAdmToShow}
												/>
											</Tooltip>


										)}

										{i.adms
											.filter((a, aIndex) => aIndex < maxAdmToShow)
											.map((adm) => {
												return <Tooltip
													content={adm.name}
													direction={'bottom'}
													delay={500}
													style={{
														fontFamily: 'PT Sans',
														fontWeight: 400,
														fontSize: '14px',
														color: 'rgba(117, 117, 117, 1)',
														width: 'fit-content',
														height: '31px',
														top: '8px',
														left: '4px',
														whiteSpace: 'nowrap',
														boxShadow:' 0px 0px 18px 0px rgba(34, 34, 34, 0.2)'
													}}
												>
													<AdmButton key={adm.id} image={adm.image} variant={'image'} />
												</Tooltip>
											})}
									</div>
								</TableAdm>
								<td>
									<div style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: '64px',paddingLeft: '54px'}}>
										<TdEditButtom onClick={() => onEditClick(i.id)} />
										<TdTrashButton onClick={() => onDeleteClick(i.id, index)} />
									</div>
								</td>
							</TableRow>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	)
}
