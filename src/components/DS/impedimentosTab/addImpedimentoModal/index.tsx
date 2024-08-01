import Button from '@components/buttons'
import {
    ContainerModal
} from './styles'
import { Popover } from "@mui/material"
import { useState } from 'react'
import TextField from '@components/form-elements/textfield'

interface modalProps {
    isOpen: boolean
    onClose: () => void
    onSaveBtn: (text: string) => void
    anchor: HTMLDivElement | null
}

export default function AddImpedimentoModal({
    isOpen,
    onClose,
    onSaveBtn,
    anchor
}: modalProps) {
    const [text, setText] = useState('');

    const handleClose = () => {
        setText('')
        onClose()
    }

    const handleSave = () => {
        onSaveBtn(text)
        handleClose()
    }

    return (
        <Popover
            open={isOpen}
            onClose={handleClose}
            anchorEl={anchor}
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
            }}
            transformOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
        >
            <ContainerModal>
                <TextField
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Sugira o impedimento aqui'

                />
                <Button
                    label='Salvar'
                    variant='expandedPrimary'
                    disabled={text === ''}
                    handleClick={handleSave}
                />
            </ContainerModal>
        </Popover>
    )
}