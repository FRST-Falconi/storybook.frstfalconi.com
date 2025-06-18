import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import { MultiSelect } from 'primereact/multiselect'
import { useEffect, useRef, useState, useCallback } from 'react'
import * as S from './styles/multiselectStyles'
import { CloseIcon, DropdownIcon, Trash } from '@shared/icons'
import SearchField from '@components/search-field'
import Avatar from '@components/avatar'
import { IconButton, Modal, Skeleton } from '@mui/material'
import './styles/primereact.css'
import './styles/stylesMulti.css'
// import './styles/primeflex.css'
// import './styles/theme.css'
import Tooltip, { TooltipV2 } from '../tooltip'
import Button from '@components/buttons'

interface IDropdownMultiselect {
    listItems?: ISelectedValue
    selectPlaceholder?: string
    searchSelectPlaceholder?: string
    people: string
    person: string
    maxSelectedShow?: number
    isModalOpen?: boolean
    isDisabled?: boolean
    removeItemsToolTip?: string
    modalTitle?: string
    removeModalText?: string
    btnSelectAllText?: string
    getSelectedItems?: (selectedItems) => void
    style?: React.CSSProperties
    optionLayout?: (options) => void
    selectedDefault?: ISelectedValue
    activeLazyLoad?: boolean
    onSearch?: (searchTerm) => void
    searchTerm?: string
    canShowAvatar?: boolean
    useTextFilter?: boolean
    hiddenAddAll?: boolean
    variantModeDescritpion?: boolean
    width?: string
    tagColor?: string
    darkMode?: boolean
}

type ISelectedValue = {
    id: string
    avatar: string
    name: string
    description: string
    subDescription?: string
    isVariant?: boolean
}[]

