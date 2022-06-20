
import { Grid, Box, Modal } from '@mui/material'
import style from './statusProblema.module.css'
import Button from '../../buttons/index'
import Avatar from '../../avatar/index'
import problemaFRST from './problemaFRST.png'
import FecharIcon from './fecharIcon'
import { CorrectInCicleIcon, WarningInCicleIcon, ErrorInCicleIcon} from '../../../shared/icons'

type enumStatus = 'aprovar' | 'revisar' | 'aguardar'

interface ModalStatusProblemaProps {
    open: boolean,
    title?: string,
    description?: string,
    approves: any[],

    handleClose: () => void,
    
}

interface ApprovesItemProps{
    avatarFoto?: string,
    nomeAvatar: string,
    dataAvatar: string,
    statusApprove: enumStatus
}

function ApprovesItem(props: ApprovesItemProps){

        return (
            <div className={style.containerItem} >
                <div className={style.avatar}>
                    <Avatar size='120'/>
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
                
                <img src={problemaFRST} />
            </div>
        )
    

}

export default function ModalStatusProblema(props: ModalStatusProblemaProps) {
    
    
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            
            <Box className={style.modalBox}>
                <div className={style.fechar} onClick={props.handleClose}>
                    Fechar  <FecharIcon />
                </div>
                <div className={style.titulo}>
                    {props.title}
                </div>
                <div className={style.container} style={{height: props.approves.length >= 3 ? 555 : 185 * props.approves.length}} >

                    {
                        props.approves.map((item, index) => (                 
                            <ApprovesItem nomeAvatar={item.nome} dataAvatar={item.data} statusApprove={item.approve} key={index}  />
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