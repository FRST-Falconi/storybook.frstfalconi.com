import { useState } from 'react'
import * as Styles from './resultFilterTabsStyles'
import MenuMore from '@components/menu-more'
import { EditHipoteses, TrashHipoteses } from '@shared/icons'

interface ResultFilterTabsProps {
    results: Array<{ value: number; targetDate: string }>
    onTabChange?: (index: number) => void // Prop para manipulação externa
    showEditOption?: boolean
}

export const ResultFilterTabs = ({ results, onTabChange, showEditOption=true }: ResultFilterTabsProps) => {
    const [activeTab, setActiveTab] = useState(0) // Controla a tab ativa
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(results[activeTab].value)
    const [newDate, setNewDate] = useState(results[activeTab].targetDate)

    const handleTabClick = (index: number) => {
        setActiveTab(index)
        setNewValue(results[index]?.value) // Atualiza o valor ao mudar de tab
        setNewDate(results[index]?.targetDate)
        if (onTabChange) {
            onTabChange(index) // Chama o callback passando o índice da tab
        }
    }

    return (
        <Styles.Container>
            <Styles.Tabs>
                {results?.map((_, index) => (
                    <Styles.Tab key={index} isActive={activeTab === index} onClick={() => handleTabClick(index)}>
                        Resultado {index + 1}
                    </Styles.Tab>
                ))}
            </Styles.Tabs>

            {/* Área de conteúdo que muda com as tabs */}
            <Styles.Content>
                <Styles.Info>
                    <p>
                        Valor a ser atingido: <span>{newValue}</span>
                    </p>
                    <p>
                        Data para atingir o resultado: <span>{newDate}</span>
                    </p>
                </Styles.Info>

                {/* Menu com opções de edição e exclusão */}
                <Styles.Menu>
                    {showEditOption && (
                        <Styles.Menu>
                            <MenuMore
                                options={[
                                    {
                                        description: 'Editar',
                                        onClick: () => {
                                            /* Função de editar */
                                        },
                                        color: '#222222',
                                        startIcon: <EditHipoteses />
                                    },
                                    {
                                        description: 'Excluir',
                                        onClick: () => {
                                            /* Função de excluir */
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
