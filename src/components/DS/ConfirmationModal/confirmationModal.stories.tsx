import React, { useState } from 'react'
import { ConfirmationModal } from './index'

export default {
    title: 'DS/ConfirmationModal',
    component: ConfirmationModal
}

const Template = (args) => {
    const [open, setOpen] = useState(true)

    const handleClose = () => setOpen(false)
    const handleConfirm = () => {
        alert('Confirmed!')
        setOpen(false)
    }

    return <ConfirmationModal {...args} open={open} onClose={handleClose} onConfirm={handleConfirm} />
}

export const normal = Template.bind({})
normal.args = {
    title: 'Download de arquivo',
    labelButton: 'Ok, entendi',
    children: (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '32px'
            }}
        >
            <img src="https://cdn-images.frstfalconi.cloud/dowload.png" />
            <p style={{ marginTop: '32px', fontFamily: 'PT Sans', fontSize: '18px', color: '#222', fontWeight: 700 }}>
                Arquivo enviado! Verifique sua caixa de entrada.
            </p>
            <p style={{ marginTop: '16px', fontFamily: 'PT Sans', fontSize: '16px', color: '#222' }}>
                Devido a questões de segurança o arquivo foi enviado para o seu e-mail:
            </p>
            <p style={{fontFamily: 'PT Sans', fontSize: '16px', color: '#222', marginBottom: '19px' }} >emaildapessoa@mail.com</p>
        </div>
    )
}
