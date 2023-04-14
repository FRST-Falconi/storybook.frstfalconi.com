import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './thumbListContentStyles'
import { useEffect, useState } from 'react'
import { PlayLineIcon, PodCast, QuizSucessError, ThumbPodcast, ThumbTexto, ThumbVideo } from '@shared/icons'
import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'

type typeThumb = 'video' | 'podcast' | 'question'

interface IThumbListContent {
  imageSrc?: string
  typeThumbContent?: typeThumb
  title?: string
  description?: string
  isLoading?: boolean
  textViewMoreButton?: string
  textViewLessButton?: string
  onClickThumb?: () => void
  style?: React.CSSProperties
  textProgressVisualized?: string
  textProgressInProgress?: string
  valueProgress?: number
  tagValue: 'vizualized' | 'inProgress' | 'notVisualized'
}

export default function ThumbListContent(props: IThumbListContent) {
  const [showMore, setShowMore] = useState(false)
  const [tagVisualized, setTagVisualized] = useState(props.valueProgress)

  useEffect(() => {
    setTagVisualized(props.valueProgress)
  }, [props.valueProgress])

  return (
    <ThemeProvider theme={FRSTTheme}>
      {props.isLoading ? (
        <Styles.containerThumbContent style={{ ...props.style }}>
          <Styles.loadingImageThumb></Styles.loadingImageThumb>
          <Styles.loadingThumbContent>
            {props.title && <Styles.loadingContent>a</Styles.loadingContent>}
            <Styles.loadingContent>a</Styles.loadingContent>
            <Styles.loadingContent>a</Styles.loadingContent>
            <Styles.loadingContent>a</Styles.loadingContent>
            <Styles.loadingContent>a</Styles.loadingContent>
          </Styles.loadingThumbContent>
        </Styles.containerThumbContent>
      ) : (
        <Styles.containerThumbContent style={{ ...props.style }}>
          {props.imageSrc ? (
            tagVisualized > 0 ? (
              <Styles.shadedThumb>
                <Styles.imageThumbContent
                  style={{ backgroundImage: `url(${props.imageSrc})` }}
                  onClick={props.onClickThumb}
                >
                  <Styles.ProgressAndImg>
                    <ProgressBar label="" value={props.valueProgress} />
                  </Styles.ProgressAndImg>
                </Styles.imageThumbContent>
              </Styles.shadedThumb>
            ) : (
              <Styles.imageThumbContent
                style={{ backgroundImage: `url(${props.imageSrc})` }}
                onClick={props.onClickThumb}
              ></Styles.imageThumbContent>
            )
          ) : tagVisualized > 0 ? (
            <Styles.shadedThumb>
              <Styles.iconsThumbAndProgress onClick={props.onClickThumb}>
                {props.typeThumbContent === 'video' ? <ThumbVideo width="74" height="74" /> : null}
                {props.typeThumbContent === 'podcast' ? (
                  <Styles.IconAndProgress>
                    <ThumbPodcast width="74" height="74" />
                  </Styles.IconAndProgress>
                ) : null}
                {props.typeThumbContent === 'question' ? <ThumbTexto width="74" height="74" /> : null}
                <Styles.ProgressIcon>
                  <ProgressBar label="" value={props.valueProgress} />
                </Styles.ProgressIcon>
              </Styles.iconsThumbAndProgress>
            </Styles.shadedThumb>
          ) : (
            <Styles.iconsThumb onClick={props.onClickThumb}>
              {props.typeThumbContent === 'video' ? <ThumbVideo width="74" height="74" /> : null}
              {props.typeThumbContent === 'podcast' ? <ThumbPodcast width="74" height="74" /> : null}
              {props.typeThumbContent === 'question' ? <ThumbTexto width="74" height="74" /> : null}
            </Styles.iconsThumb>
          )}
          <Styles.infoThumbContent onClick={props.onClickThumb} tagVisualized={props.tagValue}>
            {props.tagValue !== 'notVisualized' ? (
              <>
                {props.tagValue === 'vizualized' ? (
                  <Styles.tagThumbContentContainer>
                    <Styles.tagThumbContent tagVisualized={props.tagValue}>
                      {props.textProgressVisualized}
                    </Styles.tagThumbContent>
                  </Styles.tagThumbContentContainer>
                ) : null}
                {props.tagValue === 'inProgress' ? (
                  <Styles.tagThumbContentContainer>
                    <Styles.tagThumbContent tagVisualized={props.tagValue}>
                      {props.textProgressInProgress}
                    </Styles.tagThumbContent>
                  </Styles.tagThumbContentContainer>
                ) : null}
              </>
            ) : null}

            {props.title ? <span>{props.title}</span> : null}
            <Styles.descriptionThumbContent showText={showMore}> {props.description} </Styles.descriptionThumbContent>
          </Styles.infoThumbContent>
          <Styles.viewMoreContent>
            <Button
              variant="link"
              label={showMore ? props.textViewLessButton : props.textViewMoreButton}
              handleClick={() => setShowMore(!showMore)}
              style={{ fontSize: 12 }}
            />
          </Styles.viewMoreContent>
        </Styles.containerThumbContent>
      )}
    </ThemeProvider>
  )
}
