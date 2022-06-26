
import { Grid, Box, Modal } from '@mui/material'
import style from './statusProblema.module.css'
import Button from '../../buttons/index'
import Avatar from '../../avatar/index'
import problemaFRST from './problemaFRST.png'
import FecharIcon from './fecharIcon'
import { CorrectInCicleIcon, WarningInCicleIcon, ErrorInCicleIcon} from '../../../shared/icons'
import {AlertCicle, CloseIcon} from '../../../shared/icons'

type enumStatus = 'aprovar' | 'revisar' | 'aguardar'

interface ModalStatusProblemaProps {
    open: boolean,
    title?: string,
    description?: string,
    approves: any[],

    handleClose: () => void,
    style: React.CSSProperties
    
}

interface ApprovesItemProps{
    avatar?: string,
    nomeAvatar: string,
    dataAvatar: string,
    statusApprove: enumStatus
}

function ApprovesItem(props: ApprovesItemProps){

        return (
            <div className={style.containerItem} >
                <div className={style.avatar}>
                    <Avatar src={props.avatar} size='120px' />
                    <span style={{ marginTop: 4, color: '#FF4D0D', fontWeight: 600 }}>{props.nomeAvatar}</span>
                    <span style={{ fontSize: 14, color: '#222222', fontWeight: 400 }}>{props.dataAvatar}</span>
                </div>
                {
                    props.statusApprove === 'aprovar' ?
                    <CorrectInCicleIcon/>
                    : props.statusApprove === 'revisar' ?
                    <WarningInCicleIcon/>
                    : <ErrorInCicleIcon/>
                } 
                <div style={{marginBottom: 30}}>
                    <Avatar src={problemaFRST} size='120px'  />
                </div>
            </div>
        )
    

}

export default function ModalStatusProblema(props: ModalStatusProblemaProps) {
    
    
    return (
        <Modal open={props.open} onClose={props.handleClose} >
            
            <Box className={style.modalBox} style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', ...props.style}}>
                <div className={style.fechar} onClick={props.handleClose}>
                <span style= {{marginRight: 10}} > Fechar </span> <CloseIcon />
                </div>
                <div className={style.titulo}>
                    {props.title}
                </div>
                <div className={style.container} style={{height: props.approves.length >= 3 ? 555 : 185 * props.approves.length}} >

                    {
                        props.approves.map((item, index) => (                 
                            <ApprovesItem nomeAvatar={item.nome} dataAvatar={item.data} statusApprove={item.approve} avatarFoto={item.avatarFoto} key={index}  />
                        ))
                    }

                </div>
                <div className={style.descricao}>
                    {props.description}
                </div>
                <div className={style.conclusao}>
                    <Button 
                        variant='primary'
                        label='Ok, fechar'
                        handleClick={props.handleClose}
                    />
                </div>
                        
            </Box>
        </Modal>
    )
}