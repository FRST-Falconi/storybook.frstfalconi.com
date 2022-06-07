
import RocketButtonIcon from './RocketButtonIcon';

///-----------------------------------------
/// Interface do Componente
interface RocketButtonParams {
  /**
   * @prop {number} tipoBotao: Tipos de botão (1- Fundo Branco, rocket laranja. 2- Fundo Laranja, rocket branco. 3- Fundo cinza, rocket branco)
  */
  tipoBotao: number;
  
  style?: React.CSSProperties;

  handleClick ?: ()=> void;
}

///-----------------------------------------
/// Componente



/**
 * 
 * @componente 
 */
export default function RocketButton(props: RocketButtonParams) {

  const MapColorPrimaria = [
    '#FF4D0D',
    '#FFFFFF',
    '#FFFFFF'
  ]

  const MapColorSecundaria = [
    '#FFFFFF',
    '#FF4D0D',
    '#CCCCCC'
  ]

  return (

    <>    
      <div>
        <RocketButtonIcon
          colorPrimaria = {MapColorPrimaria[props.tipoBotao-1]}
          colorSecundaria= {MapColorSecundaria[props.tipoBotao-1]}
        />

      </div> 
    </>
  )


}

