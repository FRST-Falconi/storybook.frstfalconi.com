import '../../../shared/global.css'
import * as styleThumbnails from './participantThumbnails'
import { FRSTTheme } from '../../../theme'
import { useState } from 'react'
import Popover from '@material-ui/core/Popover'

interface ParticipantThumbnails {
  imgThumbnails?: any
  titleThumbnail?: string
  descpThumbnail?: string
  handleFunctionThumbnail?: () => void
}

export default function ParticipantThumbnails(props: ParticipantThumbnails) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [itemSelected, setItemSelected] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>      
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
            backgroundColor: '#FFF',
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
          <styleThumbnails.CardThumbnailsHove theme={FRSTTheme} onClick={props.handleFunctionThumbnail}>
            <styleThumbnails.ThumbnailImageHover
              img={props.imgThumbnails ? props.imgThumbnails : '/img/NoUploaded.png'}
            />
            <styleThumbnails.DescriptionThumbnails theme={FRSTTheme}>
              <div className='title'>{props.titleThumbnail}</div>
              <p>{props.descpThumbnail}</p>
            </styleThumbnails.DescriptionThumbnails>
          </styleThumbnails.CardThumbnailsHove>
        </styleThumbnails.CardThumbnailsHove>
      </Popover>
      <styleThumbnails.CardThumbnails id="teste"
        theme={FRSTTheme}
        onClick={props.handleFunctionThumbnail}
        onMouseOver={(event) => {
          setAnchorEl(event.currentTarget)
          setItemSelected(props)
          props.handleFunctionThumbnail
        }}
      >
        <styleThumbnails.ThumbnailHeaderImage
          img={props.imgThumbnails ? props.imgThumbnails : '/img/NoUploaded.png'}
        />
        <h1>{props.titleThumbnail}</h1>
      </styleThumbnails.CardThumbnails>
    </>
  )
}
