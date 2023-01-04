import { Grid, Box, Modal, Stack } from '@mui/material'
import style from './modalVideo.module.css'
import { CloseIcon } from '@shared/icons'
import Rating from '@components/EBR/rating'
import { useEffect, useMemo, useState } from 'react'
import Video from '@components/LXP/video'

interface ModalVideoProps {
  open: boolean
  recommendationId?: string
  title?: string
  nameVideo: string
  videoUrl: string
  timeBegin: number
  language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
  handleClose: () => void
  handleChangeRating?: (recommendationId: string, rating: number) => void
  showRating?: boolean
  rating?: number
  ratingDescription?: string
  style?: React.CSSProperties
}

export default function ModalVideo(props: ModalVideoProps) {
  const [IdVideo, setIdVideo] = useState('')
  const [HashVideo, setHashVideo] = useState('')
  const [currentRating, setCurrentRating] = useState(props.rating)

  const getInformationsURL = () => {
    let parts = props?.videoUrl.split('/')
    let hash = parts[parts.length - 1]
    let dataVideo = hash.split('?h=')
    setIdVideo(dataVideo[0])
    setHashVideo(dataVideo[1])
  }

  const convertTimeToString = (time: number) => {
    let temp = time
    let hora = Math.trunc(time / 3600)

    temp -= hora * 3600
    let min = Math.trunc(temp / 60)

    temp -= min * 60

    if (hora > 0) {
      return `${hora}h${min}m${temp}s`
    } else {
      return `${min}m${temp}s`
    }
  }

  useEffect(() => {
    getInformationsURL()
  }, [])

  useEffect(() => {
    if (props.rating) {
      setCurrentRating(props.rating)
    }
  }, [props.rating])

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box
        className={style.modalBox}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minHeight: props.showRating ? '560px' : '400px'
        }}
      >
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between" px={3}>
          <Box textAlign="left">{props.title}</Box>
          <Box className={style.fechar} onClick={props.handleClose}>
            <CloseIcon />
          </Box>
        </Stack>

        <Box p={3}>
          {props.videoUrl && (
            <Box width="100%">
              <Video
                videoId={IdVideo}
                privateHash={HashVideo}
                autoplay={1}
                controls={1}
                keyboard={1}
                timeStart={convertTimeToString(props.timeBegin)}
                showSpeedControl={1}
                width={620}
                height={400}
              />
            </Box>
          )}

          {props.showRating && (
            <Box style={{ display: 'flex', justifyContent: 'flex-start', float: 'right' }}>
              <Box style={{ maxWidth: 240 }}>
                <p style={{ textAlign: 'left', fontSize: 14, fontWeight: 400 }}>{props.ratingDescription}</p>
                <Box style={{ display: 'flex', float: 'left' }}>
                  <Rating
                    isVisibleNumberRating
                    marginStars="3.5px"
                    orientation="horizontal"
                    qtdStars={5}
                    rating={currentRating}
                    sizeStars={25}
                    handleRating={(e) => {
                      setCurrentRating(e)
                      props.handleChangeRating(props.recommendationId, e)
                    }}
                  />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  )
}
