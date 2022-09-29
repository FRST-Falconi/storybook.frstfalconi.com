import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import VectorDown from './vectorDown'
import VectorUp from './vectorUp'
import { IAccordionTrack } from './IAccordionTrack'
import * as Styles from './accordionTrackStyle'
import React, { useState, useEffect } from 'react'
import * as Icons from '../../../shared/icons'
import Switch from 'react-switch';
import ThumbnailsDraggable from '../thumbnails/thumbnailsDraggable'
import Thumbnails from '../thumbnails/thumbnails'
import ScrollContainer from '@components/scroll-container'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'

export default function AccordionTrack(props: IAccordionTrack) {

    const [checked, setChecked] = useState(true)
    const [down, setDown] = useState(true)
    const [up, setUp] = useState(true)
    const [state, setState] = useState(props.ObjectsCard)

    const handleChange = (checkedValue) => {
      setChecked(checkedValue)
      // props.handleChangeCheck(checkedValue)
    };

    const changeSelect = () => {
      {
        up ?
          setUp(false)
          :
          setUp(true)
        setDown(false)
      }
    }

    useEffect(() => {
      console.log('state', state)    
    }, [state])


    return (
      <>
        {
          state.map((data, key) => {
            return (
              <>
                <Styles.ContainerHeader className={"opened"} active={data.ativo}>
                  <Styles.ContentTrailName>
                      <Styles.TypographyTrailName>{data.TrailName}</Styles.TypographyTrailName>
                      <Styles.Select onClick={changeSelect} >
                        {data.show ? <VectorUp /> : <VectorDown />}
                      </Styles.Select>
                  </Styles.ContentTrailName>
                  <Styles.ContentActiveHeader>
                      <Styles.TypographyActiveHeader active={data.ativo} style={{ fontWeight: data.ativo ? 700 : 400 }}>
                        Ativar curso
                        <Switch
                          onChange={handleChange}
                          checked={data.ativo}
                          height={16}
                          width={40}
                          checkedIcon={false}
                          uncheckedIcon={false}
                          handleDiameter={24}
                          onHandleColor='#ffffff'
                          offHandleColor='#ffffff'
                          onColor='#FF4D0D'
                          offColor='#757575'
                          activeBoxShadow={data.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                          boxShadow={data.ativo ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                        />
                      </Styles.TypographyActiveHeader>
                      <Styles.IconVerticalHeader onClick={props.handleClickContent}>
                        <Icons.MoreVertical fill={data.ativo ? '#000000' : '#bdbdbd'} />
                      </Styles.IconVerticalHeader>
                  </Styles.ContentActiveHeader>
                </Styles.ContainerHeader>
      
                {
                  data.show &&                               
                    <Droppable droppableId={key.toString()} key={key} direction="horizontal">
                      {(provided) => {      
                        return (
                          <div style={{height: 415, border: '1px solid black', padding: 16, marginTop: -5, backgroundColor: 'rgb(235, 235, 235)', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, zIndex: 0, width: '100%'}}>
                            <ScrollContainer
                              stepMove={380}
                              isVisibleControlsButtons
                              sizeArrowButton={80}
                              marginsArrowButton={10}
                              horizontalMarginInternScroll={'20px'}
                              styles={{ backgroundColor: '#ebebeb', justifyContent: 'flex-start', width: '100%'}}
                            >

                              <Styles.ContainerCard ref={provided.innerRef} {...provided.droppableProps}>
                                {
                                  data.items.map((el, index) => {
                                    return (
                                      <ThumbnailsDraggable
                                        key={index}
                                        id={el.id}
                                        index={index}
                                        title={el.name}
                                        variant={'default'}
                                      />
                                    )} 
                                  )
                                }
                                {/* <Thumbnails variant='add' /> */}
                                
                              </Styles.ContainerCard>                                                
                            </ScrollContainer>
                            {provided.placeholder}
                          </div>
                        )}
                      }                                                          
                    </Droppable>
                }
              </>
            )
          })
        }

      </>
    )
}