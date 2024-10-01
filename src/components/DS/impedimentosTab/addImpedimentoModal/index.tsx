import Button from '@components/buttons'
import { ContainerModal } from './styles'
import { Popover } from '@mui/material'
import { useState } from 'react'
import TextField from '@components/form-elements/textfield'
import {
    LimitCharsContainer,
    LimitCharsExceededMessage
} from '@components/DS/hypotesisAndImpediment/hypothesisAndImpediment.style'
import { TagAlert } from '@public/customIcons'

interface modalProps {
    isOpen: boolean
    onClose: () => void
    onSaveBtn: (text: string) => void
    anchor: HTMLDivElement | null
}

export default function AddImpedimentoModal({ isOpen, onClose, onSaveBtn, anchor }: modalProps) {
    const [text, setText] = useState('')
    const limitCaraterersImpediments = 365

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
                <div style={{ width: '100%' }}>
                    <TextField
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Sugira o impedimento aqui"
                        maxLength={limitCaraterersImpediments}
                    />

                    {text?.length >= limitCaraterersImpediments && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginTop: '4px',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <TagAlert color="#A50000" />
                            <LimitCharsExceededMessage>
                                {'Você atingiu a quantidade máxima de caracteres'}
                            </LimitCharsExceededMessage>
                        </div>
                    )}
                </div>

                <Button label="Salvar" variant="expandedPrimary" disabled={text === ''} handleClick={handleSave} />
            </ContainerModal>
        </Popover>
    )
}
