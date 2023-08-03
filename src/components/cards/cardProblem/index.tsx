import '../../../shared/global.css'
import { useState, useEffect, useLayoutEffect } from 'react'
import {
  EditIcon,
  CheckboxChecked,
  CheckboxEmpty,
  WithTrail,
  WithoutTrail,
  SawBadgeIcon,
  CardFinished
} from '@shared/icons'
import style from './cardProblem.module.css'
import Avatar from '../../avatar/index'
import TextIcon from '@components/cardLT/TextIcon'
import Button from '@components/buttons'

interface CardProblemProps {
  selected: boolean
  language: string
  isButtonVerMais: boolean
  handleSelect?: (id: string) => void
  onClick?: (problemID: string) => void
  onClickAvatar?: () => void
  onClickName?: () => void
  isActiveClickProfile?: boolean
  problemID: string
  userName: string
  userCargo: string
  /**
   * @prop {string} problemStatus: Qual o status do problema: (finalizado, proxPassos, resultadosAprendizados, testesRealizados, hipoteseLevantada, problemaDefinido, problemaCriado)
   */
  problemStatus: string
  userAvatar?: string

  cardTitle?: string
  /**
   * @prop {string} statusProblema: Qual o status do problema (aprovado, revisar ou aguardando)
   */
  statusProblema?: string
  trilhaVinculada?: string
  lastUpdated?: string
  isVerified?: boolean
}

const translate = {
  'pt-BR': {
    notStarted: 'Não iniciou',
    finished: 'Finalizado',
    nextSteps: 'Próximos passos',
    resultsAndLearnings: 'Resultados',
    testsPerformed: 'Testes',
    hypothesesTaised: 'Hipóteses',
    problemDefined: 'Definição',
    problemCreated: 'Problema criado',
    evaluation: 'avaliação',
    impact: 'Impacto',
    relevance: 'Relevância',
    problemApproved: 'Problema aprovado',
    reviewProblem: 'Revisar problema proposto',
    waitingApproval: 'Aguardando aprovação',
    linkedTrail: 'Vinculado à trilha',
    notLinkedTrail: 'Ainda não está vinculado a uma trilha',
    verifiedChallenge: 'Desafio verificado',
    challenge: 'Desafio',
    viewMore: 'Ver mais'
  },
  'en-US': {
    notStarted: 'Not started',
    finished: 'Finished',
    nextSteps: 'Next steps',
    resultsAndLearnings: 'Results',
    testsPerformed: 'Tests',
    hypothesesTaised: 'Hypothesis',
    problemDefined: 'Definition',
    problemCreated: 'Problem created',
    evaluation: 'evaluation(s)',
    impact: 'Impact',
    relevance: 'Relevance',
    problemApproved: 'Problem approved',
    reviewProblem: 'Review proposed problem',
    waitingApproval: 'Waiting for approval',
    linkedTrail: 'Linked to trail',
    notLinkedTrail: 'Not yet linked to a trail',
    verifiedChallenge: 'Verified Challenge',
    challenge: 'Challenge',
    viewMore: 'View more'
  },
  'es-ES': {
    notStarted: 'No empezado',
    finished: 'Acabado',
    nextSteps: 'Próximos pasos',
    resultsAndLearnings: 'Resultados',
    testsPerformed: 'Pruebas',
    hypothesesTaised: 'Hipótesis',
    problemDefined: 'Definición',
    problemCreated: 'Problema creado',
    evaluation: 'evaluación',
    impact: 'Impacto',
    relevance: 'Relevancia',
    problemApproved: 'Problema aprobado',
    reviewProblem: 'Revisar el problema propuesto',
    waitingApproval: 'Aguardando aprobación',
    linkedTrail: 'Vinculado a sendero',
    notLinkedTrail: 'Aún no vinculado a un sendero',
    verifiedChallenge: 'Desafío verificado',
    challenge: 'Desafío',
    viewMore: 'Ver más'
  }
}

const isValidLanguage = (lang) => {
  return lang == 'en-US' || lang == 'pt-BR' || lang == 'es-ES'
}

/**
 * @param {CardProblemProps} props
 */
