
import style from './Rating.module.css'
import StarIcon from './starIcon'

///-----------------------------------------
/// Interface do Componente
interface RatingParams {
   titulo: string;
  /**
   * @prop {number} nota: Valor da média da avaliação
   */
   nota: number;
  /**
   * @prop {string} descricaoAvaliacao: Descrição da avaliação (Ótimo, Bom...)
   */  
  descricaoAvaliacao: string;
  /**
   * @prop {number} qtdeAvaliacao: Valor a ser exibido como (23 avaliações)
   */  
  qtdeAvaliacao: number;
  /**
   * @prop {number} tipoVisualizacao: Estilo de card (1- Estrela Amarela, 2- Estrela Negra, 3- Estrela Branca)
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
export default function Rating(props: RatingParams) {

  const MapColorStar = [
    '#FFC200',
    '#000000',
    '#FFFFFF',
  ]
  const MapColorNumberStar = [
      '#FFFFFF',
      '#FFFFFF',
      '#FFC200',
  ]

  return (

    <>    
      <div className={style.container} style={{...props.style }}>

        <div className={style.titulo} style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', fontSize: 16, fontWeight: 600}}>
          {props.titulo}
        </div>

        <div className={style.content} style={{display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          
          <div className={style.star} style={{display: 'inline-flex', width: 35, height: 35, position: 'relative',justifyContent: 'center', alignItems: 'center'}}>
            <StarIcon color={MapColorStar[props.tipoVisualizacao-1]} />
            <span style={{position: 'absolute', fontSize: 10, color: MapColorNumberStar[props.tipoVisualizacao-1], fontWeight: 'bold', top: 12, textAlign: 'center'}}>
              {props.nota}
            </span>
          </div>
          <div className={style.avaliacao}>
            <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap',width: 100 }}>
              <span style={{fontSize: 14, fontWeight: 600}}>{props.descricaoAvaliacao}</span>
              <span style={{fontSize: 12, fontWeight: 400}}>{`${props.qtdeAvaliacao} avaliações`}</span>
            </div>
            
          </div>
          
        </div>

        

      </div>
    </>
  )


}

