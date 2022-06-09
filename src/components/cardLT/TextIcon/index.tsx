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
    
        <div style={{display: 'flex',  width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>          
          <div style={{display: 'inline-flex', width: 30, height: 30, position: 'relative', justifyContent: 'center', alignItems: 'center'}}>            
            {props.svg}
          </div>
          <div style={{display: 'inline-flex', marginLeft: 8}}>
            {props.description}           
          </div>          
        </div>

        

      </div>
    </>
  )


}

