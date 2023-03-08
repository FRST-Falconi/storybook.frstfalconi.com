import '../../../shared/global.css'
import * as styleThumbnails from './participantThumbnails'
import { FRSTTheme } from '../../../theme'
import ScrollContainer from '../../scroll-container/index'

interface objThumbnails {
  imgThumbnails?: any
  titleThumbnail?: string
  descpThumbnail?: string
}
interface ParticipantThumbnails {
  listThumbnails: Array<objThumbnails>
}

export default function ParticipantThumbnails(props: ParticipantThumbnails) {
  return (
    <ScrollContainer
      type={'horizontal'}
      stepMove={100}
      isVisibleControlsButtons={true}
      sizeArrowButton={80}
      marginsArrowButton={1}
      horizontalMarginInternScroll={'0'}
      marginTopArrrowButton={'-15rem'}
    >
      {props.listThumbnails.map((item, index) => {
        return (
          <styleThumbnails.CardThumbnails theme={FRSTTheme} key={index}>
            <styleThumbnails.ThumbnailHeaderImage img={item.imgThumbnails} className="imageThumbnails" />
            <h1>{item.titleThumbnail}</h1>
            <styleThumbnails.DescriptionThumbnails className="containerInformationThumbnails" theme={FRSTTheme}>
              <h2>{item.titleThumbnail}</h2>
              <p>{item.descpThumbnail}</p>
            </styleThumbnails.DescriptionThumbnails>
          </styleThumbnails.CardThumbnails>
        )
      })}
    </ScrollContainer>
  )
}
