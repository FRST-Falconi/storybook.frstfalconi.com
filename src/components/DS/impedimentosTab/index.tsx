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
import { AddIcon, ArrowShowMoreLess } from '@shared/icons'
import Tooltip from '../tooltip'
import AddImpedimentoModal from './addImpedimentoModal'
import React from 'react'

export default function ImpedimentosTab({
    maxTabs,
    tabsList,
    onSaveNewImpedimento
}: ImpedimentosTabProps) {
    const [selectedTab, setSelectedTab] = useState<TabInfo>(null);
    const [addImpedimentoAnchor, setAddImpedimentoAnchor] = useState<HTMLDivElement | null>(null);
    const openAddImpedimento = Boolean(addImpedimentoAnchor)

    useEffect(() => {
        if(tabsList.length > 0 && !selectedTab) {
            setSelectedTab(tabsList[0])
        }
    }, [tabsList]);

    const handleClickTab = (tab: TabInfo) => {
        setSelectedTab(tab)
    }

    const handleClickAddImpedimento = (event: React.MouseEvent<HTMLDivElement>) => {
        setAddImpedimentoAnchor(event.currentTarget)
    }

    const handleSaveNewImpedimento = (impedimento: string) => {
        onSaveNewImpedimento(impedimento)
    }

    const renderTabs = (tabInfo: TabInfo, index: number) => {
        return(
            <Tab selected={tabInfo.id === selectedTab?.id} onClick={() => handleClickTab(tabInfo)}>
                <p>Impedimento {index + 1}</p>
            </Tab>
        )
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            {tabsList.length > 0 ?
                <ContainerImpedimentos>
                    <TabWrapper>
                        <Box display={'flex'} alignItems={'center'}>
                            {tabsList.map((item, index) => renderTabs(item, index) )}
                            <Tooltip
                                content='Sugerir impedimento'
                                direction='bottom'
                                delay={200}
                                style={{textAlign: 'center'}}
                            >
                                <WrapperAddButton activeButton={openAddImpedimento} onClick={handleClickAddImpedimento}>
                                    <AddIcon />
                                </WrapperAddButton>
                            </Tooltip>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Tooltip
                                content='Ver todos os impedimentos'
                                direction='bottom'
                                delay={200}
                                style={{textAlign: 'center'}}
                            >
                                <WrapperImpedimentoSelect activeSelect={false}>
                                    <p>Mais 4</p>
                                    <WrapperSelectIcon>
                                        
                                    </WrapperSelectIcon>
                                </WrapperImpedimentoSelect>
                            </Tooltip>
                        </Box>
                    </TabWrapper>
                    {selectedTab?.id ?
                        <TabInfoWrapper>
                            <Box border={'2px solid #AD46FF'} borderRadius={'50%'}>
                                <Avatar src={selectedTab.avatar} size='24px' />
                            </Box>
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
                </ContainerImpedimentos>
                :
                <></>
            }
        </ThemeProvider>
    )
}