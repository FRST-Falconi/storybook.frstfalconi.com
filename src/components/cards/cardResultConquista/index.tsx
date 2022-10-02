import Avatar from '@components/avatar'
import '../../../shared/global.css'
import {FRSTTheme} from '../../../theme'
import style from './cardResultConquista.module.css'
import Conquista from './Icons/Conquista.png'
import ConquistaPressed from './Icons/ConquistaPressed.png'
import Aprendizado from './Icons/Aprendizado.png'
import AprendizadoPressed from './Icons/AprendizadoPressed.png'
import { ApiRounded } from '@mui/icons-material'
import { useEffect, useState } from 'react'

interface CardResultConquistaProps {
    userAvatar ?: string
    /**
        * @prop {number} statusCard: Qual card será exibido: 1 - Conquista, 2 - Aprendizado
    */
    statusCard: number
    userName: string
    userArea: string
    description: string
    problemId: string

    onClick?: (problemId: string) => void

    textMoreDetails ?: string
    style?: React.CSSProperties
}


/**
 * @param {CardResultConquistaProps} props
 */
export default function CardResultConquista(props: CardResultConquistaProps) {
    const [isPressed, setIsPressed] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setIsPressed(false), 1000);
        return () => clearTimeout(timer);
    },[isPressed])
    return (
        <div className={style.container} style={{ ...props.style, cursor:'pointer', backgroundColor: isPressed ? '#FF4D0D' : '#FFF'}} onClick={() => 
            {
                props.onClick(props.problemId)
                setIsPressed(true)
            }}> 
            <div className={style.cardAvatar}>
                <Avatar size='50px' src={props.userAvatar} />
                <span>&nbsp;&nbsp;</span>
                {props.statusCard === 1 ?
                    isPressed ? 
                        <img src={ConquistaPressed} alt="Icone de conquista" />
                        :
                        <img src={Conquista} alt="Icone de conquista" />
                    :
                    isPressed ?
                        <img src={AprendizadoPressed} alt="Icone de aprendizado" />
                        :
                        <img src={Aprendizado} alt="Icone de aprendizado" />
                }
            </div>
            
            <span style={{color: isPressed ? '#FFF' : '#222', fontWeight: 600, fontSize: 16, marginTop: 12}}>{props.userName}</span>
            <span style={{color: isPressed ? '#FFF' : '#222', fontWeight: 400, fontSize: 12, marginTop: 4}}>{props.userArea}</span>
           
            <div className={style.description} style={{color: isPressed ? '#FFD600' : '#FF4D0D',fontWeight: 500, fontSize: 16, textAlign:'center', marginTop: 12}}>
                {props.description}
            </div>
            <div className={style.verMais}>{props.textMoreDetails ? props.textMoreDetails : "Mais detalhes"}</div>
        </div>
    )
}
