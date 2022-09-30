
import React, {useState, useEffect} from 'react'

import style from './Planet.module.css'

///-----------------------------------------
/// Interface do Componente
interface StepParams {
  /**
   * @prop {number} step: Step (Marte, Júpter, Saturno, Urano, Netuno)
   */
   step: number
  /**
   * @prop {string} status: Status Planeta (B- Bloqueado, I- Inativo e A- Ativo)
   */
   status : string
   idioma? : 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */  
  style?: React.CSSProperties
  /**
   * @prop {() => void} onClick: Função que será executada quando houver o click do botão
   */
  onClick?: () => void
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function Steps(props: StepParams) {

  const TypeStep = [
    'https://api-motor.s3.amazonaws.com/marte.png',
    'https://api-motor.s3.amazonaws.com/jupter.png',
    'https://api-motor.s3.amazonaws.com/saturno.png',
    'https://api-motor.s3.amazonaws.com/urano.png',
    'https://api-motor.s3.amazonaws.com/netuno.png',
  ]

  const TypeStepNamePTBR = [      
    'Marte',
    'Júpiter',
    'Saturno',
    'Urano',
    'Netuno',
  ]

  const TypeStepNamePT = [      
    'Marte',
    'Júpiter',
    'Saturno',
    'Urano',
    'Netuno',
  ]

  const TypeStepNameEN = [      
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptuno',
  ]

  const TypeStepNameES = [      
    'Marte',
    'Júpiter',
    'Saturno',
    'Urano',
    'Netuno',
  ]

  const mapTraducao = new Map()
  mapTraducao.set("pt-BR", TypeStepNamePTBR)
  mapTraducao.set("pt-PT", TypeStepNamePT)
  mapTraducao.set("en-US", TypeStepNameEN)
  mapTraducao.set("es", TypeStepNameES)

  const [Idioma, setIdioma] = useState(props.idioma ? props.idioma : 'pt-BR');

  useEffect(() => {
    setIdioma(props.idioma ? props.idioma : 'pt-BR')
  }, [props.idioma])

  return (
    <>    
      <div className={style.container} style={{...props.style}} onClick={() => {
        if (props.status !== 'B') {
          props.onClick()
        }
      }}>
        <img src={TypeStep[props.step-1]} 
          className={
              props.status === "A" ? 
                style.imgAtive 
              : props.status === "I" ? 
                style.imgInative 
              : style.imgBlocked} />
        <div className={style.label}>{mapTraducao.get(Idioma)[props.step-1]}</div>
        {
          props.status === 'B' &&        
          <div className={style.block}>
            <img src={'https://api-motor.s3.amazonaws.com/lock.png'}  />
          </div>
        }        
      </div>
    </>
  )
}

