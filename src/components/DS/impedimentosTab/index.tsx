import {
    ContainerImpedimentos,
    TabWrapper,
    Tab,
    TabInfoWrapper,
    WrapperAddButton,
    WrapperImpedimentoSelect,
    WrapperSelectIcon,
    WrapperMenuMore,
    EditWrapper,
    EditButtons
} from './styles'
import {
    ImpedimentosTabProps,
    TabInfo
} from './impedimentosTab'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Avatar from '@components/avatar'
import { AddIcon, ArrrowExpandDropdown, CheckIconSimple, CloseIcon, EditIcon, StarPrioritize, TrashIconNew } from '@shared/icons'
import Tooltip from '../tooltip'
import AddImpedimentoModal from './addImpedimentoModal'
import React from 'react'
import Dropdown from './dropDown'
import MenuMore from '@components/menu-more'
import TextField from '@components/form-elements/textfield'

export default function ImpedimentosTab({
    maxTabs,
    tabsList,
    showAddButton,
    onSaveNewImpedimento,
    onSelectedTab,
    idSelectedTab,
    currentTab
}: ImpedimentosTabProps) {
    const [selectedTab, setSelectedTab] = useState<TabInfo>(null);
    const [allTabs, setAllTabs] = useState<Array<TabInfo>>([]);
    const [onShowTabs, setOnShowTabs] = useState<Array<TabInfo>>([]);
    const [onHideTabs, setOnHideTabs] = useState<Array<TabInfo>>([]);
    const [addImpedimentoAnchor, setAddImpedimentoAnchor] = useState<HTMLDivElement | null>(null);
    const [impedimentoSelectAnchor, setImpedimentoSelectAnchor] = useState<HTMLDivElement | null>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [editDescription, setEditDescription] = useState('');
    const [displayDescription, setDisplayDescription] = useState('');

    
    const openAddImpedimento = Boolean(addImpedimentoAnchor)
    const openImpedimentoSelect = Boolean(impedimentoSelectAnchor)

    useEffect(() => {
        setAllTabs(tabsList)
    }, [tabsList]);

    useEffect(() => {
        if(idSelectedTab) {
            if(allTabs?.length > 0) {
                let tab = allTabs?.find(value => value.id == idSelectedTab)
                handleClickTab(tab)
            }
        }
    }, [idSelectedTab])

    useEffect(() => {
        if (allTabs.length > 0) {
            setSelectedTab(allTabs[0]);
            setOnShowTabs(allTabs.slice(0, maxTabs));
            setOnHideTabs(allTabs.slice(maxTabs, allTabs.length));
            onSelectedTab(allTabs[0]);
        }
    }, [allTabs, maxTabs, onSelectedTab]);

    const handleClickTab = (tab: TabInfo) => {
        setIsEdit(false)
        setEditDescription('');
        setDisplayDescription(tab.description);
        setSelectedTab(tab)
        onSelectedTab(tab)
    }

    const handleClickAddImpedimento = (event: React.MouseEvent<HTMLDivElement>) => {
        setAddImpedimentoAnchor(event.currentTarget)
    }

    const handleSaveNewImpedimento = (impedimento: string) => {
        onSaveNewImpedimento(impedimento)
    }

    const handleClickSelectImpedimento = (impedimento: TabInfo) => {
        //novo Array sem o impedimento selecionado
        let newArray = allTabs.filter( value => value.id !== impedimento.id)
        //coloca o impedimento selecionado na primeira posição
        newArray.unshift(impedimento)
        //atualiza o array de impedimentos
        setAllTabs(newArray)
    }

    const renderTabs = (tabInfo: TabInfo, index: number) => {
        return(
            <Tab key={index}
                selected={tabInfo.id === selectedTab?.id} 
                onClick={() => handleClickTab(tabInfo)}
            >
                <p>{tabInfo.title}</p>
            </Tab>
        )
    }


    const startEditing = () => {
        setEditDescription(displayDescription);
    };

    useEffect(() => {
        if (isEdit) {
            startEditing();
        }
    }, [isEdit]);

    useEffect(() => {
        if (selectedTab) {
            setDisplayDescription(selectedTab.description || '');
            setEditDescription(selectedTab.description || '');
        }
    }, [selectedTab]);

    return (
        <ThemeProvider theme={FRSTTheme}>
            {allTabs.length > 0 ?
                <ContainerImpedimentos>
                    <TabWrapper>
                        <Box display={'flex'} alignItems={'center'}>
                            {onShowTabs.map((item, index) => renderTabs(item, index) )}
                            {showAddButton ?
                                <Tooltip
                                    content='Sugerir impedimento'
                                    direction='bottom'
                                    delay={200}
                                    style={{textAlign: 'center'}}
                                >
                                    <WrapperAddButton 
                                        activeButton={openAddImpedimento}
                                        onClick={handleClickAddImpedimento}
                                    >
                                        <AddIcon />
                                    </WrapperAddButton>
                                </Tooltip>
                                :
                                <></>
                            }
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            {onHideTabs.length > 0 ?
                                <Tooltip
                                    content='Ver todos os impedimentos'
                                    direction='bottom'
                                    delay={200}
                                    style={{textAlign: 'center'}}
                                >
                                    <WrapperImpedimentoSelect 
                                        activeSelect={openImpedimentoSelect}
                                        onClick={(e) => setImpedimentoSelectAnchor(e.currentTarget)}
                                    >
                                        <p>Mais {onHideTabs.length}</p>
                                        <WrapperSelectIcon isOpenSelect={openImpedimentoSelect}>
                                            <ArrrowExpandDropdown />
                                        </WrapperSelectIcon>
                                    </WrapperImpedimentoSelect>
                                </Tooltip>
                                :
                                <></>
                            }
                        </Box>
                    </TabWrapper> 
                    {selectedTab?.id ?
                        <Box display={'flex'} flexDirection={'column'} gap={'8px'} >
                            <TabInfoWrapper>
                                {selectedTab.isGoalOwner ?
                                    <Box border={'2px solid #AD46FF'} borderRadius={'50%'}>
                                        <Avatar src={selectedTab.avatar} size='24px' />
                                    </Box>
                                    :
                                    <Avatar src={selectedTab.avatar} size='24px' />
                                }
                                <p>{displayDescription}</p>
                                {selectedTab?.showOptions ?
                                    <WrapperMenuMore>
                                        <MenuMore
                                            options={[
                                                ...(selectedTab?.handlePriorize ? [{
                                                    description: 'Priorizar',
                                                    onClick: () => selectedTab?.handlePriorize(selectedTab),
                                                    disabled: !!selectedTab?.disabledPriorize,
                                                    startIcon: <StarPrioritize stroke={!!selectedTab?.disabledPriorize ? "#b7b7b7" : "#222222" }/>
                                                }] : []),
                                                ...(selectedTab?.handleEdit ? [{
                                                    description: 'Editar',
                                                    onClick: () => setIsEdit(true),
                                                    startIcon: <EditIcon fill='#222222' />
                                                }] : []),
                                                ...(selectedTab?.handleDelete ? [{
                                                    description: 'Excluir',
                                                    onClick: () => selectedTab?.handleDelete(selectedTab),
                                                    startIcon: <TrashIconNew fill='#C00F00' />,
                                                    color: '#C00F00'
                                                }] : []),
                                            ]}
                                            closeAfterClick
                                            isContainerOptions={true}
                                        />
                                    </WrapperMenuMore>
                                    :
                                    <></>
                                }
                            </TabInfoWrapper>
                            {isEdit ?
                                <EditWrapper>
                                    <TextField
                                        placeholder={editDescription}
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        style={{width: '100%'}}
                                    />
                                    <Box display={'flex'} gap={'8px'}>
                                        <EditButtons 
                                            buttonColor={editDescription === displayDescription ? '#EBEBEB' : '#D1F6D1'}
                                            onClick={() => {
                                                if (editDescription == '') return;
                                                setDisplayDescription(editDescription);
                                                let editTab = {...selectedTab, description: editDescription}; 
                                                selectedTab?.handleEdit(editTab);
                                                setIsEdit(false);
                                            }}
                                            style={{cursor: editDescription === displayDescription ? 'not-allowed' : 'pointer' }}
                                        >
                                            <CheckIconSimple fill={editDescription === displayDescription ? '#9C9C9C' : '#1BA853'} />
                                        </EditButtons>
                                        <EditButtons 
                                            buttonColor='#FFE0E0'
                                            onClick={() => {
                                                setEditDescription(displayDescription);
                                                setIsEdit(false)
                                            }}
                                            style={{cursor: 'pointer'}}
                                        >
                                            <CloseIcon fill='#C00F00' />
                                        </EditButtons>
                                    </Box>
                                </EditWrapper>
                                : 
                                <></>
                            }
                        </Box>
                        :
                        <></>
                    }
                    <AddImpedimentoModal
                        isOpen={openAddImpedimento}
                        anchor={addImpedimentoAnchor}
                        onClose={() => setAddImpedimentoAnchor(null)}
                        onSaveBtn={handleSaveNewImpedimento}
                    />
                    <Dropdown
                        isOpen={openImpedimentoSelect}
                        anchor={impedimentoSelectAnchor}
                        onClose={() => setImpedimentoSelectAnchor(null)}
                        impedimentoList={onHideTabs}
                        maxTabs={maxTabs}
                        onClickImpedimento={handleClickSelectImpedimento}
                    />
                </ContainerImpedimentos>
                :
                <></>
            }
        </ThemeProvider>
    )
}