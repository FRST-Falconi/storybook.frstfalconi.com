import React from 'react'
import { ConfirmationModal } from '../ConfirmationModal'

interface ModalDownloadProps {
    handleCloseModal: () => void
    open: boolean
    emailUser: string
}

export const ComfirmModalDownload = ({ emailUser, handleCloseModal, open }: ModalDownloadProps) => {
    return (
        <>
            <ConfirmationModal
                onClose={handleCloseModal}
                labelButton="Ok, entendi"
                onConfirm={handleCloseModal}
                open={open}
                title="Download de arquivo"
            >
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
                    <p
                        style={{
                            marginTop: '32px',
                            fontFamily: 'PT Sans',
                            fontSize: '18px',
                            color: '#222',
                            fontWeight: 700
                        }}
                    >
                        Arquivo enviado! Verifique sua caixa de entrada.
                    </p>
                    <p style={{ marginTop: '16px', fontFamily: 'PT Sans', fontSize: '16px', color: '#222' }}>
                        Devido a questões de segurança o arquivo foi enviado para o seu e-mail:
                    </p>
                    <p style={{ fontFamily: 'PT Sans', fontSize: '16px', color: '#222', marginBottom: '19px' }}>
                        {emailUser}
                    </p>
                </div>
            </ConfirmationModal>
        </>
    )
}
