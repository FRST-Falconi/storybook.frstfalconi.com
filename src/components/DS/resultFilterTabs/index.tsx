import { useEffect, useMemo, useRef, useState } from 'react'
import * as Styles from './resultFilterTabsStyles'
import MenuMore from '@components/menu-more'
import { EditHipoteses, TrashHipoteses } from '@shared/icons'

interface IResult {
    id: string
    value: number
    targetDate: string
    editable?: boolean
}

interface ResultFilterTabsProps {
    results: Array<IResult>
    onTabChange?: (index: number) => void // Prop para manipulação externa
    onDelete?: (id: string) => void
    onEdit?: (payload: IResult) => void
}

export const ResultFilterTabs = ({ results, onTabChange, onDelete, onEdit }: ResultFilterTabsProps) => {
    // Inverte a ordem dos resultados para mostrar a última aba como a primeira
    const reversedResults = useMemo(() => {
        return results.slice().reverse()
    }, [results])

    const [activeTab, setActiveTab] = useState(0) // Controla a tab ativa
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(reversedResults[0]?.value)
    const [newDate, setNewDate] = useState(reversedResults[0]?.targetDate)
    const editContainerRef = useRef<HTMLDivElement>(null) // Referência para detectar cliques fora

    const handleTabClick = (index: number) => {
        if (isEditing) {
            handleEdit() // Salva se estiver no modo de edição
        }
        setActiveTab(index)
        // Atualiza o valor e a data com base no índice da aba invertida
        const reversedIndex = results.length - 1 - index
        setNewValue(results[reversedIndex]?.value)
        setNewDate(results[reversedIndex]?.targetDate)
        setIsEditing(false) // Sai do modo de edição ao mudar a aba
        if (onTabChange) {
            onTabChange(index) // Chama o callback passando o índice da tab
        }
    }

    const handleDelete = () => {
        onDelete(reversedResults[activeTab].id)
    }

    const handleEdit = () => {
        if (!isEditing) return
        const payload: IResult = {
            id: results[activeTab].id,
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
                {results?.map((_, index) => (
                    <Styles.Tab
                        key={index}
                        isActive={activeTab === index}
                        onClick={() => handleTabClick(index)}
                    >
                        Resultado {reversedResults?.length - index}
                    </Styles.Tab>
                ))}
            </Styles.Tabs>

            {/* Área de conteúdo que muda com as tabs */}
            <Styles.Content ref={editContainerRef} onDoubleClick={handleDoubleClick}>
                <Styles.Info>
                    <p>
                        Valor a ser atingido:{' '}
                        {isEditing ? (
                            <input
                                type="number"
                                value={newValue}
                                onChange={(e) => setNewValue(Number(e.target.value))}
                            />
                        ) : (
                            <span>{newValue}</span>
                        )}
                    </p>
                    <p>
                        Data para atingir o resultado:{' '}
                        {isEditing ? (
                            <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
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
