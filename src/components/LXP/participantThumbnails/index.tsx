import '../../../shared/global.css'
import * as S from './participantThumbnails'
import { FRSTTheme } from '../../../theme'
import { useState } from 'react'
import Popover from '@material-ui/core/Popover'
import { text } from 'stream/consumers'

interface ParticipantThumbnails {
  imgThumbnails?: any
  titleThumbnail?: string
  descpThumbnail?: string
  handleFunctionThumbnail?: () => void
  author?: string
}

export default function ParticipantThumbnails({
  imgThumbnails,
  titleThumbnail,
  descpThumbnail,
  handleFunctionThumbnail,
  author
}: ParticipantThumbnails) {
  const [seeMore, setSeeMore] = useState(true)

  const defaultImg = 'https://lxp-cdn.frstfalconi.cloud/thumbParticipant.png'

  const textLarge = descpThumbnail.length >= 100

  return (
    <S.CardThumbnails
      theme={FRSTTheme}
      onClick={() => {
        !textLarge && handleFunctionThumbnail()
      }}
      style={!textLarge ? { cursor: 'pointer' } : { cursor: 'auto' }}
    >
      <img
        src={imgThumbnails ? imgThumbnails : defaultImg}
        alt={titleThumbnail}
        onClick={() => {
          textLarge && handleFunctionThumbnail()
        }}
      />
      <p className="title">{titleThumbnail}</p>
      {author && (
        <p className="author">
          com <span>{author}</span>
        </p>
      )}
      <S.DescriptionThumbnails theme={FRSTTheme} onClick={() => textLarge && setSeeMore((prev) => !prev)}>
        <p className={textLarge && seeMore ? 'short' : ''}>{descpThumbnail}</p>

        {textLarge && <small>{seeMore ? 'Ver mais' : 'Ver menos'}</small>}
      </S.DescriptionThumbnails>
    </S.CardThumbnails>
  )
}
