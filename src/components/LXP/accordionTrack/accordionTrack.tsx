import '../../../shared/global.css'
import { IAccordionTranslate } from './IAccordionTrack'
import * as Styles from './accordionTrackStyle'
import { useState, useEffect } from 'react'
import ThumbnailsDraggable from '../thumbnails/thumbnailsDraggable'
import Thumbnails from '../thumbnails/thumbnails'
import ScrollContainer from '@components/scroll-container'
import { Droppable } from 'react-beautiful-dnd'
import ContentCoursesTrails from './contentCoursesTrails'
import ContentCourses from './contentCourses'
import { use } from 'i18next'
import React from 'react'

export default function AccordionTrack(props: IAccordionTranslate) {

  const [trails, setTrail] = useState(props.trailsData)
  const [ShowTrail, setShowTrail] = useState([]);
  const [IsLoading, setIsLoading] = useState<boolean>(props.isLoading);

  const create_UUID = () => {
    var dt = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0
      dt = Math.floor(dt / 16)
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
  }
  
  useEffect(()=>{
    if (Array.isArray(props.trailsData)) {
      setTrail(props.trailsData)

      let showHideTrail = []    
      props.trailsData.map(() => {
        showHideTrail.push(true)
      })    
      setShowTrail(showHideTrail)
    }    
  },[props.trailsData])

  useEffect(() => {
    setIsLoading(props.isLoading)
  }, [props.isLoading])

  return (
    <>
      {/* 
      //----------------------------------------------------------------------------
      // Carregamento de Cursos individuais
      //---------------------------------------------------------------------------- 
    */}
      <React.StrictMode>
      <ContentCourses TrailName={''}>
        <div>
          <Styles.TypographyMyContents>
            {props.textMeusConteudos ? props.textMeusConteudos : 'Meus Conteúdos'}
          </Styles.TypographyMyContents>
          <h2
            style={{ fontFamily: 'PT Sans', fontWeight: 700, fontSize: 16, color: '#000000' }}
          >
            {
              IsLoading ?
              <>
                <Styles.LoadingContent style={{width: 200, height: 20}}></Styles.LoadingContent>
              </>
              :
              <>
                {props.textTotalDe ? props.textTotalDe : 'Total de'} {props.courseData.length} {props.textRegistros ? props.textRegistros : 'registros'}
              </>
            }            
          </h2>
        </div>
        
        <Droppable droppableId={'0'} direction="horizontal">
          {(provided) => {
            return (
              <Styles.ContainerTrailsEmpty>
                <ScrollContainer
                  stepMove={380}
                  isVisibleControlsButtons
                  sizeArrowButton={80}
                  marginsArrowButton={10}
                  horizontalMarginInternScroll={'5px'}
                  styles={{ justifyContent: 'flex-start', width: '100%' }}
                  refreshResize={props.updateScrollSize}
                >
                  
                  <Styles.ContainerCard ref={provided.innerRef} {...provided.droppableProps}>
                    {
                      IsLoading ?
                      <>
                        <Thumbnails 
                            variant='default'
                            isDisabled={false}
                            isLoading
                        />
                        <Thumbnails 
                            variant='default'
                            isDisabled={false}
                            isLoading
                        />
                        <Thumbnails 
                            variant='default'
                            isDisabled={false}
                            isLoading
                        />        
                        <Thumbnails 
                            variant='default'
                            isDisabled={false}
                            isLoading
                        />                                                                   
                      </>
                      :
                      <>
                        <div 
                          onClick={() => { 
                            props.onNewTrail && props.onNewTrail() 
                          }} 
                          style={{wordWrap: 'break-word'}}
                        >
                          <Thumbnails variant='add' isDisabled={false} txtCriarNovoCurso={props.txtCriarNovoCurso} />
                        </div>
                        {
                          props.courseData.map((el, contentIndex) => {
                            return (
                              <>
                                <ThumbnailsDraggable
                                  isDisabled={el.active}
                                  key={`content${contentIndex}`}
                                  id={`content${contentIndex}`}
                                  index={contentIndex}
                                  title={el.title}
                                  variant={'default'}
                                  handleSwitchAtivarIndividual={(checked) => {
                                    props.handleSwitchAtivarIndividual(el.id, checked)
                                  }}
                                  isIndividual={el.active_individual}
                                  showSwitchIndividual
                                  src={el.settings.cover_thumb_url}
                                  txtButtonLabel={props.txtButtonLabel}
                                  txtAtivarCurso={props.txtAtivarCurso}
                                  txtCriarNovoCurso={props.txtCriarNovoCurso}
                                  handleClickCourse={() => {props.handleEditCourse(el.id)}}
                                  handleClickPopOverEdit={() => {props.handlePopOverEdit(el.id)}}
                                  handleClickPopOverMove={() => {props.handlePopOverMove(el.id)}}
                                  handleClickPopOverDelete={() => {
                                    props.handleDeleteCourse(el.id)
                                  }}
                                  txtPopOverEditContent={props.txtPopOverEditContent}
                                  txtPopOverMoveToTrails={props.txtPopOverMoveToTrails}
                                  txtPopOverDeleteContent={props.txtPopOverDeleteContent}                                                                                  
                                />                          
                              </>
                              
                            )
                          })
                        }
                        </>
                    }                  
                  </Styles.ContainerCard>
                </ScrollContainer>
                {provided.placeholder}
              </Styles.ContainerTrailsEmpty>
            )
          }}
        </Droppable>
      </ContentCourses>  
      {
        !IsLoading &&
        <>
          <Styles.TypographyMyTrails>
            {props.textMinhasTrihas ? props.textMinhasTrihas : 'Minhas Trilhas'}
          </Styles.TypographyMyTrails>
          {/* 
          //----------------------------------------------------------------------------
          // Carregamento de trilhas
          //---------------------------------------------------------------------------- 
          */}
          {
            trails && trails.map((trail, trailIndex) => {
              return (
                <>              
                  <ContentCoursesTrails
                    key={`contentTrails${trailIndex}`}
                    id={`contentTrails${trailIndex}`}
                    TrailName={trail.name}
                    ativo={trail.active}
                    handleChangeCheck={(bActive: boolean) => {
                      if (props.handleSwitchActiveTrail) {
                        props.handleSwitchActiveTrail(trailIndex, bActive)
                      }
                    }}
                    handleChangeTrailName={(name: boolean) => {
                      if (props.onSetNameTrail) {
                        props.onSetNameTrail(name, trailIndex)
                      }
                    }}
                    handleChangeShow={(bShow) => {
                      setShowTrail((prev) => {
                        prev = { ...prev }       
                        prev[trailIndex] = bShow
                        return prev
                      })                  
                    }}
                    txtAtivarTrilha={props.txtAtivarTrilha}
                    handlePopOverTrailEdit={(id: string) => { props.handlePopOverTrailEdit(id) }}
                    handlePopOverTrailDelete={(id: string) => { props.handlePopOverTrailDelete(id) }}
                  >
                    {
                      ShowTrail.length === 0 || ShowTrail[trailIndex] &&                  
                      <Droppable droppableId={(trailIndex+1).toString()} direction="horizontal">
                        {(provided) => {
                          return (
                            <Styles.ContainerTrailsNormal
                              key={`contentTrailsDrop${trailIndex}`}
                            >
                              <ScrollContainer
                                stepMove={380}
                                isVisibleControlsButtons
                                sizeArrowButton={80}
                                marginsArrowButton={10}
                                horizontalMarginInternScroll={'5px'}
                                refreshResize={props.updateScrollSize}
                                styles={{ backgroundColor: '#ebebeb', justifyContent: 'flex-start', width: '100%' }}
                              >

                                <Styles.ContainerCard ref={provided.innerRef} {...provided.droppableProps}>
                                  {
                                    trail.trail_course && trail.trail_course.map((el, courseTrailIndex) => {
                                      return (
                                        <>
                                          <ThumbnailsDraggable
                                            key={`contentTrails${trailIndex}_course${courseTrailIndex}`}                                        
                                            id={`contentTrails${trailIndex}_course${courseTrailIndex}`}                                        
                                            isDisabled={trail.active === false ? false : el.course.active}
                                            index={courseTrailIndex}
                                            title={el.course.title}
                                            variant={'default'}
                                            handleClickCourse={() => {
                                              props.handleEditCourse(el.course.id)
                                            }}
                                            showSwitchIndividual={false}
                                            src={el.course.settings.cover_thumb_url}
                                            txtButtonLabel={props.txtButtonLabel}
                                            txtAtivarCurso={props.txtAtivarCurso}
                                            txtCriarNovoCurso={props.txtCriarNovoCurso}
                                            handleClickPopOverEdit={() => {props.handlePopOverEdit(el.course.id)}}
                                            handleClickPopOverMove={() => {props.handlePopOverMove(el.course.id)}}
                                            handleClickPopOverDelete={() => {
                                              props.handleDeleteCourseTrail(el.course.id)
                                            }}                                        
                                            txtPopOverEditContent={props.txtPopOverEditContent}
                                            txtPopOverMoveToTrails={props.txtPopOverMoveToTrails}
                                            txtPopOverDeleteContent={props.txtPopOverDeleteContent}
                                          />
                                        </>
                                      )
                                    })
                                  }

                                </Styles.ContainerCard>
                              </ScrollContainer>
                              {provided.placeholder}
                            </Styles.ContainerTrailsNormal>
                          )
                        }
                        }
                      </Droppable>
                    }
                  </ContentCoursesTrails>
                </>
              )
            })
          }
        </>        
      }        
      </React.StrictMode>
    </>
  )
}