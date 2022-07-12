import { useState, useLayoutEffect } from 'react'
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
    statusApprove: enumStatus,
    size: string
}

function ApprovesItem(props: ApprovesItemProps){

        return (
            <div className={style.containerItem} >
                <div className={style.avatar}>
                    <Avatar src={props.avatar} size={props.size} />
                    <span style={{ marginTop: 4, color: '#FF4D0D', fontWeight: 600 }}>{props.nomeAvatar}</span>
                    <span style={{ fontSize: 14, color: '#222222', fontWeight: 400 }}>{props.dataAvatar}</span>
                </div>
                {
                    props.statusApprove === 'aprovar' ?
                    <CorrectInCicleIcon width='30' height='30'/>
                    : props.statusApprove === 'revisar' ?
                    <ErrorInCicleIcon width='30' height='30'/>
                    : <WarningInCicleIcon width='30' height='30'/>
                } 
                <div style={{marginBottom: 30}}>
                    <Avatar src={problemaFRST} size={props.size}  />
                </div>
            </div>
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
                            <ApprovesItem size={(size[0] >= BREAKWIDTH) ? '120px' : '80px'} nomeAvatar={item.nome} dataAvatar={item.data} statusApprove={item.approve} avatar={item.avatarFoto} key={index}  />
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