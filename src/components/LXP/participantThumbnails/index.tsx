import '../../../shared/global.css'
import * as styleThumbnails from './participantThumbnails'
import { FRSTTheme } from '../../../theme'
import ScrollContainer from '../../scroll-container/index'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Popover from '@material-ui/core/Popover';

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);

  // useEffect(() => {
  //     setAnchorEl(element);
  // }, [element])

  const handleClose = () => {
      setAnchorEl(null);
      // onClosePopover()
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>    
      <ScrollContainer
        type={'horizontal'}
        stepMove={100}
        isVisibleControlsButtons={isVisibleControlsButtons}
        sizeArrowButton={80}
        marginsArrowButton={1}
        horizontalMarginInternScroll={'0'}
        marginTopArrrowButton={'-11rem'}
        className={'scrollThumbnail'}
        
      >
        {listThumbnails.map((item, index) => {
          return (
            <styleThumbnails.CardThumbnails 
              theme={FRSTTheme} 
              key={index} 
              onClick={(event)=> {
                item.handleFunctionThumbnail
              }}
              onMouseOver={(event)=> {
                setAnchorEl(event.currentTarget)
                setItemSelected(item)
                item.handleFunctionThumbnail
              }}
            >
              <styleThumbnails.ThumbnailHeaderImage img={item.imgThumbnails} className="imageThumbnails" />
              <h1>{item.titleThumbnail}</h1>
              <styleThumbnails.DescriptionThumbnails className="containerInformationThumbnails" theme={FRSTTheme}>
                <h2>{item.titleThumbnail}</h2>
                <p>{item.descpThumbnail}</p>
              </styleThumbnails.DescriptionThumbnails>
            </styleThumbnails.CardThumbnails>
          )
        })}
      </ScrollContainer>
        <Popover                
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}        
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: 8
            }
          }}
          style={{
              borderRadius: 8
          }}
      >
          <div 
            style={{
              marginTop: -20, 
              backgroundColor: 'red', 
              height: 400, 
              width: 293, 
            }}            
            onMouseLeave={(event)=> {
              setAnchorEl(null)
              setItemSelected(null)
            }}
          >
            {
              itemSelected &&
                <styleThumbnails.CardThumbnails 
                  theme={FRSTTheme} 
                  onClick={(event)=> {
                    itemSelected.handleFunctionThumbnail
                  }}
                >
                  <styleThumbnails.ThumbnailHeaderImage img={itemSelected.imgThumbnails} className="imageThumbnails" />
                  <h1>{itemSelected.titleThumbnail}</h1>
                  <styleThumbnails.DescriptionThumbnails className="containerInformationThumbnails" theme={FRSTTheme}>
                    <h2>{itemSelected.titleThumbnail}</h2>
                    <p>{itemSelected.descpThumbnail}</p>
                  </styleThumbnails.DescriptionThumbnails>
                </styleThumbnails.CardThumbnails>                          
            }            
          </div>
      </Popover> 
    </>      
    
  )
}

// function handleThumbnailsResposive(sliderThumbanils, listThumbnails, widthSlider) {
//   return (
//     <styleThumbnails.ContainerThumbnailResposive ref={sliderThumbanils}>
//       <motion.div className="motionThumbnails" drag="x" dragConstraints={{ right: 0, left: -widthSlider }}>
//         {listThumbnails.map((item, index) => {
//           return (
//             <styleThumbnails.CardThumbnails theme={FRSTTheme} key={index}>
//               <styleThumbnails.ThumbnailHeaderImage
//                 img={item.imgThumbnails}
//                 className="imageThumbnails"
//                 onClick={item.handleFunctionThumbnail}
//               />
//               <h1>{item.titleThumbnail}</h1>
//               <styleThumbnails.DescriptionThumbnails className="containerInformationThumbnails" theme={FRSTTheme}>
//                 <h2>{item.titleThumbnail}</h2>
//                 <p>{item.descpThumbnail}</p>
//               </styleThumbnails.DescriptionThumbnails>
//             </styleThumbnails.CardThumbnails>
//           )
//         })}
//       </motion.div>
//     </styleThumbnails.ContainerThumbnailResposive>
//   )
// }

export default function ParticipantThumbnails({ listThumbnails }: ParticipantThumbnails) {
  const sliderThumbanils = useRef<HTMLInputElement>()
  const [widthSlider, setWidthSlider] = useState(0)
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    setWidthSlider(sliderThumbanils.current?.scrollWidth - sliderThumbanils.current?.offsetWidth)
    console.log('width ', width)
    console.log('scroll ', sliderThumbanils.current?.scrollWidth)
    console.log('offset ', sliderThumbanils.current?.offsetWidth)
    console.log('WidthSlider ', sliderThumbanils.current?.scrollWidth - sliderThumbanils.current?.offsetWidth)
  }, [listThumbnails, width])

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
    // return handleThumbnailsResposive(sliderThumbanils, listThumbnails, widthSlider)
    return handleThumbnails(listThumbnails, false)
  } else {
    return handleThumbnails(listThumbnails, true)
  }
}
