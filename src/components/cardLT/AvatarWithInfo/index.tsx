
import React, { useEffect, useState } from 'react'
import style from './avatarWithInfo.module.css'
import Avatar from '../../avatar'
import Vector from './vector'


///-----------------------------------------
/// Interface do Componente
interface AvatarWithInfoParams {
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
export default function AvatarWithInfo(props: AvatarWithInfoParams) {


  return (

    <>    
      <div className={style.container} style={{...props.style }}>

        <Avatar size='40px' src={props.fotoAvatar}/>
        <span style={{fontWeight:600, marginLeft: 8, marginRight: 4}}>{props.nomeCompleto}</span> <Vector /> <span style={{fontWeight:400, marginLeft: 4, marginRight: 8, textAlign: 'center'}}>{props.cargo}</span>
               
      </div>
    </>
  )


}
