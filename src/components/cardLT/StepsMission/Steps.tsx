
import React, { useEffect, useState } from 'react'

import style from './Planet.module.css'

import jupter from './planets/jupter.png'
import marte from './planets/marte.png'
import netuno from './planets/netuno.png'
import urano from './planets/urano.png'
import lock from './planets/lock.png'
import saturno from './planets/saturno.png'

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
    marte,
    jupter,
    saturno,
    urano,
    netuno,
  ]

  const TypeStepName = [
    'Marte',
    'Júpter',
    'Saturno',
    'Urano',
    'Netuno',
  ]

  return (

    <>    
      <div className={style.container} style={{...props.style }} onClick={() => {
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
        <div className={style.label}>{TypeStepName[props.step-1]}</div>
        {
          props.status === 'B' &&        
          <div className={style.block}>
            <img src={lock}/>
          </div>
        }        
      </div>
    </>
  )


}

function dynamic(arg0: () => Promise<any>, arg1: { ssr: boolean; }) {
  throw new Error('Function not implemented.');
}

