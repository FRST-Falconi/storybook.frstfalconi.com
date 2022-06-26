

import style from './RatingCurtidas.module.css'
import RocketButton from '../RocketButton/index'


///-----------------------------------------
/// Interface do Componente
interface RatingCurtidasParams {
  /**
   * @prop {number} tipoBotao: Tipos de botão (1- Fundo Branco, rocket laranja. 2- Fundo Laranja, rocket branco. 3- Fundo cinza, rocket branco, 4- Fundo Branco, rocket preto)
  */
  tipoBotao: number;

  titulo: string;

  qtdeCurtidas: number;
  
  style?: React.CSSProperties;
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente 
 */
export default function RatingCurtidas(props: RatingCurtidasParams) {

  const MapColorPrimaria = [
    '#FF4D0D',
    '#FFFFFF',
    '#FFFFFF',
    '#222222'
  ]

  const MapColorSecundaria = [
    '#FFFFFF',
    '#FF4D0D',
    '#CCCCCC',
    '#FFFFFF'
  ]

  return (

    <>    
      <div className={style.container} style={{...props.style }}>
        <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: 16, fontWeight: 600}}>
            {props.titulo}
        </div>

        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          
          <div style={{display: 'inline-flex', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', position:'relative'}}>
            
            <RocketButton tipoBotao={props.tipoBotao} />
            
          </div>
          <div style={{display: 'inline-flex', width: 90, marginLeft: 4}}>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap',width: 100 }}>
              <span style={{fontSize: 14, fontWeight: 600}}>{props.qtdeCurtidas ? props.qtdeCurtidas : 0}</span>
              <span style={{fontSize: 12, fontWeight: 400}}>{props.qtdeCurtidas > 1 ? `pessoas` : props.qtdeCurtidas === 1 ? `pessoa` : `curtidas`}</span>
            </div>
            
          </div>
          
        </div>

      </div> 
    </>
  )


}

