import {
    ContainerImpedimentos,
    TabWrapper,
    Tab,
    TabInfoWrapper,
    WrapperAddButton,
    WrapperImpedimentoSelect,
    WrapperSelectIcon,
    WrapperMenuMore
} from './styles'
import {
    ImpedimentosTabProps,
    TabInfo
} from './impedimentosTab'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { Box, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import Avatar from '@components/avatar'
import { AddIcon, ArrrowExpandDropdown, EditHipoteses, StarPrioritize, TrashHipoteses } from '@shared/icons'
import Tooltip from '../tooltip'
import AddImpedimentoModal from './addImpedimentoModal'
import React from 'react'
import Dropdown from './dropDown'
import MenuMore from '@components/menu-more'

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
        if(tabsList.length > allTabs.length) {
            setAllTabs(tabsList)
        }
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
            const tabToSelect = allTabs.find(tab => tab.id === currentTab);
            setSelectedTab(tabToSelect ? tabToSelect : allTabs[0]);
            setOnShowTabs(allTabs.slice(0, maxTabs));
            setOnHideTabs(allTabs.slice(maxTabs, allTabs.length));
            onSelectedTab(tabToSelect ? tabToSelect : allTabs[0]);
        }
    }, [allTabs, currentTab, maxTabs, onSelectedTab]);

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
        handleClickTab(impedimento)
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
                        <Box display={'flex'} flexDirection={'column'} gap={'8px'} onDoubleClick={() => selectedTab?.showOptions && setIsEdit(true)} >
                            <TabInfoWrapper>
                                <Tooltip
                                    content={selectedTab?.user_name}
                                    direction='bottom'
                                    delay={200}
                                    style={{width: 'fit-content', height: 'fit-content'}}
                                >
                                    {selectedTab.isGoalOwner ?
                                        <Box border={'2px solid #AD46FF'} borderRadius={'50%'} onClick={selectedTab?.handleClickAvatar}>
                                            <Avatar src={selectedTab.avatar} size='24px' isActiveClick={true}/>
                                        </Box>
                                        :
                                        <Avatar src={selectedTab.avatar} size='24px' isActiveClick={true} onClick={selectedTab?.handleClickAvatar}/>
                                    }
                                </Tooltip>
                                {isEdit ?
                                    <>
                                        <TextField
                                            placeholder={editDescription}
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                            fullWidth
                                            variant='standard'
                                            InputProps={{
                                                autoFocus: true,
                                                disableUnderline: true,
                                                style:{
                                                    fontFamily: 'PT Sans',
                                                    fontSize: '14px',
                                                    lineHeight: 1.3
                                                }
                                            }}
                                            onKeyDown={(event) => {
                                                if(event.key === 'Enter') {
                                                    if (editDescription == '') return;
                                                    setDisplayDescription(editDescription);
                                                    let editTab = {...selectedTab, description: editDescription}; 
                                                    selectedTab?.handleEdit(editTab);
                                                    setIsEdit(false);
                                                }
                                                if(event.key === 'Escape') {
                                                    setEditDescription(displayDescription);
                                                    setIsEdit(false)
                                                }
                                            }}
                                            onBlur={() => {
                                                setEditDescription(displayDescription);
                                                setIsEdit(false)
                                            }}
                                        />
                                    </>
                                    :
                                    <>
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
                                                            startIcon: <EditHipoteses />
                                                        }] : []),
                                                        ...(selectedTab?.handleDelete ? [{
                                                            description: 'Excluir',
                                                            onClick: () => selectedTab?.handleDelete(selectedTab),
                                                            startIcon: <TrashHipoteses />,
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
                                    </>
                                }
                            </TabInfoWrapper>
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