export default function DropdownMultiselect(props: IDropdownMultiselect) {
    const {
        canShowAvatar = true,
        useTextFilter = false,
        searchTerm,
        hiddenAddAll,
        variantModeDescritpion,
        width,
        listItems,
        selectedDefault,
        getSelectedItems,
        onSearch,
        tagColor,
        darkMode
    } = props
    
    const [selectedValues, setSelectedValues] = useState<ISelectedValue>([])
    const [textFilter, setTextFilter] = useState(searchTerm || '')
    const [listItemsFilter, setListItemsFilter] = useState<ISelectedValue>(listItems)
    const [showModal, setShowModal] = useState(false)
    const [listFilterSearch, setListFilterSearch] = useState<any>()
    const [lazyLoading, setLazyLoading] = useState(false)
    const [lazyItems, setLazyItems] = useState([])
    const loadLazyTimeout = useRef(null)

    // Atualiza a lista de itens quando props.listItems muda
    useEffect(() => {
        if (listItems) {
            setListItemsFilter(listItems)
            setListFilterSearch(listItems)
        }
    }, [listItems])

    // Atualiza o termo de busca quando searchTerm muda
    useEffect(() => {
        if (searchTerm !== undefined) {
            setTextFilter(searchTerm || '')
        }
    }, [searchTerm])

    // Filtra os itens quando useTextFilter está ativado
    useEffect(() => {
        if (!useTextFilter || !listItemsFilter) return

        const temp = listItemsFilter.filter((resp) => 
            resp.name.toLowerCase().includes(textFilter.toLowerCase())
        )
        setListFilterSearch(temp)
    }, [textFilter, listItemsFilter, useTextFilter])

    // Inicializa valores selecionados com selectedDefault
    useEffect(() => {
        if (selectedDefault) {
            setSelectedValues(selectedDefault)
        }
    }, [selectedDefault])

    // Notifica o componente pai sobre alterações nos valores selecionados
    // Envolvendo em um useCallback para evitar loops infinitos
    const notifySelectedItemsChange = useCallback(() => {
        if (getSelectedItems) {
            getSelectedItems(selectedValues)
        }
    }, [selectedValues])

    useEffect(() => {
        notifySelectedItemsChange()
    }, [selectedValues])

    const removeSelectedValue = (id) => {
        setSelectedValues((prev) => {
            const newValues = [...prev]
            const index = newValues.map((value) => value.id).indexOf(id)
            if (index !== -1) {
                newValues.splice(index, 1)
            }
            return newValues
        })
    }

    const handleSearchChange = (value) => {
        setTextFilter(value)
        if (onSearch) {
            onSearch(value)
        }
    }

    const itemTemplate = (item) => {
        const fullText = variantModeDescritpion
            ? `${item?.name} ${item?.description ? `- ${item.description}` : ''} ${
                  item?.subDescription ? `- ${item.subDescription}` : ''
              } ${!!item?.isVariant ? ' (Externo)' : ''}`
            : `${item?.name} ${item?.description ? `(${item?.description})` : ''}`

        return (
            <TooltipV2 style={{ maxWidth: '275px' }} content={fullText}>
                <S.selectItem id="select-items" width={width} darkMode={darkMode}>
                    {canShowAvatar &&
                        (item?.isVariant ? <ExternalAvatar /> : <Avatar src={item?.avatar} size="24px" />)}
                    <S.TextContainer>
                        {item?.name}
                        {variantModeDescritpion ? (
                            <>
                                {!!item?.description && ` - ${item.description}`}
                                {!!item?.subDescription && ` - ${item.subDescription}`}
                                {!!item?.isVariant && <span style={{ color: '#757575' }}>{` (Externo)`}</span>}
                            </>
                        ) : (
                            item?.description && <span style={{ color: '#757575' }}> ({item.description}) </span>
                        )}
                    </S.TextContainer>
                </S.selectItem>
            </TooltipV2>
        )
    }

    const selectTemplate = (option) => {
        if (!option || option.length === 0) return <></>

        const pessoasAMais = selectedValues?.length - props.maxSelectedShow
        
        return (
            <>
                {option.map((item, index) => {
                    if (index < props.maxSelectedShow) {
                        return props.optionLayout ? (
                            props.optionLayout(item)
                        ) : (
                            <S.SelectTag key={index} id="tag-container" isVariant={!!item?.isVariant} tagColor={tagColor}>
                                {canShowAvatar &&
                                    (item?.isVariant ? (
                                        externaAvatarBackgroundWhite
                                    ) : (
                                        <Avatar src={item?.avatar} size="24px" />
                                    ))}
                                <p> {item?.name} </p>
                                <IconButton id="close-icon" onClick={() => removeSelectedValue(item.id)}>
                                    <CloseIcon width="8" height="8" fill="#FFFFFF" />
                                </IconButton>
                            </S.SelectTag>
                        )
                    } else if (index === props?.maxSelectedShow) {
                        return (
                            <S.overShowInfo key={index} onClick={() => setShowModal(true)} id="number-people" darkMode={darkMode}>
                                <p>{`+ ${pessoasAMais} ${pessoasAMais > 1 ? props?.people : props?.person}`}</p>
                            </S.overShowInfo>
                        )
                    }
                    return null
                })}
            </>
        )
    }

    const handleSelectAll = () => {
        if (!listFilterSearch) return
        
        setSelectedValues((prev) => {
            const currentIds = new Set(prev.map(item => item.id))
            const newItems = listFilterSearch.filter(value => !currentIds.has(value.id))
            return [...prev, ...newItems]
        })
    }

    const handleTemplateHeader = () => {
        return (
            <S.searchAndButton>
                <div style={{ marginBottom: hiddenAddAll ? '0rem' : '1rem' }}>
                    <SearchField
                        placeholder={props.searchSelectPlaceholder ? props.searchSelectPlaceholder : 'Buscar'}
                        className={null}
                        handleClickButton={null}
                        isButton
                        hasSearchIcon={true}
                        value={textFilter}
                        onChange={(e: any) => handleSearchChange(e.target.value)}
                        darkMode={darkMode}
                    />
                </div>
                {listFilterSearch?.length > 0 && !hiddenAddAll ? (
                    <Button
                        id="select-all"
                        variant={'link'}
                        label={props.btnSelectAllText ? props.btnSelectAllText : 'Selecionar todos'}
                        disabled={false}
                        handleClick={handleSelectAll}
                        style={{color: darkMode && '#F26818'}}
                    />
                ) : (
                    <></>
                )}
            </S.searchAndButton>
        )
    }

    const selectValuesModal = () => {
        if (!selectedValues || !showModal) return null
        
        return (
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <S.modalContainer id="container-modal">
                    <S.modalHeader id="header-people">
                        <p>
                            {props.modalTitle ? props.modalTitle : 'Este grupo é administrado por'}{' '}
                            {selectedValues.length} {selectedValues.length > 1 ? props.people : props.person}{' '}
                        </p>
                    </S.modalHeader>
                    <S.modalContent>
                        {selectedValues.map((item, index) => {
                            return (
                                <S.modalCards style={{ background: index % 2 === 0 ? '#F2F2F2' : '#FFF' }} key={index}>
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        {canShowAvatar &&
                                            (item?.isVariant ? (
                                                <ExternalAvatar size="50px" />
                                            ) : (
                                                <Avatar src={item?.avatar} size="50px" />
                                            ))}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <S.cardTitle> {item?.name} </S.cardTitle>
                                            <S.cardDescription> {item?.description} </S.cardDescription>
                                            <S.cardDescription> {item?.subDescription} </S.cardDescription>
                                        </div>
                                    </div>
                                    <div
                                        id="remove-people-admin"
                                        style={{ display: 'flex', cursor: 'pointer' }}
                                        onClick={() => removeSelectedValue(item?.id)}
                                    >
                                        <Trash fill="#A50000" width="24" height="24" />
                                        <S.cardTitle style={{ color: '#A50000' }}>
                                            {props?.removeModalText ? props.removeModalText : 'Remover'}{' '}
                                        </S.cardTitle>
                                    </div>
                                </S.modalCards>
                            )
                        })}
                    </S.modalContent>
                    <S.closeModal>
                        <IconButton id="close-modal" onClick={() => setShowModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </S.closeModal>
                </S.modalContainer>
            </Modal>
        )
    }

    const onLazyLoad = (event) => {
        setLazyLoading(true)

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current)
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event
            const _lazyItems = [...lazyItems]

            for (let i = first; i < last; i++) {
                _lazyItems[i] = { label: `Item #${i}`, value: i }
            }

            setLazyItems(_lazyItems)
            setLazyLoading(false)
        }, Math.random() * 500 + 250)
    }

    const renderVirtualScrollerOptions = () => {
        if (!props.activeLazyLoad) return null

        return {
            lazy: true,
            onLazyLoad: onLazyLoad,
            itemSize: 50,
            showLoader: true,
            loading: lazyLoading,
            delay: 100,
            loadingTemplate: (option) => (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 2,
                        height: '50px'
                    }}
                >
                    <Skeleton width={option.even ? '70%' : '60%'} height={'2rem'} />
                </div>
            )
        }
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <S.containerSelect style={{ ...props.style }} id="container-select">
                {selectedValues?.length > 0 && (
                    <S.headerSelect darkMode={darkMode}>
                        {selectTemplate(selectedValues)}

                        {selectedValues?.length > 1 && (
                            <div style={{ position: 'absolute', right: 40 }} id="remove-all-selected">
                                <Tooltip
                                    content={props.removeItemsToolTip ? props.removeItemsToolTip : 'Excluir todos'}
                                    direction="bottom"
                                    trigger="hover"
                                    style={{ height: 'auto' }}
                                >
                                    <IconButton onClick={() => setSelectedValues([])}>
                                        <Trash fill={darkMode ? "#757575" : "#9C9C9C"} />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        )}
                    </S.headerSelect>
                )}
                <S.customSelect onClick={() => textFilter !== '' && setTextFilter('')} darkMode={darkMode}>
                    <MultiSelect
                        id="list-selected"
                        panelStyle={{
                            display: props.isModalOpen !== undefined ? (props.isModalOpen ? 'block' : 'none') : 'block',
                            background: darkMode ? '#323232' : '#fff'
                        }}
                        value={selectedValues}
                        options={listFilterSearch}
                        onChange={(e) => setSelectedValues(e.value)}
                        placeholder={props.selectPlaceholder ? props.selectPlaceholder : 'Selecione aqui'}
                        className="custom-multiselect"
                        panelClassName={darkMode ? 'custom-darkMode-dropdown' : 'custom-dropdown'}
                        dropdownIcon={<DropdownIcon fill={darkMode ? FRSTTheme['colors'].neutralsGrey3 : FRSTTheme['colors'].shadeBlack} />}
                        panelHeaderTemplate={handleTemplateHeader()}
                        itemTemplate={itemTemplate}
                        disabled={props.isDisabled}
                        maxSelectedLabels={0}
                        selectedItemsLabel=" "
                        style={{
                            border:
                                selectedValues?.length > 0 ? 'none' : `1px solid ${FRSTTheme['colors'].borderPrimary}`
                        }}
                        virtualScrollerOptions={renderVirtualScrollerOptions()}
                        pt={{
                            item: {
                                style: {
                                    borderColor: darkMode && '#444444'
                                }
                            }
                        }}
                    />
                </S.customSelect>
                {selectValuesModal()}
            </S.containerSelect>
        </ThemeProvider>
    )
}

