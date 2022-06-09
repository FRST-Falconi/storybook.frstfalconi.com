
import React, { useEffect, useState } from 'react'
import style from './userCard.module.css'
import Avatar from '../../avatar'
import Vector from './vector'


///-----------------------------------------
/// Interface do Componente
interface UserCardParams {
  /**
   * @prop {string} fotoAvatar: Foto do perfil do usuario
   */
   fotoAvatar ?: string;
  /**
   * @prop {string} nomeCompleto: nome completo do usuario
   */
   nomeCompleto : string;
  /**
   * @prop {string} cargo: Cargo do usuario
   */
   cargo : string;
  /**
   * @prop {React.CSSProperties} style: Styles de CSS adicional
   */  
  style?: React.CSSProperties;
  
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente Planet: Componente responsável por gerenciar os controles dos steps das missões
 */
export default function UserCard(props: UserCardParams) {


  return (

    <>    
      <div className={style.container} style={{...props.style }}>

        <Avatar size='40px'/>
        <span style={{fontWeight:600}}>{props.nomeCompleto}</span> <Vector /> <span style={{fontWeight:400}}>{props.cargo}</span>
               
      </div>
    </>
  )


}
