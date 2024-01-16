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
  nameCanal?: string
  imageSrcCanal?: string
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


  const MAX_CHARACTERS = 150

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
              >
                <Styles.IconPlayVideo>
                  {' '}
                  <IconPlay />{' '}
                </Styles.IconPlayVideo>

                <Styles.InfCanal>
                  <Styles.ImgCanal src={props.imageSrcCanal} />
                  <Styles.NameCanal>{props.nameCanal}</Styles.NameCanal>
                </Styles.InfCanal>
              </Styles.imageThumbContent>
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
              {props.description.length > MAX_CHARACTERS ? (
                <>
                  {showMore ? props.description : `${props.description.slice(0, MAX_CHARACTERS)}...`}
                </>
              ) : (
                props.description
              )}
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

  function IconPlay() {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
          <g filter="url(#filter0_d_1_13248)">
            <path
              d="M22.7851 17.6767C23.3898 17.273 23.3898 16.3841 22.7851 15.9803L14.8446 10.6786C14.1668 10.2261 13.2583 10.7119 13.2583 11.5269V22.1302C13.2583 22.9451 14.1668 23.4309 14.8446 22.9784L22.7851 17.6767Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_13248"
              x="0"
              y="0"
              width="32.6364"
              height="32.6364"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology radius="20.3983" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_13248" />
              <feOffset dy="3.05975" />
              <feGaussianBlur stdDeviation="2.54979" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.301961 0 0 0 0 0.0509804 0 0 0 0.4 0" />
              <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_1_13248" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_13248" result="shape" />
            </filter>
          </defs>
        </svg>
      </>
    )
  }
}