const ExternalAvatar = ({ size = '24' }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 25 24" fill="white">
            <g>
                <path
                    d="M12.5231 0.333496C6.08311 0.333496 0.856445 5.56016 0.856445 12.0002C0.856445 18.4402 6.08311 23.6668 12.5231 23.6668C18.9631 23.6668 24.1898 18.4402 24.1898 12.0002C24.1898 5.56016 18.9631 0.333496 12.5231 0.333496ZM12.5231 3.8335C14.4598 3.8335 16.0231 5.39683 16.0231 7.3335C16.0231 9.27016 14.4598 10.8335 12.5231 10.8335C10.5864 10.8335 9.02311 9.27016 9.02311 7.3335C9.02311 5.39683 10.5864 3.8335 12.5231 3.8335ZM12.5231 20.4002C9.60645 20.4002 7.02811 18.9068 5.52311 16.6435C5.55811 14.3218 10.1898 13.0502 12.5231 13.0502C14.8448 13.0502 19.4881 14.3218 19.5231 16.6435C18.0181 18.9068 15.4398 20.4002 12.5231 20.4002Z"
                    fill="#6A3F86"
                />
            </g>
            <defs>
                <clipPath>
                    <rect width={size} height={size} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const externaAvatarBackgroundWhite = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9997 0.333496C5.55967 0.333496 0.333008 5.56016 0.333008 12.0002C0.333008 18.4402 5.55967 23.6668 11.9997 23.6668C18.4397 23.6668 23.6663 18.4402 23.6663 12.0002C23.6663 5.56016 18.4397 0.333496 11.9997 0.333496ZM11.9997 3.8335C13.9363 3.8335 15.4997 5.39683 15.4997 7.3335C15.4997 9.27016 13.9363 10.8335 11.9997 10.8335C10.063 10.8335 8.49967 9.27016 8.49967 7.3335C8.49967 5.39683 10.063 3.8335 11.9997 3.8335ZM11.9997 20.4002C9.08301 20.4002 6.50467 18.9068 4.99967 16.6435C5.03467 14.3218 9.66634 13.0502 11.9997 13.0502C14.3213 13.0502 18.9647 14.3218 18.9997 16.6435C17.4947 18.9068 14.9163 20.4002 11.9997 20.4002Z"
            fill="white"
        />
    </svg>
)
