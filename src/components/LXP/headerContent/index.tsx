import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FRSTTheme } from '../../../theme'
import * as styledHeaderContent from './headerContent'
import { ArrowScrollRight } from './../../../shared/icons'

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
  listaRecomendacao: any
}

export default function HeaderContent(props: HeaderContentParams) {
  const [selectedContent, setSelectedContent] = useState(0)
  const [zeroHeigthDescription, setzeroHeigthDescription] = useState(false)
  const settingsSlider = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000
  }

  useEffect(() => {
    const timer = setTimeout(() => setSelectedContent(selectedContent < 2 ? selectedContent + 1 : 0), 10000)
    return () => clearTimeout(timer)
  }, [selectedContent])

  function addHeigthDescription() {
    if (zeroHeigthDescription) {
      setzeroHeigthDescription(false)
    } else if (!zeroHeigthDescription) {
      setzeroHeigthDescription(true)
    }
  }

  function RecomendationHeader(item) {
    return (
      <>
        <styledHeaderContent.Title>{item.title}</styledHeaderContent.Title>
        <styledHeaderContent.Description hgtDesc={zeroHeigthDescription}>
          {item.description}
        </styledHeaderContent.Description>
        <styledHeaderContent.SpaceButtonTopViewMore hgtDesc={zeroHeigthDescription} onClick={addHeigthDescription}>
          <Button label={'Ver Mais'} variant="link" style={{ color: '#649AF3', fontWeight: '900' }} />
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
        <styledHeaderContent.Description hgtDesc={zeroHeigthDescription}>
          {item.description}
        </styledHeaderContent.Description>
        <styledHeaderContent.SpaceButtonTopViewMore hgtDesc={zeroHeigthDescription} onClick={addHeigthDescription}>
          <Button label={'Ver Mais'} variant="link" style={{ color: '#649AF3', fontWeight: '900' }} />
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
      <Slider {...settingsSlider}>
        {props.listaRecomendacao.map((item, index) => {
          return (
            <styledHeaderContent.HeaderImage key={index} img={item.bgImg}>
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
      </Slider>
    </styledHeaderContent.Container>
  )
}
