import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as Styles from './resultFilterTabsStyles'
import MenuMore from '@components/menu-more'
import { ArrrowExpandDropdown, CalendarIcon, EditHipoteses, TrashHipoteses } from '@shared/icons'
import InputMask from 'react-input-mask'
import { ResultFilterTabsProps, IResult } from './resultFilterTabs'
import DropdownResult from './dropDownResult'
import type { DatePickerProps } from 'antd';
import { ConfigProvider, DatePicker, Space } from 'antd';
import Tooltip from '../tooltip'
import dayjs from 'dayjs';
import locale from 'antd/locale/pt_BR';
import 'dayjs/locale/pt-br';




export const ResultFilterTabs = ({ results, onTabChange, onDelete, onEdit, tabLimit }: ResultFilterTabsProps) => {
    const [activeTab, setActiveTab] = useState(0) // Controla a tab ativa
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState<string | number>(results[0]?.value_indicator)
    const [newDate, setNewDate] = useState<any>(results[0]?.expectation_date || null)
    const [filteredResults, setFilteredResults] = useState([])
    const [hiddenTabs, setHiddenTabs] = useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const editContainerRef = useRef<HTMLDivElement>(null) // Referência para detectar cliques fora

    const [anchor, setAnchor] = useState(null)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    dayjs.locale('pt-br');

    // Função para fechar o dropdown
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleTabClick = (index: number, version?: any) => {
        if (isEditing) {
            handleEdit() // Salva se estiver no modo de edição
        }
        setActiveTab(index)
        setNewValue(results[index]?.value_indicator)
        setNewDate(results[index]?.expectation_date)
        setIsEditing(false) // Sai do modo de edição ao mudar a aba
        if (onTabChange) {
            onTabChange(version)
        }
    }

    const handleDelete = () => {
        onDelete()
    }

    const canShowDropdown = useMemo(() => {
        if (tabLimit) return results.length > tabLimit
        return false
    }, [tabLimit, results])


    const changeFilteredResults = (activeTabIndex: number) => {
        if (canShowDropdown) {
            let updatedResults = filteredResults.length ? [...filteredResults] : [...results.slice(0, tabLimit)];
    
            // Verifica se o item clicado não está nos resultados filtrados
            const selectedResult = results[activeTabIndex];
            const isSelectedResultInFiltered = updatedResults.some((i) => i.version === selectedResult.version);
    
            if (!isSelectedResultInFiltered) {
                // Insere o item clicado no início e remove o último
                updatedResults = [selectedResult, ...updatedResults.slice(0, tabLimit - 1)];
                setActiveTab(0);  // Isso faz com que a primeira aba (o item clicado) seja visualmente selecionada
            }
            if (onTabChange && activeTab !== activeTabIndex) {
                onTabChange(activeTabIndex);
            }

            setHiddenTabs(results.filter(i => updatedResults.every(a => a.version !== i.version)))
            setFilteredResults(updatedResults);
    
            // Atualiza a aba ativa para a primeira posição
        } else {
            // Se o dropdown não for exibido, retorna a lista completa
            setFilteredResults(results);
    
            // Atualiza a aba ativa para a aba original clicada
            setActiveTab(activeTabIndex);
        }
    };

    const onChangeDate = (date, dateString) => {
        if (date) {
          const formattedDate = dayjs(date).format('DD/MM/YY');  
          setNewDate(formattedDate);
        } else {
          setNewDate(null);
        }
    };

    const tabs = useMemo(() => {
        return (
            <>
                {filteredResults?.map((result, index) => (
                    <Styles.Tab key={index} isActive={activeTab === index} onClick={() => handleTabClick(index, result.version)}>
                        {result.name} {result.version}
                    </Styles.Tab>
                ))}
            </>
        )
    }, [filteredResults, activeTab])

    const handleEdit = () => {
        if (!isEditing) return
        const payload: IResult = {
            name: results[activeTab].name,
            version: results[activeTab].version,
            value_indicator: newValue,
            expectation_date: newDate
        }
        if (onEdit) onEdit(payload)
    }

    // Função para iniciar a edição com clique duplo
    const handleDoubleClick = () => {
        if (filteredResults[activeTab].editable) {
            setIsEditing(true)
        }
    }

    useEffect(() => {
        changeFilteredResults(0)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (document.querySelector('.ant-picker-dropdown')?.contains(event.target as Node)) {
                return;
              }

            if (editContainerRef.current && !editContainerRef.current.contains(event.target as Node)) {
                if (isEditing) {
                    handleEdit() // Salva os dados ao clicar fora do campo de edição
                    setIsEditing(false)
                }
            }

        }
        
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isEditing, newValue, newDate])

    return (
        <Styles.Container>
            <Styles.Tabs>
                <div style={{ display: 'flex' }}>{tabs}</div>
                {canShowDropdown && (
                    <Tooltip
                        content="Ver todos os Resultados"
                        direction="bottom"
                        delay={200}
                        style={{ textAlign: 'center' }}
                    >
                        <Styles.WrapperTabsResultSelect
                            activeSelect={isDropdownOpen}
                            onClick={(event) => {
                                setAnchor(event?.currentTarget)
                                toggleDropdown()
                            }}
                        >
                            <p>Mais {hiddenTabs.length}</p>
                            <Styles.WrapperSelectIcon isOpenSelect={isDropdownOpen}>
                                <ArrrowExpandDropdown />
                            </Styles.WrapperSelectIcon>
                        </Styles.WrapperTabsResultSelect>
                    </Tooltip>
                )}
            </Styles.Tabs>

            {/* Área de conteúdo que muda com as tabs */}
            <Styles.Content ref={editContainerRef} onDoubleClick={handleDoubleClick}>
                <Styles.Info>
                    <p>
                        Valor a ser atingido:{' '}
                        {isEditing ? (
                            <Styles.inputIndicator
                                type="text"
                                value={newValue}
                                onChange={(e) => {
                                    const maskedValue = e?.target?.value

                                    // Aceita números, ponto e vírgula
                                    const numericValue = maskedValue.replace(/[^\d.,]/g, '')
                                    setNewValue(numericValue)
                                }}
                            />
                        ) : (
                            <span>{filteredResults[activeTab]?.value_indicator}</span>
                        )}
                    </p>
                    <p >
                        Data para atingir o resultado:{' '}
                        {isEditing ? (
                            <Styles.InputWrapper>
                                <ConfigProvider locale={locale}>
                                    <DatePicker 
                                        format={'DD/MM/YY'}
                                        onChange={onChangeDate}
                                        placeholder='DD/MM/AA'
                                        value={ newDate ? dayjs(newDate, 'DD/MM/YY') : null }
                                        onClick={(e) => e?.stopPropagation()}
                                    />
                                </ConfigProvider>
                            </Styles.InputWrapper>
                        ) : (
                            <span>{filteredResults[activeTab]?.expectation_date}</span>
                        )}
                    </p>
                </Styles.Info>

                {/* Menu com opções de edição e exclusão */}
                <Styles.Menu>
                    {filteredResults[activeTab]?.editable && (
                        <Styles.Menu>
                            <MenuMore
                                options={[
                                    {
                                        description: 'Editar',
                                        onClick: () => {
                                            setIsEditing(true)
                                        },
                                        color: '#222222',
                                        startIcon: <EditHipoteses />
                                    },
                                    {
                                        description: 'Excluir',
                                        onClick: () => {
                                            handleDelete()
                                        },
                                        color: '#C00F00',
                                        startIcon: <TrashHipoteses />
                                    }
                                ]}
                                isContainerOptions={true}
                                closeAfterClick
                            />
                        </Styles.Menu>
                    )}
                </Styles.Menu>
            </Styles.Content>

            <DropdownResult
                anchor={anchor}
                isOpen={isDropdownOpen}
                onClose={closeDropdown}
                ResultList={hiddenTabs}
                maxTabs={tabLimit}
                onClickResultList={(i) => changeFilteredResults(results.indexOf(i))} 
            />
        </Styles.Container>
    )
}
