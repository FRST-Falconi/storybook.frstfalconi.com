import { relative } from 'path';
import { useEffect, useState } from 'react'
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
}

///-----------------------------------------
/// Componente

/**
 * 
 * @componente 
 */
export default function MessageBox(props: MessageBoxParams) {

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
      <div className={style.container} 
        style={{
          borderWidth: 1, 
          borderColor: MapBorderColor[props.tipoVisualizacao-1], 
          borderStyle: 'solid',
          background: MapBackgroundColor[props.tipoVisualizacao-1],  
          display: 'flex',
          justifyContent: 'flex-start', 
          alignItems: 'center',
          flexDirection: 'row',
          ...props.style 
        }}
      >
        <div 
          style={{
            height: 20, 
            width: 20, 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: MapBorderColor[props.tipoVisualizacao-1],
            marginRight: 8
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

