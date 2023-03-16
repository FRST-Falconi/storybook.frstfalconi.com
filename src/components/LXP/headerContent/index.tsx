import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'
import { useEffect, useState } from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import { FRSTTheme } from '../../../theme'
import * as styledHeaderContent from './headerContent'
import { ArrowScrollRight } from './../../../shared/icons'
import { ThemeProvider } from 'styled-components'

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
  listaRecomendacao: Array<objPropiedades>
}

export default function HeaderContent(props: HeaderContentParams) {
  const [selectedContent, setSelectedContent] = useState(0)
  const [zeroHeigthDescription, setzeroHeigthDescription] = useState(false)
  const [textView, setTextView] = useState(props.textViewMore)

  useEffect(() => {
    console.log(selectedContent)
    const timer = setTimeout(() => {
      setSelectedContent(selectedContent < (props.listaRecomendacao.length - 1) ? selectedContent + 1 : 0)
      setzeroHeigthDescription(false)
      setTextView(props.textViewMore)
    }, props.autoplayTime ? props.autoplayTime : 10000)
    return () => clearTimeout(timer)
  }, [selectedContent])

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
    <ThemeProvider theme={FRSTTheme}>
      <styledHeaderContent.Container theme={FRSTTheme}>
        {props.listaRecomendacao.map((item, index) => {
          return (
            <styledHeaderContent.HeaderImage key={index} img={item.bgImg} tmnDescription={item.description.length} onDisplay={index === selectedContent} >
              <>
                {item.typeOfHeader === 'inProgress' ? (
                  <styledHeaderContent.Content onDisplay={index === selectedContent}>{InProgressHeader(item)}</styledHeaderContent.Content>
                ) : (
                  <styledHeaderContent.Content onDisplay={index === selectedContent}>{RecomendationHeader(item)}</styledHeaderContent.Content>
                )}
              </>
            </styledHeaderContent.HeaderImage>
          )
        })}
        <styledHeaderContent.ListCounters>
          {Array.from({ length : props.listaRecomendacao.length}).map((_,index) =>
            <styledHeaderContent.Counters key={index} 
              selected={index === selectedContent}
              onClick={() => setSelectedContent(index)}   
            />
          )}
        </styledHeaderContent.ListCounters>
      </styledHeaderContent.Container>
    </ThemeProvider>
  )
}
