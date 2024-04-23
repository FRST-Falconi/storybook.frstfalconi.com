import '../../../shared/global.css'
import { FaseCinco, FaseDois, FaseQuatro, FaseTres, FaseUm, WarnCard, FaseFinalizada } from '@shared/icons'
import * as S from './styles'
import MenuMore from '@components/menu-more'

interface CardDefinicaoFaseProps {
  cardTitle?: string
  cardDescription?: string
  handleClickContinue?: () => void
  handleToView?: () => void
  optionsMenuMore?: any | any[]
  Hypotheshis?: number
  HypothesesToTest?: number
  Actions?: number
  titleFase?: string
  fase?: 'finalizado' | '1' | '2' | '3' | '4' | '5'
  textButton?: string
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
        return <FaseFinalizada />
      default:
        return <FaseUm />
    }
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.PhaseNumber>{props.fase ? handleFase() : <FaseUm />}</S.PhaseNumber>
      </S.HeaderContainer>
      <S.DescriptionContainer>
        <S.CardTitlePhase>{props.titleFase ? props.titleFase : 'Definição'}</S.CardTitlePhase>
        <S.TitleDescription> {props.cardTitle}</S.TitleDescription>
        <S.Description> {props.cardDescription}</S.Description>
      </S.DescriptionContainer>
      <S.HypothesysAndActions>
        <div className="items">
          <img src="https://cdn-images.frstfalconi.cloud/hall/hyphotese.svg" alt="" />
          <p className="text-items">Hipóteses</p>
          <p className="number-items">{props.Hypotheshis ? props.Hypotheshis : 0}</p>
        </div>
        <div className="items">
          <img src="https://cdn-images.frstfalconi.cloud/hall/actions.svg" alt="" />
          <p className="text-items">Ações</p>
          <p className="number-items">{props.Actions ? props.Actions : 0}</p>
        </div>
      </S.HypothesysAndActions>
      {props.HypothesesToTest && (
        <S.PendingHypotheses>
          <WarnCard />
          <span style={{ fontSize: '14px', fontFamily: 'PT Sans', color: '#334155' }}>
            Ainda existem <span style={{ fontWeight: 700 }}>{props.HypothesesToTest} hipóteses</span> que não foram
            testadas.
          </span>
        </S.PendingHypotheses>
      )}

      {props.fase === 'finalizado' ? (
        <S.ButtonContainer>
          <p onClick={props.handleToView}>{props.textButton ? props.textButton : 'Visualizar'}</p>
          <MenuMore style={{ position: 'absolute', right: '1rem' }} isDarkMode={true} options={props.optionsMenuMore} />
        </S.ButtonContainer>
      ) : (
        <S.ButtonContainer>
          <p onClick={props.handleToView}>{props.textButton ? props.textButton : 'Continuar desafio'}</p>
          <MenuMore style={{ position: 'absolute', right: '1rem' }} options={props.optionsMenuMore} />
        </S.ButtonContainer>
      )}
    </S.Container>
  )
}