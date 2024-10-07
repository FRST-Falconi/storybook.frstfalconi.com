import { useState } from 'react'
import * as Styles from './resultFilterTabsStyles'

interface ResultFilterTabsProps {
    results: Array<{ value: number; targetDate: string }>
    onTabChange?: (index: number) => void; // Prop para manipulação externa
}

export const ResultFilterTabs = ({ results, onTabChange }: ResultFilterTabsProps) => {
    const [activeTab, setActiveTab] = useState(0) // Controla a tab ativa
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(results[activeTab].value)
    const [newDate, setNewDate] = useState(results[activeTab].targetDate)

    const handleTabClick = (index: number) => {
        setActiveTab(index)
        setNewValue(results[index].value) // Atualiza o valor ao mudar de tab
        setNewDate(results[index].targetDate)
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
                    Valor a ser atingido: {newValue} &nbsp; | &nbsp; Data para atingir o resultado: {newDate}
                </Styles.Info>

                {/* Menu com opções de edição e exclusão */}
                <Styles.Menu>
                    <span>•••</span> {/* Ícone de menu */}
                    {/* Você pode adicionar o menu dropdown aqui */}
                </Styles.Menu>
            </Styles.Content>
        </Styles.Container>
    )
}