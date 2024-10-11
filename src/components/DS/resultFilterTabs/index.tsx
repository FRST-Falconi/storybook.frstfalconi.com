import { useEffect, useMemo, useRef, useState } from 'react'
import * as Styles from './resultFilterTabsStyles'
import MenuMore from '@components/menu-more'
import { CalendarIcon, EditHipoteses, TrashHipoteses } from '@shared/icons'
import InputMask from 'react-input-mask'

interface IResult {
    value: number
    targetDate: string
    name: string
    editable?: boolean
    version: number
}

interface ResultFilterTabsProps {
    results: Array<IResult>
    onTabChange?: (index: number) => void // Prop para manipulação externa
    onDelete?: () => void
    onEdit?: (payload: IResult) => void
    tabLimit?: number
}

export const ResultFilterTabs = ({ results, onTabChange, onDelete, onEdit }: ResultFilterTabsProps) => {

    const [activeTab, setActiveTab] = useState(0) // Controla a tab ativa
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(results[0]?.value)
    const [newDate, setNewDate] = useState(results[0]?.targetDate)
    const editContainerRef = useRef<HTMLDivElement>(null) // Referência para detectar cliques fora

    const handleTabClick = (index: number) => {
        if (isEditing) {
            handleEdit() // Salva se estiver no modo de edição
        }
        setActiveTab(index)
        setNewValue(results[index]?.value)
        setNewDate(results[index]?.targetDate)
        setIsEditing(false) // Sai do modo de edição ao mudar a aba
        if (onTabChange) {
            onTabChange(index) // Chama o callback passando o índice da tab
        }
    }

    const handleDelete = () => {
        onDelete()
    }

    const handleEdit = () => {
        if (!isEditing) return
        const payload: IResult = {
            name: results[activeTab].name,
            version: results[activeTab].version,
            value: newValue,
            targetDate: newDate
        }
        if (onEdit) onEdit(payload)
    }

    // Função para iniciar a edição com clique duplo
    const handleDoubleClick = () => {
        if (results[activeTab].editable) {
            setIsEditing(true)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
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
                {results?.map((result, index) => (
                    <Styles.Tab key={index} isActive={activeTab === index} onClick={() => handleTabClick(index)}>
                        {result.name} {result.version}
                    </Styles.Tab>
                ))}
            </Styles.Tabs>

            {/* Área de conteúdo que muda com as tabs */}
            <Styles.Content ref={editContainerRef} onDoubleClick={handleDoubleClick}>
                <Styles.Info>
                    <p>
                        Valor a ser atingido:{' '}
                        {isEditing ? (
                            <InputMask
                                mask="999999999[,.]99"
                                maskChar=""
                                value={newValue}
                                onChange={(e) => {
                                    // Atualiza o valor no estado e remove caracteres não numéricos
                                    const maskedValue = e.target.value
                                    // Opcional: Converte para número ao remover a máscara
                                    const numericValue = maskedValue.replace(/[^\d.,]/g, '') // Aceita números, ponto e vírgula
                                    setNewValue(numericValue)
                                }}
                            >
                                {(inputProps) => <input {...inputProps} type="text" />}
                            </InputMask>
                        ) : (
                            <span>{newValue}</span>
                        )}
                    </p>
                    <p>
                        Data para atingir o resultado:{' '}
                        {isEditing ? (
                            <Styles.InputWrapper>
                                <CalendarIcon fill="#222222" />
                                <InputMask mask="99/99/99" value={newDate} onChange={(e) => setNewDate(e.target.value)}>
                                    {(inputProps) => <input {...inputProps} type="text" />}
                                </InputMask>
                            </Styles.InputWrapper>
                        ) : (
                            <span>{newDate}</span>
                        )}
                    </p>
                </Styles.Info>

                {/* Menu com opções de edição e exclusão */}
                <Styles.Menu>
                    {results[activeTab].editable && (
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
        </Styles.Container>
    )
}
