import { useEffect, useMemo, useState } from 'react'
import { CheckIcon, CloseIcon } from '@public/customIcons'
import * as Styles from './editHypotesisAndImpediment.styles'

export const EditHypotesisAndImpediment = ({ setEditDescription, editDescription, onSave, onCancel, originalDescription }) => {
    
    const isButtonDisabled = useMemo(() => {
        return editDescription === originalDescription;
    }, [editDescription, originalDescription]);

    const handleSave = () => {
        if (!isButtonDisabled) {
            onSave(editDescription);
        }
    }

    return (
        <Styles.ContainerInput>
            <Styles.TextArea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
            <Styles.ContainerButton>
                <Styles.Button  onClick={handleSave} disabled={isButtonDisabled}>
                    <CheckIcon stroke={isButtonDisabled ? '#9C9C9C' : '#1BA853'} fill={isButtonDisabled ? '#EBEBEB' : '#D1F6D1'}/>
                </Styles.Button>
                <Styles.Button onClick={onCancel}>
                    <CloseIcon />
                </Styles.Button>
            </Styles.ContainerButton>
        </Styles.ContainerInput>
    )
}
