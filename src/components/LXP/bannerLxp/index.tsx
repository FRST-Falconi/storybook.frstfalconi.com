import Button from '@components/buttons'
import TextField from '@components/form-elements/textfield'
import { Modal, Box } from '@mui/material'
import { display } from '@mui/system'
import { useState } from 'react'
import style from './bannerLxp.module.css'
interface BannerLxpParams{
    title: string
    titleColor?: string
    bgSrc?: string
    bgColor?: string
    isDisabledText?: boolean
    style?: React.CSSProperties
}

export default function BannerLxp ( props : BannerLxpParams) {

    const [displayConfigButton, setDisplayConfigButton] = useState(false)
    const [openConfig, setOpenConfig] = useState(false)

    const handleConfigButton = () => { setDisplayConfigButton(!displayConfigButton)}
    
    function configBanner (){
        console.log('Entrado no config!')
        return(
            <Modal open={openConfig}  >
                <Box className={style.configContainer} style={{...props.style}}>
                    {console.log('Entrei!')}
                    <span style={{fontWeight: 700, fontSize: 16, color: '#000000'}}>Título</span>
                    <span style={{fontWeight: 400, fontSize: 16, color: '#222222'}}>Alterar título do KnowHub</span>

                </Box>
            </Modal>
        )
    }

    return (
        <div className={style.bannerContainer} style={{...props.style,backgroundColor: props.bgColor }} >
            {!props.isDisabledText ?
                <span style={{color: props.titleColor ? props.titleColor : '#FFF', fontSize: 40, fontWeight: 700 }}>{props.title}</span>
                : ''
            }
            <div className={style.configButton}> 
                <Button variant='primary' label='Configuração de capa' handleClick={ () => {
                    configBanner()
                    setOpenConfig(true)
                }} /> 
            </div>
        </div>
    )
}