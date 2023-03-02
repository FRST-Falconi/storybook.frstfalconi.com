import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'
import { useEffect, useState } from 'react'
import { FRSTTheme } from '../../../theme'
import * as styledHeaderContent from './headerContent'
import { ArrowScrollRight } from './../../../shared/icons'
import Carousel from 'react-elastic-carousel'

interface objPropiedades {
  title?: string
  description?: string
  bgImg?: string
  typeOfHeader?: 'inProgress' | 'recomendation'
  progresso?: number
  channel?: string
  onClick?: () => void
  labelButton?: string
}
interface HeaderContentParams {
  textViewMore?: string
  textViewLess?: string
  autoplayTime?: number
  autoPlay?: boolean
  listaRecomendacao: Array<objPropiedades>
}

export default function HeaderContent(props: HeaderContentParams) {
  const [zeroHeigthDescription, setzeroHeigthDescription] = useState(false)
  const [textView, setTextView] = useState(props.textViewMore)

  function addHeigthDescription() {
    if (zeroHeigthDescription) {
      setzeroHeigthDescription(false)
      setTextView(props.textViewMore)
    } else if (!zeroHeigthDescription) {
      setzeroHeigthDescription(true)
      setTextView(props.textViewLess)
    }
  }

  function RecomendationHeader(item) {
    return (
      <>
        <styledHeaderContent.Title>{item.title}</styledHeaderContent.Title>
        <styledHeaderContent.Description zeroHeigthDescription={zeroHeigthDescription}>
          {item.description}
        </styledHeaderContent.Description>
        <styledHeaderContent.SpaceButtonTopViewMore
          zeroHeigthDescription={zeroHeigthDescription}
          onClick={addHeigthDescription}
        >
          <Button label={textView} variant="link" style={{ color: '#649AF3', fontWeight: '900' }} />
          <ArrowScrollRight fill="#649AF3" width="13px" height="13px" strokeWidth={'4'} />
        </styledHeaderContent.SpaceButtonTopViewMore>
        <styledHeaderContent.SpaceButtonTop onClick={item.onClick}>
          <Button label={item.labelButton} variant="primary" />
        </styledHeaderContent.SpaceButtonTop>
      </>
    )
  }

  function InProgressHeader(item) {
    return (
      <>
        <styledHeaderContent.Title>{item.title}</styledHeaderContent.Title>
        <styledHeaderContent.Description zeroHeigthDescription={zeroHeigthDescription}>
          {item.description}
        </styledHeaderContent.Description>
        <styledHeaderContent.SpaceButtonTopViewMore
          zeroHeigthDescription={zeroHeigthDescription}
          onClick={addHeigthDescription}
        >
          <Button label={textView} variant="link" style={{ color: '#649AF3', fontWeight: '900' }} />
          <ArrowScrollRight fill="#649AF3" width="13px" height="13px" strokeWidth={'4'} />
        </styledHeaderContent.SpaceButtonTopViewMore>
        <styledHeaderContent.SpaceProgressAndButton>
          <ProgressBar value={item.progresso} label={item.channel} />
          <styledHeaderContent.SpaceButtonLeft onClick={item.onClick}>
            <Button label={item.labelButton} variant="primary" />
          </styledHeaderContent.SpaceButtonLeft>
        </styledHeaderContent.SpaceProgressAndButton>
      </>
    )
  }

  return (
    <styledHeaderContent.Container theme={FRSTTheme}>
      <Carousel isRTL={false} showArrows={false} enableAutoPlay={props.autoPlay} autoPlaySpeed={props.autoplayTime}>
        {props.listaRecomendacao.map((item, index) => {
          return (
            <styledHeaderContent.HeaderImage key={index} img={item.bgImg} tmnDescription={item.description.length}>
              <>
                {item.typeOfHeader === 'inProgress' ? (
                  <styledHeaderContent.Content>{InProgressHeader(item)}</styledHeaderContent.Content>
                ) : (
                  <styledHeaderContent.Content>{RecomendationHeader(item)}</styledHeaderContent.Content>
                )}
              </>
            </styledHeaderContent.HeaderImage>
          )
        })}
      </Carousel>
    </styledHeaderContent.Container>
  )
}
