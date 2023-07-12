import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'
import { useEffect, useState } from 'react'
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
  height?: number | string
}
interface HeaderContentParams {
  textViewMore?: string
  textViewLess?: string
  autoplayTime?: number
  listaRecomendacao: Array<objPropiedades>
  style?: React.CSSProperties
  height?: number | string
}

export default function HeaderContent(props: HeaderContentParams) {
  const [selectedContent, setSelectedContent] = useState(0)
  const [zeroHeigthDescription, setzeroHeigthDescription] = useState(false)
  const [textView, setTextView] = useState(props.textViewMore)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setSelectedContent(selectedContent < props.listaRecomendacao.length - 1 ? selectedContent + 1 : 0)
        setzeroHeigthDescription(false)
        setTextView(props.textViewMore)
      },
      props.autoplayTime ? props.autoplayTime : 10000
    )
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
    const hasSeeMore = item.description.length >= 164
    return (
      <styledHeaderContent.StyleHeaderInProgress>
        <section>
          <styledHeaderContent.Title>{item.title}</styledHeaderContent.Title>
          <styledHeaderContent.Description
            className={!zeroHeigthDescription ? 'short' : ''}
            zeroHeigthDescription={zeroHeigthDescription}
          >
            {item.description}
          </styledHeaderContent.Description>

          {hasSeeMore && (
            <styledHeaderContent.SpaceButtonTopViewMore
              className={zeroHeigthDescription ? 'open' : 'closed'}
              zeroHeigthDescription={zeroHeigthDescription}
              onClick={addHeigthDescription}
            >
              <Button label={textView} variant="link" style={{ color: '#649AF3', fontWeight: '900' }} />
              <span className={!zeroHeigthDescription ? 'open' : 'closed'}>
                <ArrowScrollRight fill="#649AF3" width="13px" height="13px" strokeWidth={'4'} />
              </span>
            </styledHeaderContent.SpaceButtonTopViewMore>
          )}
        </section>

        <styledHeaderContent.SpaceButtonTop onClick={item.onClick}>
          {item.labelButton && <Button label={item.labelButton} variant="primary" />}
        </styledHeaderContent.SpaceButtonTop>
      </styledHeaderContent.StyleHeaderInProgress>
    )
  }

  function InProgressHeader(item) {
    const hasSeeMore = item.description.length >= 164
    return (
      <styledHeaderContent.StyleHeaderInProgress>
        <section>
          <styledHeaderContent.Title title={item.title}>{item.title}</styledHeaderContent.Title>
          <styledHeaderContent.Description
            className={!zeroHeigthDescription ? 'short' : ''}
            zeroHeigthDescription={zeroHeigthDescription}
          >
            {item.description}
          </styledHeaderContent.Description>

          {hasSeeMore && (
            <styledHeaderContent.SpaceButtonTopViewMore
              className={zeroHeigthDescription ? 'open' : 'closed'}
              zeroHeigthDescription={zeroHeigthDescription}
              onClick={addHeigthDescription}
            >
              <Button label={textView} variant="link" style={{ color: '#649AF3', fontWeight: '900' }} />
              <span className={!zeroHeigthDescription ? 'open' : 'closed'}>
                <ArrowScrollRight fill="#649AF3" width="13px" height="13px" strokeWidth={'4'} />
              </span>
            </styledHeaderContent.SpaceButtonTopViewMore>
          )}
        </section>
        <styledHeaderContent.SpaceProgressAndButton>
          <ProgressBar value={item.progresso} label={item.channel} style={{ width: 200 }} />
          {item.labelButton && <Button label={item.labelButton} variant="primary" handleClick={item.onClick} />}
        </styledHeaderContent.SpaceProgressAndButton>
      </styledHeaderContent.StyleHeaderInProgress>
    )
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <styledHeaderContent.Container style={{ ...props.style }}>
        {props.listaRecomendacao.map((item, index) => {
          return (
            <styledHeaderContent.HeaderImage
              key={index}
              img={item.bgImg}
              tmnDescription={item.description.length}
              onDisplay={index === selectedContent}
              style={{ ...props.style }}
            >
              <>
                {item.typeOfHeader === 'inProgress' ? (
                  <styledHeaderContent.Content height={props?.height} onDisplay={index === selectedContent}>
                    {InProgressHeader(item)}
                  </styledHeaderContent.Content>
                ) : (
                  <styledHeaderContent.Content height={props?.height} onDisplay={index === selectedContent}>
                    {RecomendationHeader(item)}
                  </styledHeaderContent.Content>
                )}
              </>
            </styledHeaderContent.HeaderImage>
          )
        })}
        <styledHeaderContent.ListCounters>
          {Array.from({ length: props.listaRecomendacao.length }).map((_, index) => (
            <styledHeaderContent.Counters
              key={index}
              selected={index === selectedContent}
              onClick={() => setSelectedContent(index)}
            />
          ))}
        </styledHeaderContent.ListCounters>
      </styledHeaderContent.Container>
    </ThemeProvider>
  )
}
