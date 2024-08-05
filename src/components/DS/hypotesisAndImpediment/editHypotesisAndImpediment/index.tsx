import { Button } from "@mui/material"
import { useState } from "react"


export const EditHypotesisAndImpediment = ({setEditDescription, editDescription, onSave, onCancel}) => {



    const handleSave = () => {
        onSave(editDescription)
    }
    
    return (
        <div>
            <input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
            />
            <Button onClick={handleSave}>Salvar</Button>
            <Button onClick={onCancel}>Cancelar</Button>
        </div>
    )
}