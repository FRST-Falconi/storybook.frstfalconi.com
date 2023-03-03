import { Grid, Box, Modal } from '@mui/material'
import style from './modalLearningTech.module.css'
import Button from '../../buttons/index'
import { CloseIcon } from '@shared/icons'


type enumTypeButton = 'primary' | 'secondary' | 'link'
interface ModalLearningTechProps {
    open: boolean
    title?: string

    confirmationButton?: string
    cancelButton?: string
    /**
   * @prop {number} tipeButton: Tipos de botão (primary, secondary, link)
    */
    typeButtonConfirmation?: enumTypeButton

    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es' 

    children: React.ReactNode

    handleClose: () => void

    handleConfirmation: () => void

    style?: React.CSSProperties
    
}

export default function ModalLearningTech(props: ModalLearningTechProps) {
    
    
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
                                    <Button variant='link' label={props.cancelButton} handleClick={props.handleClose} />
                                    <span style={{marginRight: 8, marginLeft: 8}}>{props.language === 'en-US' ? 'or' : 'ou'}</span>
                                    <Button variant={props.typeButtonConfirmation} label={props.confirmationButton} handleClick={props.handleConfirmation} />
                                </>
                            :
                                <Button variant={props.typeButtonConfirmation} label={props.confirmationButton} handleClick={props.handleConfirmation} />
                        :
                        <></>
                    }

                </div>
                        
            </Box>
        </Modal>
    )
}