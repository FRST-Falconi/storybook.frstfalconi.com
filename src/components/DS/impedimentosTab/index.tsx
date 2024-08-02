import {
    ContainerImpedimentos,
    TabWrapper,
    Tab,
    TabInfoWrapper,
    WrapperAddButton,
    WrapperImpedimentoSelect,
    WrapperSelectIcon
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
import { AddIcon, ArrrowExpandDropdown } from '@shared/icons'
import Tooltip from '../tooltip'
import AddImpedimentoModal from './addImpedimentoModal'
import React from 'react'
import Dropdown from './dropDown'

export default function ImpedimentosTab({
    maxTabs,
    tabsList,
    onSaveNewImpedimento,
    onSelectedTab
}: ImpedimentosTabProps) {
    const [selectedTab, setSelectedTab] = useState<TabInfo>(null);
    const [allTabs, setAllTabs] = useState<Array<TabInfo>>([]);
    const [onShowTabs, setOnShowTabs] = useState<Array<TabInfo>>([]);
    const [onHideTabs, setOnHideTabs] = useState<Array<TabInfo>>([]);
    const [addImpedimentoAnchor, setAddImpedimentoAnchor] = useState<HTMLDivElement | null>(null);
    const [impedimentoSelectAnchor, setImpedimentoSelectAnchor] = useState<HTMLDivElement | null>(null);
    
    const openAddImpedimento = Boolean(addImpedimentoAnchor)
    const openImpedimentoSelect = Boolean(impedimentoSelectAnchor)

    useEffect(() => {
        setAllTabs(tabsList)
    }, [tabsList]);

    useEffect(() => {
        if(allTabs.length > 0) {
            setSelectedTab(allTabs[0])
            setOnShowTabs(allTabs.slice(0, maxTabs))
            setOnHideTabs(allTabs.slice(maxTabs, allTabs.length))
            onSelectedTab(allTabs[0])
        }
    }, [allTabs]);

    const handleClickTab = (tab: TabInfo) => {
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
        //coloca o novo impedimento na primeira posição
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

    return (
        <ThemeProvider theme={FRSTTheme}>
            {allTabs.length > 0 ?
                <ContainerImpedimentos>
                    <TabWrapper>
                        <Box display={'flex'} alignItems={'center'}>
                            {onShowTabs.map((item, index) => renderTabs(item, index) )}
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
                        <TabInfoWrapper>
                            {selectedTab.isGoalOwner ?
                                <Box border={'2px solid #AD46FF'} borderRadius={'50%'}>
                                    <Avatar src={selectedTab.avatar} size='24px' />
                                </Box>
                                :
                                <Avatar src={selectedTab.avatar} size='24px' />
                            }
                            <p>{selectedTab.description}</p>
                        </TabInfoWrapper>
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