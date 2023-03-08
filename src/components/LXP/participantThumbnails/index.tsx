import '../../../shared/global.css'
import * as styleThumbnails from './participantThumbnails'
import { FRSTTheme } from '../../../theme'
import ScrollContainer from '../../scroll-container/index'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface objThumbnails {
  imgThumbnails?: any
  titleThumbnail?: string
  descpThumbnail?: string
  handleFunctionThumbnail?: () => void
}
interface ParticipantThumbnails {
  listThumbnails: Array<objThumbnails>
}

function handleThumbnails(listThumbnails) {
  return (
    <ScrollContainer
      type={'horizontal'}
      stepMove={100}
      isVisibleControlsButtons={true}
      sizeArrowButton={80}
      marginsArrowButton={1}
      horizontalMarginInternScroll={'0'}
      marginTopArrrowButton={'-11rem'}
      className={'scrollThumbnail'}
    >
      {listThumbnails.map((item, index) => {
        return (
          <styleThumbnails.CardThumbnails theme={FRSTTheme} key={index} onClick={item.handleFunctionThumbnail}>
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

function handleThumbnailsResposive(sliderThumbanils, listThumbnails, widthSlider) {
  return (
    <styleThumbnails.ContainerThumbnailResposive ref={sliderThumbanils}>
      <motion.div className="motionThumbnails" drag="x" dragConstraints={{ right: 0, left: -widthSlider }}>
        {listThumbnails.map((item, index) => {
          return (
            <styleThumbnails.CardThumbnails theme={FRSTTheme} key={index}>
              <styleThumbnails.ThumbnailHeaderImage
                img={item.imgThumbnails}
                className="imageThumbnails"
                onClick={item.handleFunctionThumbnail}
              />
              <h1>{item.titleThumbnail}</h1>
              <styleThumbnails.DescriptionThumbnails className="containerInformationThumbnails" theme={FRSTTheme}>
                <h2>{item.titleThumbnail}</h2>
                <p>{item.descpThumbnail}</p>
              </styleThumbnails.DescriptionThumbnails>
            </styleThumbnails.CardThumbnails>
          )
        })}
      </motion.div>
    </styleThumbnails.ContainerThumbnailResposive>
  )
}

export default function ParticipantThumbnails({ listThumbnails }: ParticipantThumbnails) {
  const sliderThumbanils = useRef<HTMLInputElement>()
  const [widthSlider, setWidthSlider] = useState(0)
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    setWidthSlider(sliderThumbanils.current?.scrollWidth - sliderThumbanils.current?.offsetWidth)
    console.log('width ', width)
    console.log('scroll ', sliderThumbanils.current?.scrollWidth)
    console.log('offset ', sliderThumbanils.current?.offsetWidth)
    console.log('WidthSlider ', sliderThumbanils.current?.scrollWidth - sliderThumbanils.current?.offsetWidth)
  }, [listThumbnails, width])

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  if (width <= 834) {
    return handleThumbnailsResposive(sliderThumbanils, listThumbnails, widthSlider)
  } else {
    return handleThumbnails(listThumbnails)
  }
}
