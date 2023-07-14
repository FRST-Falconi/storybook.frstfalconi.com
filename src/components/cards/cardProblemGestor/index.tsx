import '../../../shared/global.css'
import Tag from '@components/tag'
import style from './cardProblemaGestor.module.css'
import Avatar from '../../avatar/index'

import Rating from '@components/cardLT/Rating'
import RatingCurtidas from '@components/cardLT/RatingCurtidas'

interface CardProblemGestorProps {
  problemID: string
  userName: string
  userCargo: string
  problemStatus: string
  userAvatar?: string

  tags?: string[]
  cardTitle?: string
  ratingImpacto?: any
  ratingRelevancia?: any
  ratingCurtidas?: number

  lastUpdated?: string

  onClick: (problemID: string) => void

  statusName?: string
  statusColor?: string
  statusBackgroundColor?: string
  locales?: any
}

/**
 * @param {CardProblemGestorProps} props
 */
export default function CardProblemGestor(props: CardProblemGestorProps) {
  const statusBg = props.statusBackgroundColor || '#757575'
  const statusColor = props.statusColor || '#FFFFFF'

  return (
    <div
      className={style.container}
      style={{ border: '1px solid ', borderColor: '#CCC', backgroundColor: '#FFF', color: '#000' }}
      onClick={() => props.onClick(props.problemID)}
    >
      {props.problemStatus !== 'problemaCriado' && (
        <div className={style.tagStatusProblem} style={{ background: statusBg || '#757575', color: statusColor }}>
          {props.statusName}
        </div>
      )}

      <div className={style.contentCard}>
        <div className={style.avatarInfoUser}>
          <div>
            {' '}
            <Avatar size="40px" src={props.userAvatar} />{' '}
          </div>
          <div className={style.infoUser}>
            <span style={{ fontSize: 16, fontWeight: 600 }}>{props.userName}</span>
            <span style={{ fontSize: 14, fontWeight: 400 }}>{props.userCargo}</span>
          </div>
        </div>
        {props.cardTitle && (
          <div className={style.tituloCard} style={{ color: '#FF4D0D', width: '100%' }}>
            <span>{props.cardTitle}</span>
          </div>
        )}
        {props.tags && (
          <div className={style.tagsContainer}>
            {props.tags.map((item, index) => (
              <Tag
                title={item}
                color={'#050505'}
                selected={false}
                inverted={true}
                key={index}
                style={{ fontWeight: 500, fontSize: 14, marginRight: 8, marginTop: 8 }}
              />
            ))}
          </div>
        )}
        {props.ratingImpacto && (
          <div className={style.avaliacao}>
            <Rating
              nota={props.ratingImpacto.nota}
              qtdeAvaliacao={props.ratingImpacto.qtdeAvaliacao}
              descricaoAvaliacao={props.ratingImpacto.description}
              titulo={props.locales?.impact}
              tipoVisualizacao={2}
              style={{ margin: 0, width: 120 }}
              nomeAvaliacao={props.locales?.evaluation}
            />
            <Rating
              nota={props.ratingRelevancia.nota}
              qtdeAvaliacao={props.ratingRelevancia.qtdeAvaliacao}
              descricaoAvaliacao={props.ratingRelevancia.description}
              titulo={props.locales?.relevance}
              tipoVisualizacao={2}
              style={{ margin: 0, width: 120 }}
              nomeAvaliacao={props.locales?.evaluation}
            />
            <RatingCurtidas
              qtdeCurtidas={props.ratingCurtidas}
              titulo={props.locales?.likes}
              tipoBotao={4}
              style={{ margin: 0, width: 90 }}
              descricaoCurtida={props.locales?.likesDescription}
            />
          </div>
        )}
        {props.lastUpdated && (
          <div style={{ color: '#0645AD', fontSize: 12, fontWeight: 400, marginTop: 8 }}>{props.lastUpdated} </div>
        )}
      </div>
    </div>
  )
}
