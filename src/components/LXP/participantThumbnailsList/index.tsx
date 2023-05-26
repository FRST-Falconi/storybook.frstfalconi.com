import '../../../shared/global.css'
import ScrollContainer from '../../scroll-container/index'
import { useEffect, useState } from 'react'
import ParticipantThumbnails from '../participantThumbnails'

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

  return (
    <>
      <ScrollContainer
        stepMove={600}
        isVisibleControlsButtons={isVisibleControlsButtons}
        sizeArrowButton={80}
        marginsArrowButton={1}
        horizontalMarginInternScroll={'0'}
        marginTopArrrowButton={'-5rem'}
        widthProtectClick={200}
        className={'scrollThumbnail'}
      >
        {listThumbnails.map((item, index) => {
          return (
            <ParticipantThumbnails
              imgThumbnails={item.imgThumbnails}
              titleThumbnail={item.titleThumbnail}
              descpThumbnail={item.descpThumbnail}
              handleFunctionThumbnail={item.handleFunctionThumbnail}            
            />
          )
        })}
      </ScrollContainer>      
    </>
  )
}

export default function ParticipantThumbnailsList({ listThumbnails }: ParticipantThumbnails) {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" && window.innerWidth)

  function handleWindowSizeChange() {
    setWidth(typeof window !== "undefined" && window.innerWidth)
  }
  useEffect(() => {
    typeof window !== "undefined" && window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      typeof window !== "undefined" && window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  if (width <= 834) {
    return handleThumbnails(listThumbnails, false)
  } else {
    return handleThumbnails(listThumbnails, true)
  }
}
  