export default function CardProblem(props: CardProblemProps) {
  const [languageSlected, onChangeLanguage] = useState(isValidLanguage(props.language) ? props.language : 'pt-BR')

  useEffect(() => {
    onChangeLanguage(isValidLanguage(props.language) ? props.language : 'pt-BR')
  }, [props.language])

  const [statusName, setStatusName] = useState(translate[languageSlected]['notStarted'])
  const [selected, setSelected] = useState(props.selected)

  const [statusColor, setStatusColor] = useState('')

  useEffect(() => {
    switch (props.problemStatus) {
      case 'finalizado':
        setStatusColor('#158214'), setStatusName(translate[languageSlected]['finished'])
        break
      case 'proxPassos':
        setStatusColor('#222222'), setStatusName(translate[languageSlected]['nextSteps'])
        break
      case 'resultadosAprendizados':
        setStatusColor('#AD005C'), setStatusName(translate[languageSlected]['resultsAndLearnings'])
        break
      case 'testesRealizados':
        setStatusColor('#663366'), setStatusName(translate[languageSlected]['testsPerformed'])
        break
      case 'hipoteseLevantada':
        setStatusColor('#F8B911'), setStatusName(translate[languageSlected]['hypothesesTaised'])
        break
      case 'problemaDefinido':
        setStatusColor('#252BB1'), setStatusName(translate[languageSlected]['problemDefined'])
        break
      case 'problemaCriado':
      default:
        setStatusColor(''), setStatusName('')
        break
    }
  }, [props.problemStatus, languageSlected])

  useEffect(() => {
    setSelected(props.selected)
  }, [props.selected])

  // Função para pegar o width da tela
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const BREAKWIDTH = 450

  return (
    <div
      className={style.container}
      style={{
        border: '1px solid ',
        borderColor: statusColor,
        backgroundColor: selected ? '#FF4D0D' : '#FFF',
        color: selected ? '#FFF' : '#000'
      }}
    >
      <div
        className={style.tagStatusProblem}
        style={{
          background: statusColor,
          color: statusName === translate[languageSlected]['hypothesesTaised'] ? '#222222' : '#FFF'
        }}
      >
        {statusName}
        {statusName === translate[languageSlected]['finished'] && (
          <div style={{ marginLeft: '0.5rem' }}>
            <CardFinished />
          </div>
        )}
      </div>

      <div
        className={style.checkBox}
        onClick={() => {
          props.handleSelect(props.problemID)
        }}
      >
        {selected ? <CheckboxChecked /> : <CheckboxEmpty />}
      </div>
      <div className={style.contentCard}>
        <div className={style.avatarInfoUser}>
          <div>
            {' '}
            <Avatar size="40px" src={props.userAvatar} onClick={props.onClickAvatar} isActiveClick={props?.isActiveClickProfile}/>{' '}
          </div>
          <div className={style.infoUser}>
            <span style={{ fontSize: 16, fontWeight: 600, cursor: props?.isActiveClickProfile ? 'pointer': 'auto' }} onClick={props.onClickName}>
              {props.userName}
            </span>
            <span style={{ fontSize: 14, fontWeight: 400 }}>{props.userCargo}</span>
          </div>
        </div>

        {props.isVerified ? (
          <div style={{ textAlign: 'center', display: 'flex' }}>
            <div style={{ color: selected ? '#FFF' : '#000', width: '100%', fontWeight: 700 }}>
              <span>{translate[languageSlected]['verifiedChallenge']}</span>
            </div>
            <SawBadgeIcon />
          </div>
        ) : (
          <div style={{ color: selected ? '#FFF' : '#000', width: '100%', fontWeight: 700 }}>
            <span>{translate[languageSlected]['challenge']}</span>
          </div>
        )}

        {props.cardTitle && (
          <div className={style.tituloCard} style={{ color: selected ? '#FFF' : '#FF4D0D', width: '100%' }}>
            <span>{props.cardTitle}</span>
          </div>
        )}

        {statusName !== translate[languageSlected][6] ? (
          props.trilhaVinculada ? (
            <TextIcon
              description={`${translate[languageSlected]['linkedTrail']} ${props.trilhaVinculada}`}
              svg={<WithTrail />}
              style={{ fontSize: 12, fontWeight: 400, marginTop: 8 }}
            />
          ) : (
            <TextIcon
              description={translate[languageSlected]['notLinkedTrail']}
              svg={<WithoutTrail />}
              style={{ fontSize: 12, fontWeight: 400, marginTop: 8 }}
            />
          )
        ) : (
          <></>
        )}
        {props.lastUpdated && (
          <div style={{ color: '#000', fontSize: 12, fontWeight: 400, marginTop: 40 }}>{props.lastUpdated} </div>
        )}

        {props.isButtonVerMais && (
          <div className={style.buttonVerMais}>
            <Button
              variant="link"
              label={translate[languageSlected]['viewMore']}
              handleClick={() => props.onClick(props.problemID)}
            />
          </div>
        )}
      </div>
    </div>
  )
}
