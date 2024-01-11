import { relative } from 'path';
import { useEffect, useState } from 'react'
import style from './TextIcon.module.css'

///-----------------------------------------
/// Interface do Componente
interface TextIconParams {
  /**
   * @prop {string} description: Valor do texto
   */
  description: string;
  /**
   * @prop {<React.SVGProps<SVGSVGElement>>} svg: Informar a tag da props. Ex.: "svg={<StarIcon color="black"/>}""
   */  
  svg?: React.SVGProps<SVGSVGElement>;
   /**
   * @prop {<React.SVGProps<SVGSVGElement>>} linkImage: Link de imagens em PNG, JPEG...
   */  
  linkImage?: React.SVGProps<SVGSVGElement>;
   /**
    * @prop {React.CSSProperties} style: Styles de CSS adicional
    */  
  style?: React.CSSProperties;

  flexStart?: boolean;
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente 
 */
export default function TextIcon(props: TextIconParams) {

  const MapColorStart = [
    '#222222',
    '#000000',
  ]

  return (

    <>    
      <div className={style.container} style={{...props.style }}>
    
        <div style={{display: 'flex',  width: '100%', justifyContent: 'flex-start', alignItems: props.flexStart ? 'flex-start' : 'center'}}>          
          <div style={{display:props.flexStart ? "inline" : 'inline-flex', position: 'relative', justifyContent: 'center', alignItems:props.flexStart ? 'flex-start' : 'center'}}>            
            {props.svg}
          </div>
          <div style={{display:props.flexStart ? "inline" : 'inline-flex', marginLeft: 8, whiteSpace: 'pre-wrap'}}>
            {props.description}           
          </div>          
        </div>

        

      </div>
    </>
  )


}

