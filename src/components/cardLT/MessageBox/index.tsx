import { relative } from 'path';
import React, { useEffect, useState } from 'react'
import style from './MessageBox.module.css'

import SuccessIcon from './icons/successIcon'
import ErrorIcon from './icons/errorIcon'
import WarningIcon from './icons/warningIcon'
import { SocialDistanceOutlined } from '@mui/icons-material';

///-----------------------------------------
/// Interface do Componente
interface MessageBoxParams {
  texto: string;
  /**
   * @prop {number} tipoVisualizacao: Estilo de card (1- Mensagem sucesso, 2- Mensagem alerta, 3- Mensagem erro)
   */  
  tipoVisualizacao: number;  
   /**
    * @prop {React.CSSProperties} style: Styles de CSS adicional
    */  
  style?: React.CSSProperties;

  /**
 * @prop {() => void} onClick: Função que será executada quando houver o click do botão
 */
  onClick?: () => void

}

///-----------------------------------------
/// Componente

/**
 * 
 * @componente 
 */
export default function MessageBox(props: MessageBoxParams): any {

  const MapBorderColor = [
    '#2CA92A',
    '#FFC200',
    '#EA0000',
  ]
  
  const MapBackgroundColor = [
    '#D1F6D1',
    '#FEF0D4',
    '#FFE5E5',
  ]  

  const MapIconList = [
    <SuccessIcon />,
    <WarningIcon />,
    <ErrorIcon />,
  ]


  return (


    <>    
      <div 
        className={
          `${props.tipoVisualizacao === 1 ? style.success 
            : props.tipoVisualizacao === 2 ? style.warning
            : props.tipoVisualizacao === 3 ? style.error 
            : '' } ${style.container}`
        } 
        style={{
          cursor: props.onClick ? 'pointer' : 'default',
          ...props.style
        }}
        onClick={
          props.onClick
        }
      >
        <div 
          className={style.square}
          style={{
            backgroundColor: MapBorderColor[props.tipoVisualizacao-1],
          }}
        >
          {MapIconList[props.tipoVisualizacao-1]}    
          
        </div>
        <div
          style={{
            display: 'inline-flex', 
            width: 'calc(100% - 30px)'
          }}
        >
          {props.texto}
        </div>
      </div>
    </>
  )


}

