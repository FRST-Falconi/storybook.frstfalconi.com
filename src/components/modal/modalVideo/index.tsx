import { Grid, Box, Modal, Stack } from '@mui/material'
import style from './modalVideo.module.css'
import { CloseIcon } from '@shared/icons'
import Rating from '@components/EBR/rating'
import { useEffect, useState } from 'react'
import Video from '@components/LXP/video'

interface ModalVideoProps {
  open: boolean
  title?: string
  nameVideo: string
  videoUrl: string
  timeBegin: number
  language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
  handleClose: () => void
  handleRating: () => void
  showRating: boolean
  rating: number
  setRating: () => void

  style?: React.CSSProperties
}

export default function ModalVideo(props: ModalVideoProps) {
  const [IdVideo, setIdVideo] = useState('')
  const [HashVideo, setHashVideo] = useState('')

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
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Box className={style.modalBox} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between" px={3}>
          <Box textAlign="left">{props.title}</Box>
          <Box className={style.fechar} onClick={props.handleClose}>
            <CloseIcon />
          </Box>
          {/* <Box className={style.fechar} onClick={props.handleClose}>
            <span style={{ marginRight: 10 }}> {props.language === 'en-US' ? 'Close' : 'Fechar'} </span> 
            <CloseIcon />
          </Box> */}
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
                <p style={{ textAlign: 'left', fontSize: 14 }}>Avalie abaixo o quanto isso foi útil para você.</p>

                <Rating
                  isVisibleNumberRating
                  marginStars="3.5px"
                  orientation="horizontal"
                  qtdStars={5}
                  rating={4}
                  sizeStars={18}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>

    // <Modal open={props.open} onClose={props.handleClose} style={{ overflow: 'scroll' }}>
    //   <>
    //     <div
    //       style={{
    //         position: 'absolute',
    //         top: 0,
    //         right: 0,
    //         width: 80,
    //         backgroundColor: '#efefef',
    //         padding: 8,
    //         display: 'flex',
    //         justifyContent: 'space-evenly',
    //         alignItems: 'center',
    //         borderTopRightRadius: 8,
    //         cursor: 'pointer'
    //       }}
    //       onClick={props.handleClose}
    //     >
    //       <span style={{ fontSize: 12 }}>Fechar</span>
    //       {/* <svg width={'13'} height={'11'} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path
    //           d="M11.8346 0.630371L1.16797 9.43511"
    //           stroke={'#222222'}
    //           strokeWidth="1.2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //         <path
    //           d="M1.16797 0.630371L11.8346 9.43511"
    //           stroke={'#222222'}
    //           strokeWidth="1.2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg> */}
    //       <div style={{ marginTop: 0, width: '100%', paddingLeft: 24, paddingRight: 24 }}>
    //         <h1 style={{ fontSize: 18, fontFamily: 'Work Sans', fontWeight: 700 }}>{props.nameVideo}</h1>
    //       </div>
    //       <div style={{ marginTop: 36 }}>
    //         <Video
    //           videoId={IdVideo}
    //           privateHash={HashVideo}
    //           autoplay={1}
    //           controls={1}
    //           keyboard={1}
    //           timeStart={convertTimeToString(props.timeBegin)}
    //           showSpeedControl={1}
    //         />
    //       </div>
    //     </div>
    //   </>
    // </Modal>
  )
}
