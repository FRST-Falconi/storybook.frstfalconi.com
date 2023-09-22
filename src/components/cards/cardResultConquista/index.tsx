import Avatar from '@components/avatar'
import '../../../shared/global.css'
import { FRSTTheme } from '../../../theme'
import style from './cardResultConquista.module.css'
import Conquista from './Icons/Conquista.png'
import ConquistaPressed from './Icons/ConquistaPressed.png'
import Aprendizado from './Icons/Aprendizado.png'
import AprendizadoPressed from './Icons/AprendizadoPressed.png'
import { ApiRounded } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import Tooltip from '@components/DS/tooltip'

interface CardResultConquistaProps {
  userAvatar?: string
  /**
   * @prop {number} statusCard: Qual card será exibido: 1 - Conquista, 2 - Aprendizado
   */
  statusCard: number
  userName: string
  userArea: string
  description: string
  problemId: string

  onClick?: (problemId: string) => void
  onClickAvatar?: () => void
  onClickName?: () => void

  textMoreDetails?: string
  textVisitProfile?: string
  style?: React.CSSProperties
}

/**
 * @param {CardResultConquistaProps} props
 */
export default function CardResultConquista(props: CardResultConquistaProps) {
  const [isPressed, setIsPressed] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setIsPressed(false), 1000)
    return () => clearTimeout(timer)
  }, [isPressed])

  const [btnViewMore, setBtnViewMore] = useState('')
  useEffect(() => {
    setBtnViewMore(props.textMoreDetails)
  }, [props.textMoreDetails])

  return (
    <div
      className={style.container}
      style={{ ...props.style, backgroundColor: isPressed ? '#FF4D0D' : '#FFF' }}
    >
      <div className={style.cardAvatar}>
        <Avatar size="50px" src={props.userAvatar} onClick={props.onClickAvatar} isActiveClick={!!props.onClickAvatar} />
        <span>&nbsp;&nbsp;</span>
        {props.statusCard === 1 ? (
          isPressed ? (
            <img src={ConquistaPressed} alt="Icone de conquista" />
          ) : (
            <img src={Conquista} alt="Icone de conquista" />
          )
        ) : isPressed ? (
          <img src={AprendizadoPressed} alt="Icone de aprendizado" />
        ) : (
          <img src={Aprendizado} alt="Icone de aprendizado" />
        )}
      </div>
      {props.onClickName ? 
        <Tooltip
            direction="bottom"
            content={props.textVisitProfile ? props.textVisitProfile : 'Visitar perfil'}
            trigger='hover'
            width='101px'
            height='32px'
            style={{ top: '10px', textAlign: 'center' }}
        >
          <span
            style={{ color: isPressed ? '#FFF' : '#222', fontWeight: 600, fontSize: 16, marginTop: 12, cursor: props.onClickName ? 'pointer' : 'auto' }}
            onClick={props.onClickName}
          >
            {props.userName}
          </span>
        </Tooltip>
      : 
        <span
          style={{ color: isPressed ? '#FFF' : '#222', fontWeight: 600, fontSize: 16, marginTop: 12 }}
          onClick={props.onClickName}
        >
          {props.userName}
        </span>
      }
      <span style={{ color: isPressed ? '#FFF' : '#222', fontWeight: 400, fontSize: 12, marginTop: 4 }}>
        {props.userArea}
      </span>

      <div
        className={style.description}
        style={{
          color: isPressed ? '#FFD600' : '#FF4D0D',
          fontWeight: 500,
          fontSize: 16,
          textAlign: 'center',
          marginTop: 12
        }}
      >
        {props.description}
      </div>
      <div
        onClick={() => {
          props.onClick(props.problemId)
          setIsPressed(true)
        }}
        className={style.verMais}
        style={{cursor: 'pointer'}}
      >
        {btnViewMore ? btnViewMore : 'Mais detalhes'}
      </div>
    </div>
  )
}
