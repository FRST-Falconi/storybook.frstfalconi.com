import React, { useState } from 'react'
import '../../../shared/global.css'
import style from './modal.module.css'
import Button from '@components/buttons'
import { CloseIcon } from '@shared/icons'
import { Grid, Box, Modal } from '@mui/material'


export default function ModalLXP(props: any) {
  return (
    <Modal open={props.open} onClose={props.handleClose} >
        
        <Box className={style.modalBox} style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', ...props.style}}>
            <div className={style.fechar} onClick={props.handleClose}>
                <CloseIcon />
            </div>
            <div className={style.titulo}>
                {props.title}
            </div>
            <div className={style.container} >
                {props.children}
            </div>
            <div className={style.conclusao}>
                {
                    props.confirmationButton ?
                        props.cancelButton ?
                            <>
                                <Button 
                                    variant="link" 
                                    label={props.confirmationButton} 
                                    handleClick={() => {
                                        props.handleConfirmation()
                                        props.handleClose()
                                    }} 
                                />
                                <span style={{marginRight: 8, marginLeft: 8}}>{props.language === 'en-US' ? 'or' : 'ou'}</span>
                                <Button 
                                    variant='primary' 
                                    label={props.cancelButton} 
                                    handleClick={props.handleClose} 
                                />
                            </>
                        :
                            <Button 
                                variant="primary" 
                                label={props.confirmationButton} 
                                handleClick={() => {
                                    props.handleConfirmation()
                                    props.handleClose()
                                }} 
                            />
                    :
                    <></>
                }

            </div>                    
        </Box>
    </Modal>
  )
}