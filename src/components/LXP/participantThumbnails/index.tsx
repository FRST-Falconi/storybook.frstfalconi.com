import '../../../shared/global.css'
import * as styleThumbnails from './participantThumbnails'
import { FRSTTheme } from '../../../theme'
import ScrollContainer from '../../scroll-container/index'
import { useEffect, useState } from 'react'
import Popover from '@material-ui/core/Popover'

interface objThumbnails {
  imgThumbnails?: any
  titleThumbnail?: string
  descpThumbnail?: string
  handleFunctionThumbnail?: () => void
}
interface ParticipantThumbnails {
  listThumbnails: Array<objThumbnails>
}

function handleThumbnails(listThumbnails, isVisibleControlsButtons) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [itemSelected, setItemSelected] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <ScrollContainer
        type={'horizontal'}
        stepMove={100}
        isVisibleControlsButtons={isVisibleControlsButtons}
        sizeArrowButton={80}
        marginsArrowButton={1}
        horizontalMarginInternScroll={'0'}
        marginTopArrrowButton={'-5rem'}
        className={'scrollThumbnail'}
      >
        {listThumbnails.map((item, index) => {
          return (
            <styleThumbnails.CardThumbnails
              theme={FRSTTheme}
              key={index}
              onClick={item.handleFunctionThumbnail}
              onMouseOver={(event) => {
                setAnchorEl(event.currentTarget)
                setItemSelected(item)
                item.handleFunctionThumbnail
              }}
            >
              <styleThumbnails.ThumbnailHeaderImage
                img={item.imgThumbnails ? item.imgThumbnails : '/img/NoUploaded.png'}
              />
              <h1>{item.titleThumbnail}</h1>
            </styleThumbnails.CardThumbnails>
          )
        })}
      </ScrollContainer>
      {isVisibleControlsButtons && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderRadius: 8,
              marginTop: '-1rem'
            }
          }}
          style={{
            borderRadius: 8
          }}
        >
          <styleThumbnails.CardThumbnailsHove
            onMouseLeave={(event) => {
              setAnchorEl(null)
              setItemSelected(null)
            }}
          >
            {itemSelected && (
              <styleThumbnails.CardThumbnailsHove theme={FRSTTheme} onClick={itemSelected.handleFunctionThumbnail}>
                <styleThumbnails.ThumbnailImageHover
                  img={itemSelected.imgThumbnails ? itemSelected.imgThumbnails : '/img/NoUploaded.png'}
                />
                <styleThumbnails.DescriptionThumbnails theme={FRSTTheme}>
                  <h2>{itemSelected.titleThumbnail}</h2>
                  <p>{itemSelected.descpThumbnail}</p>
                </styleThumbnails.DescriptionThumbnails>
              </styleThumbnails.CardThumbnailsHove>
            )}
          </styleThumbnails.CardThumbnailsHove>
        </Popover>
      )}
    </>
  )
}

export default function ParticipantThumbnails({ listThumbnails }: ParticipantThumbnails) {
  const [width, setWidth] = useState<number>(window.innerWidth)

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
    return handleThumbnails(listThumbnails, false)
  } else {
    return handleThumbnails(listThumbnails, true)
  }
}
