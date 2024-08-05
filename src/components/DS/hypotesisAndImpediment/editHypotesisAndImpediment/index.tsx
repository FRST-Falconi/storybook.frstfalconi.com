import { useState } from 'react'
import { CheckIcon, CloseIcon } from '@public/customIcons'
import * as Styles from './editHypotesisAndImpediment.styles'

export const EditHypotesisAndImpediment = ({ setEditDescription, editDescription, onSave, onCancel }) => {
    

    const handleSave = () => {
        onSave(editDescription)
    }

    return (
        <Styles.ContainerInput>
            <Styles.TextArea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
            />
            <Styles.ContainerButton>
                <Styles.Button onClick={handleSave}>
                    <CheckIcon />
                </Styles.Button>
                <Styles.Button onClick={onCancel}>
                    <CloseIcon />
                </Styles.Button>
            </Styles.ContainerButton>
        </Styles.ContainerInput>
    )
}
