import { Box, Modal, Stack } from '@mui/material'
import style from './modalBase.module.css'
import { CloseIcon } from '@shared/icons'
import Rating from '@components/EBR/rating'
import { ReactChildren, useEffect, useState } from 'react'

interface ModalBaseProps {
  open: boolean
  recommendationId?: string
  title?: string
  timeBegin: number
  language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
  handleClose?: () => void
  handleChangeRating?: (recommendationId: string, rating: number) => void
  showRating?: boolean
  rating?: number
  ratingDescription?: string
  children: ReactChildren
}

export default function ModalBase(props: ModalBaseProps) {
  const [currentRating, setCurrentRating] = useState(props.rating)
  const [isOpenModal, setOpenModal] = useState(() => props.open)

  useEffect(() => {
    if (props.rating) {
      setCurrentRating(props.rating)
    }
  }, [props.rating])

  const handleModalClose = () => {
    props.handleClose && props.handleClose()
    setOpenModal(() => false)
  }

  return (
    <Modal open={isOpenModal} onClose={handleModalClose} >
      <Box
        id={`modal-video${(props.title? props.title : '').replace(/( )+/g, '')}`}
        className={style.modalBox}
        style={{
          height: props.showRating ? '80%' : '400px',
          maxHeight: props.showRating ? '620px' : '400px',
        }}
      >
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          px={3}
        >
          <Box textAlign="left">{props.title}</Box>
          <Box className={style.fechar} onClick={handleModalClose}>
            <CloseIcon />
          </Box>
        </Stack>

        <Box p={3}>
          <Box
            width="100%"
            style={{
              minHeight: 260,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            { props.children }
          </Box>

          {props.showRating && (
            <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box style={{ maxWidth: 240 }}>
                <p style={{ textAlign: 'left', fontSize: 14, fontWeight: 400 }}>{props.ratingDescription}</p>
                <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                    disabled={false}
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