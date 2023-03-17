import { useState, useLayoutEffect } from 'react'
import { Box, Modal } from '@mui/material'
import style from './statusProblema.module.css'
import Button from '../../buttons/index'
import Avatar from '../../avatar/index'
import problemaFRST from './problemaFRST.png'   
import {
    StatusProblemaSawBadgeIcon,
    StatusProblemaSendIcon,
    StatusProblemaEdit
} from '../../../shared/icons'
import {CloseIcon} from '../../../shared/icons'

type enumStatus = 'guest' | 'reviewed' | 'adjustments'

interface ModalStatusProblemaProps {
    open: boolean,
    title?: string,
    description?: string,
    approves: any[],
    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es' 
    handleClose: () => void,
    style: React.CSSProperties
    
}

interface ApprovesItemProps{
    avatar?: string,
    nomeAvatar: string,
    dataAvatar: string,
    statusApprove: enumStatus,
    size: string
    avatarSize: string
}

function ApprovesItem(props: ApprovesItemProps){

        return (
            <>
                <div className={style.containerItem}>
                    <div className={style.avatar} style={{width: props.size}}>
                        <Avatar src={props.avatar} size={props.avatarSize} />
                    </div>
                    {
                        props.statusApprove === 'reviewed' ?
                        <div>
                            <StatusProblemaSawBadgeIcon />
                        </div>
                        : props.statusApprove === 'adjustments' ?
                        <div>
                            <StatusProblemaEdit/>
                        </div>
                        : 
                        <div><StatusProblemaSendIcon /></div>
                    } 
                    <div style={{width: props.size}} className={style.status_logo}>
                        <Avatar src={problemaFRST} size={props.avatarSize}  />
                    </div>
                </div>
                <div className={style.containerItem} style={{ marginTop: '8px' }}>
                    <div className={style.containerData} style={{ width: props.size }}>
                        <span className={style.name}>{props.nomeAvatar}</span>
                        <span className={style.sub_title}>{props.dataAvatar}</span>
                    </div>
                </div>
            </>
        )
    
}

export default function ModalStatusProblema(props: ModalStatusProblemaProps) {
    
    // Função para pegar o width da tela
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    const BREAKWIDTH = 500;
    
    return (
        <Modal open={props.open} onClose={props.handleClose}>
            <Box className={style.modalBox} style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', ...props.style}}>
                <div className={style.fechar} onClick={props.handleClose}>
                    <CloseIcon />
                </div>
                <div className={style.titulo}>
                    {props.title}
                </div>
                <div className={style.container} style={{height: props.approves.length >= 3 ? 555 : 185 * props.approves.length}}>
                    {props.approves.map((item, index) => (                 
                        <ApprovesItem
                            avatarSize={(size[0] >= BREAKWIDTH) ? '120px' : '100px'}
                            size={(size[0] >= BREAKWIDTH) ? '160px' : '120px'}
                            nomeAvatar={item.nome}
                            dataAvatar={item.data}
                            statusApprove={item.approve}
                            avatar={item.avatarFoto}
                            key={index}
                        />
                    ))}
                </div>
                <div className={style.modal_controls_wrapper}>
                    <div className={style.descricao}>
                        {props.description}
                    </div>
                    <div className={style.conclusao}>
                        <Button 
                            variant='primary'
                            label={props.language === 'en-US' ? 'ok, close' : 'Ok, entendi'}
                            handleClick={props.handleClose}
                            style={{ width: '100%', minWidth: '140px' }}
                        />
                    </div>
                </div> 
            </Box>
        </Modal>
    )
}
