import { FRSTTheme } from "../../../theme";
import { ThemeProvider } from "styled-components";
import { MultiSelect } from 'primereact/multiselect';
import { useEffect, useMemo, useState } from "react";
import * as S from './styles/multiselectStyles'
import { CloseIcon, DropdownIcon, Trash } from "@shared/icons";
import SearchField from "@components/search-field";
import Avatar from "@components/avatar";
import { IconButton, Modal } from "@mui/material";
import './styles/primereact.css'
import './styles/primeflex.css'
import './styles/theme.css'
import Tooltip from "../tooltip";
import Button from "@components/buttons";


interface IDropdownMultiselect {
    listItems?: ISelectedValue
    selectPlaceholder?: string
    searchSelectPlaceholder?: string
    people: string
    person: string
    maxSelectedShow?: number
    isDisabled?: boolean
    removeItemsToolTip?: string
    modalTitle?: string
    removeModalText?: string
    btnSelectAllText?: string
    getSelectedItems?: (selectedItems) => void
    style?: React.CSSProperties
    optionLayout?: (options) => void
    selectedDefault?: ISelectedValue

}

type ISelectedValue = {
    id: string
    avatar: string
    name: string
    description: string
    subDescription?: string
}[]


export default function DropdownMultiselect(props: IDropdownMultiselect) {
    const [selectedValues, setSelectedValues] = useState<ISelectedValue>([]);
    const [textFilter, setTextFilter] = useState('')
    const [listItemsFilter, setListItemsFilter] = useState(props.listItems)
    const [showModal, setShowModal] = useState(false);
    const [listFilterSearch, setListFilterSearch] = useState<any>();

    useEffect(() => {
        setListFilterSearch(props.listItems)
    }, [props.listItems])

    useEffect(() => {
        let temp = listItemsFilter.filter((resp) => resp.name.toLowerCase().includes(textFilter))
        setListFilterSearch(temp)
    }, [textFilter])

    useEffect(() => {
        setSelectedValues(props?.selectedDefault)
    }, [props?.selectedDefault]);

    useEffect(() => {
        setListItemsFilter(props.listItems)
    }, [props.listItems]);

    useEffect(() => {
        props.getSelectedItems(selectedValues)
    }, [selectedValues]);

    const removeSelectedValue = (id) => {

        setSelectedValues((prev) => {
            prev = [...prev]
            const index = prev.map(value => value.id).indexOf(id)
            prev.splice(index, 1)
            return prev
        })
    }

    const itemTemplate = (item) => {
        return (
            <S.selectItem>
                <Avatar src={item.avatar} size='24px' />
                <div style={{ display: 'flex', gap: '6px' }}>
                    <p> {item.name}
                        <span style={{ color: '#757575' }}> ({item.description}) </span>
                    </p>
                </div>
            </S.selectItem>
        )
    }

    const selectTemplate = (option) => {
        const pessoasAMais = selectedValues?.length - props.maxSelectedShow
        if (option) {
            return (
                <>
                    {option.map((item, index) => {
                        if (index < props.maxSelectedShow) {
                            return (
                                props.optionLayout ?
                                    props.optionLayout(item)
                                    :
                                    <S.selectTag key={index}>
                                        <Avatar src={item.avatar} size="24px" />
                                        <p> {item.name} </p>
                                        <IconButton onClick={() => removeSelectedValue(item.id)}>
                                            <CloseIcon width="8" height="8" fill="#FFFFFF" />
                                        </IconButton>
                                    </S.selectTag>
                            )
                        }
                        else if (index === props.maxSelectedShow) {
                            return (
                                <S.overShowInfo key={index} onClick={() => setShowModal(true)} >
                                    <p>
                                        {`+ ${pessoasAMais} ${pessoasAMais > 1 ? props.people : props.person}`}
                                    </p>
                                </S.overShowInfo>
                            )
                        }
                    })}
                </>
            )
        } else {
            return <></>
        }
    }

    const handleTemplateHeader = () => {
        const selectedItems = selectedValues
        const lengthList = selectedItems ? selectedItems?.length : 0
        return props.listItems.length >= lengthList ? (
            <S.searchAndButton>
                <div style={{ marginBottom: '1rem' }}>
                    <SearchField
                        placeholder={props.searchSelectPlaceholder ? props.searchSelectPlaceholder : 'Buscar'}
                        className={null}
                        handleClickButton={null}
                        isButton
                        hasSearchIcon={true}
                        onChange={(e: any) => {
                            setTextFilter(e.target.value)
                        }}
                    />
                </div>
                <Button
                    variant={'link'}
                    label={props.btnSelectAllText ? props.btnSelectAllText : 'Selecionar todos'}
                    disabled={false}
                    handleClick={() => {
                        setSelectedValues(listItemsFilter)
                    }}
                />
            </S.searchAndButton>
        ) : <></>
    }

    const selectValuesModal = () => {
        return (
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
            >
                <S.modalContainer>
                    <S.modalHeader>
                        <p> {props.modalTitle ? props.modalTitle : 'Este grupo é administrado por'} {selectedValues.length} {selectedValues.length > 1 ? props.people : props.person} </p>
                    </S.modalHeader>
                    <S.modalContent>
                        {selectedValues.map((item, index) => {
                            return (
                                <S.modalCards style={{ background: index % 2 === 0 ? '#F2F2F2' : '#FFF' }} key={index}>
                                    <div style={{ display: "flex", gap: '12px' }}>
                                        <Avatar src={item.avatar} size="50px" />
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }} >
                                            <S.cardTitle> {item.name} </S.cardTitle>
                                            <S.cardDescription> {item.description} </S.cardDescription>
                                            <S.cardDescription> {item.subDescription} </S.cardDescription>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', cursor: 'pointer' }} onClick={() => removeSelectedValue(item.id)}>
                                        <Trash fill="#A50000" width="24" height="24" />
                                        <S.cardTitle style={{ color: '#A50000' }} > {props.removeModalText ? props.removeModalText : 'Remover'} </S.cardTitle>
                                    </div>
                                </S.modalCards>
                            )
                        })}
                    </S.modalContent>
                    <S.closeModal>
                        <IconButton onClick={() => setShowModal(false)} >
                            <CloseIcon />
                        </IconButton>
                    </S.closeModal>
                </S.modalContainer>
            </Modal>
        )
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <S.containerSelect style={{ ...props.style }}>

                {selectedValues?.length > 0 &&
                    <S.headerSelect>

                        {selectTemplate(selectedValues)}

                        {selectedValues?.length > 1 &&
                            <div style={{ zIndex: 999, position: 'absolute', right: 40 }}>
                                <Tooltip
                                    content={props.removeItemsToolTip ? props.removeItemsToolTip : 'Excluir todos'}
                                    direction="bottom"
                                    trigger="hover"
                                    style={{ height: 'auto' }}
                                >
                                    <IconButton onClick={() => setSelectedValues([])} >
                                        <Trash fill="#9C9C9C" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        }
                    </S.headerSelect>
                }
                <S.customSelect >
                    <MultiSelect
                        value={selectedValues}
                        options={listFilterSearch}
                        onChange={(e) => setSelectedValues(e.value)}
                        placeholder={props.selectPlaceholder ? props.selectPlaceholder : "Selecione aqui"}
                        className="custom-multiselect"
                        dropdownIcon={<DropdownIcon fill={FRSTTheme['colors'].shadeBlack} />}
                        panelHeaderTemplate={handleTemplateHeader()}
                        itemTemplate={itemTemplate}
                        disabled={props.isDisabled}
                        maxSelectedLabels={0}
                        selectedItemsLabel=" "
                        style={{ border: selectedValues?.length > 0 ? 'none' : `1px solid ${FRSTTheme['colors'].borderPrimary}` }}
                    />
                </S.customSelect>
                {selectValuesModal()}
            </S.containerSelect>
        </ThemeProvider>
    )
}