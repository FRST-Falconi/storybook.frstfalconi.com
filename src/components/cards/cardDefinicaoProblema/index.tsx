import '../../../shared/global.css'
import { useState, useEffect } from 'react'
import {
  AddIcon,
  EditIcon,
  FaseCinco,
  FaseDois,
  FaseFinalizado,
  FaseQuatro,
  FaseTres,
  FaseUm,
  OpenedEye
} from '@shared/icons'
import style from './cardDefinicaoProblema.module.css'
import Button from '@components/buttons'
import MenuMore from '@components/menu-more'

interface CardDefinicaoProblemaProps {
  problemId: string
  problemStatus: string
  backgroundImage?: string

  cardTitle?: string
  cardDescription?: string

  /**
   * @prop {number} typeButton: Tipos de botão (1 - novo problema, 2 - editar problema)
   */

  handleClick: (problemId: string) => void
  /**
   * @prop {event} event: Evento de click do visualizar problema
   */
  handleToView: () => void
  optionsMenuMore?: []
  titleFase?: string
  fase?: 'finalizado' | '1' | '2' | '3' | '4' | '5'
}

export interface CardDefinicaoProblemaTranslateProps extends CardDefinicaoProblemaProps {
  statusTextNaoIniciou?: string
  textStatusFinalizado?: string
  textStatusProximosPassos?: string
  textStatusResultadosAprendizados?: string
  textStatusTestesRealizados?: string
  textStatusHipotesesLevantadas?: string
  textsStatusProblemaDefinido?: string
  textStatusProblemaCriado?: string
  textButtonDefinirProblema?: string
  textHipotesesLevantadas?: string
  textButtonVisualizar?: string
  textButtonContinue?: string
}

/**
 * @param {CardDefinicaoProblemaTranslateProps} props
 */
export default function CardDefinicaoProblema(props: CardDefinicaoProblemaTranslateProps) {
  const [statusName, setStatusName] = useState(props.statusTextNaoIniciou ? props.statusTextNaoIniciou : 'Não iniciou')

  const [statusColor, setStatusColor] = useState('#757575')

  useEffect(() => {
    switch (props.problemStatus) {
      case 'finalizado':
        setStatusColor('#158214'), setStatusName(props.textStatusFinalizado ? props.textStatusFinalizado : 'Finalizado')
        break
      case 'proxPassos':
        setStatusColor('#222222'),
          setStatusName(props.textStatusProximosPassos ? props.textStatusProximosPassos : 'Próximos passos')
        break
      case 'resultadosAprendizados':
        setStatusColor('#AD005C'),
          setStatusName(
            props.textStatusResultadosAprendizados
              ? props.textStatusResultadosAprendizados
              : 'Resultados e aprendizados'
          )
        break
      case 'testesRealizados':
        setStatusColor('#663366'),
          setStatusName(props.textStatusTestesRealizados ? props.textStatusTestesRealizados : 'Testes realizados')
        break
      case 'hipoteseLevantada':
        setStatusColor('#F8B911'),
          setStatusName(
            props.textStatusHipotesesLevantadas ? props.textStatusHipotesesLevantadas : 'Hipóteses levantadas'
          )
        break
      case 'problemaDefinido':
        setStatusColor('#252BB1'),
          setStatusName(props.textsStatusProblemaDefinido ? props.textsStatusProblemaDefinido : 'Problema definido')
        break
      case 'problemaCriado':
      default:
        setStatusColor('#757575'),
          setStatusName(props.textStatusProblemaCriado ? props.textStatusProblemaCriado : 'Problema criado')
        break
    }
  }, [props.problemStatus])

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
            handleClick={() => props.handleToView()}
          />
        </div>
      ) : (
        <div className={style.footerContainerType2}>
          <Button
            variant="link"
            label={props.textButtonVisualizar ? props.textButtonVisualizar : 'Visualizar'}
            handleClick={() => props.handleToView()}
          />
          <div className={style.divisoria}></div>
          <Button
            variant="link"
            label={props.textButtonContinue ? props.textButtonContinue : 'Continuar'}
            handleClick={() => props.handleClick(props.problemId)}
          />
        </div>
      )}
    </div>
  )
}
