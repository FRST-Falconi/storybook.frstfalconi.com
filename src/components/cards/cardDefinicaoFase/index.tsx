import '../../../shared/global.css'
import { FaseCinco, FaseDois, FaseFinalizado, FaseQuatro, FaseTres, FaseUm } from '@shared/icons'
import style from './cardDefinicaoFase.module.css'
import Button from '@components/buttons'
import MenuMore from '@components/menu-more'

interface CardDefinicaoFaseProps {
  cardTitle?: string
  cardDescription?: string
  handleClickContinue?: () => void
  handleToView?: () => void
  optionsMenuMore?: any | any[]
  titleFase?: string
  fase?: 'finalizado' | '1' | '2' | '3' | '4' | '5'
  textButtonVisualizar?: string
  textButtonContinue?: string
}

export default function CardDefinicaoFase(props: CardDefinicaoFaseProps) {
  function handleFase() {
    switch (props.fase) {
      case '1':
        return <FaseUm />
      case '2':
        return <FaseDois />
      case '3':
        return <FaseTres />
      case '4':
        return <FaseQuatro />
      case '5':
        return <FaseCinco />
      case 'finalizado':
        return (
          <div style={{ paddingRight: '1.5rem' }}>
            <FaseFinalizado />
          </div>
        )
      default:
        return <FaseUm />
    }
  }

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <div className={style.titleFrase}>{props.titleFase ? props.titleFase : 'Definição do objetivo'}</div>
        {props.fase ? handleFase() : <FaseUm />}
      </div>
      <div className={style.descriptionContainer}>
        <div className={style.titleAndMenu}>
          <span className={style.titleDescription}> {props.cardTitle}</span>
          <MenuMore options={props.optionsMenuMore} />
        </div>
        <span className={style.description}> {props.cardDescription}</span>
      </div>
      {props.fase === 'finalizado' ? (
        <div className={style.buttonFinalizado}>
          <Button
            variant="link"
            label={props.textButtonVisualizar ? props.textButtonVisualizar : 'Visualizar'}
            handleClick={props.handleToView}
          />
        </div>
      ) : (
        <div className={style.buttonContainer}>
          <Button
            variant="link"
            label={props.textButtonVisualizar ? props.textButtonVisualizar : 'Visualizar'}
            handleClick={props.handleToView}
          />
          <div className={style.divisoria}></div>
          <Button
            variant="link"
            label={props.textButtonContinue ? props.textButtonContinue : 'Continuar'}
            handleClick={props.handleClickContinue}
          />
        </div>
      )}
    </div>
  )
}
