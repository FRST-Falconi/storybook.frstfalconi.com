import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './thumbListContentStyles'
import { useEffect, useMemo, useState } from 'react'
import { ThumbPodcast, ThumbTexto, ThumbVideo } from '@shared/icons'
import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'

type typeThumb = 'video' | 'podcast' | 'question' | 'textual'

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
  isSelected?: boolean
}

export default function ThumbListContent(props: IThumbListContent) {
  const [showMore, setShowMore] = useState(false)
  const [tagVisualized, setTagVisualized] = useState(props.valueProgress)
  const [isSelected, setIsSelected] = useState(props?.isSelected)

  useEffect(() => {
    setTagVisualized(props.valueProgress)
  }, [props.valueProgress])

  useMemo(() => {
    if (props.isSelected) setIsSelected(props?.isSelected)
  }, [props.isSelected])

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
        <Styles.containerThumbContent style={{ ...props.style }} onClick={props.onClickThumb}>
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
            <Styles.shadedThumb onClick={props.onClickThumb}>
              <Styles.iconsThumbAndProgress>
                {props.typeThumbContent === 'video' ? <ThumbVideo width="74" height="74" /> : null}
                {props.typeThumbContent === 'podcast' ? (
                  <Styles.IconAndProgress>
                    <ThumbPodcast width="74" height="74" />
                  </Styles.IconAndProgress>
                ) : null}
                {props.typeThumbContent === 'question' ? <ThumbTexto width="74" height="74" /> : null}
                {props.typeThumbContent === 'textual' ? <ThumbTexto width="74" height="74" /> : null}
                <Styles.ProgressIcon>
                  <ProgressBar label="" value={props.valueProgress} />
                </Styles.ProgressIcon>
              </Styles.iconsThumbAndProgress>
            </Styles.shadedThumb>
          ) : (
            <Styles.iconsThumb onClick={props.onClickThumb}>
              {props.typeThumbContent === 'video' ? (
                <div>
                  <ThumbVideo width="74" height="74" />
                </div>
              ) : null}
              {props.typeThumbContent === 'podcast' ? (
                <div>
                  <ThumbPodcast width="74" height="74" />
                </div>
              ) : null}
              {props.typeThumbContent === 'question' ? (
                <div>
                  <ThumbTexto width="74" height="74" />
                </div>
              ) : null}
              {props.typeThumbContent === 'textual' ? (
                <div>
                  <ThumbTexto width="74" height="74" />
                </div>
              ) : null}
            </Styles.iconsThumb>
          )}
          <Styles.infoThumbContent
            onClick={props.onClickThumb}
            tagVisualized={props.tagValue}
            isSelected={props?.isSelected}
          >
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
            <Styles.descriptionThumbContent showText={showMore} isSelected={props?.isSelected}>
              {props.description}
            </Styles.descriptionThumbContent>
          </Styles.infoThumbContent>
          <Styles.viewMoreContent>
            <Button
              variant="link"
              label={showMore ? props.textViewLessButton : props.textViewMoreButton}
              handleClick={() => setShowMore(!showMore)}
              style={{ fontSize: 12, color: props?.isSelected ? '#E5E7EB' : '#444444' }}
            />
          </Styles.viewMoreContent>
        </Styles.containerThumbContent>
      )}
    </ThemeProvider>
  )
}
