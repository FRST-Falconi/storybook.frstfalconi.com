import '../../../shared/global.css'
import { IAccordionTranslate } from './IAccordionTrack'
import * as Styles from './accordionTrackStyle'
import { useState, useEffect } from 'react'
import ThumbnailsDraggable from '../thumbnails/thumbnailsDraggable'
import Thumbnails from '../thumbnails/thumbnails'
import ScrollContainer from '@components/scroll-container'
import { Droppable } from '@hello-pangea/dnd'
import ContentCoursesTrails from './contentCoursesTrails'
import ContentCourses from './contentCourses'
import React from 'react'

export default function AccordionTrack(props: IAccordionTranslate) {

  const [trails, setTrail] = useState(props.trailsData)

  const [courseData, setCourseData] = useState(props.courseData)
  const [courseIndividualData, setCourseIndividualData] = useState(props.courseIndividualData)

  const [ShowTrail, setShowTrail] = useState([]);
  const [ShowIndividual, setShowIndividual] = useState<boolean>(true);
  const [IsLoading, setIsLoading] = useState<boolean>(props.isLoading);
  const MEUS_CONTEUDOS_CONTENT = '0'
  const CONTEUDO_INDIVIDUAL_CONTENT = '1'

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
      props.trailsData.map((item) => {
        showHideTrail.push(true)
      })    
      setShowTrail(showHideTrail)
    }    
  },[props.trailsData])


  useEffect(() => {
    setIsLoading(props.isLoading)
  }, [props.isLoading])

  useEffect(() => {
    setCourseData(props.courseData)
  }, [props.courseData])

  useEffect(() => {
    setCourseIndividualData(props.courseIndividualData)
  }, [props.courseIndividualData])

  return (
    <>
      {
      /* ---------------------------------------------------------
        Meus Conteúdos
      --------------------------------------------------------- */
      }   
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
        
        {/* Meus conteúdos */}
        <Droppable droppableId={MEUS_CONTEUDOS_CONTENT} direction="horizontal" key={MEUS_CONTEUDOS_CONTENT}>
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
                          courseData && courseData.map((el, contentIndex) => {
                            return (
                              <>
                                <ThumbnailsDraggable
                                  isDisabled={el.active}
                                  key={`content${contentIndex}`}
                                  id={`content${contentIndex}`}
                                  index={contentIndex}
                                  title={el.title}
                                  variant={'default'}
                                  handleSwitchAtivar={(checked) => {
                                    props.handleSwitchAtivarConteudo(el.id, checked)
                                  }}
                                  isActive={el.active_individual}
                                  showSwitch
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
      /* ---------------------------------------------------------
        Curso Individual
      --------------------------------------------------------- */
      }           
      {
        !IsLoading &&
        <>
          {/* 
          //----------------------------------------------------------------------------
          // Carregamento de trilhas
          //---------------------------------------------------------------------------- 
          */}
          <ContentCoursesTrails
            TrailName={props.txtCursoIndividual ? props.txtCursoIndividual : 'Conteúdo individual'}
            ativo={true}
            show={ShowIndividual}
            handleChangeCheck={(bActive: boolean) => {
              // if (props.handleSwitchActiveTrail) {
              //   props.handleSwitchActiveTrail(trailIndex, bActive)
              // }
            }}
            handleChangeTrailName={(name: boolean) => {
              // if (props.onSetNameTrail) {
              //   props.onSetNameTrail(name, trailIndex)
              // }
            }}
            handleChangeShow={(bShow) => {
              console.log(bShow)
              setShowIndividual(bShow)           
            }}
            txtAtivarTrilha={props.txtAtivarTrilha}
            handlePopOverTrailEdit={(id: string) => { props.handlePopOverTrailEdit(id) }}
            handlePopOverTrailDelete={(id: string) => { props.handlePopOverTrailDelete(id) }}
          >
            {              
              <Droppable droppableId={CONTEUDO_INDIVIDUAL_CONTENT} direction="horizontal" key={CONTEUDO_INDIVIDUAL_CONTENT}>
                {(provided) => {
                  return (
                    <Styles.ContainerTrailsNormal style={{}}>
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
                            courseIndividualData && courseIndividualData.map((individual, individualIndex) => {
                              return (
                                <>
                                  <ThumbnailsDraggable
                                    key={`contentTrails${1}_individual${individualIndex}`}                                        
                                    id={`contentTrails${1}_individual${individualIndex}`}                                
                                    index={`${individualIndex}`}
                                    isDisabled={individual.active === false ? false : individual.active}
                                    title={individual.title}
                                    variant={'default'}
                                    showSwitch
                                    handleClickCourse={() => {
                                      props.handleEditCourse(individual.id)
                                    }}
                                    handleSwitchAtivar={(checked) => {
                                      props.handleSwitchAtivarConteudo(individual.id, checked)
                                    }}
                                    src={individual.settings.cover_thumb_url}
                                    txtButtonLabel={props.txtButtonLabel}
                                    txtAtivarCurso={props.txtAtivarCurso}
                                    txtCriarNovoCurso={props.txtCriarNovoCurso}
                                    handleClickPopOverEdit={() => {props.handlePopOverEdit(individual.id)}}
                                    handleClickPopOverMove={() => {props.handlePopOverMove(individual.id)}}
                                    handleClickPopOverDelete={() => {
                                      props.handleDeleteCourseTrail(individual.id)
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
      }

      {
      /* ---------------------------------------------------------
        Trilhas 
      --------------------------------------------------------- */
      }           
      {
        !IsLoading &&
        <>
          <Styles.TypographyMyTrails style={{marginTop: 20}}>
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
                    showButtonActive={true}
                    key={`contentTrails${trailIndex}`}
                    id={`${3000}${trailIndex}`}
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
                    showButtonPublish={true}
                    handlePublicarTrilha={props.handlePublicarTrilha}
                    txtAtivarTrilha={props.txtAtivarTrilha}
                    handlePopOverTrailEdit={(id: string) => { props.handlePopOverTrailEdit(id) }}
                    handlePopOverTrailDelete={(id: string) => { props.handlePopOverTrailDelete(id) }}
                  >
                    {
                      ShowTrail.length === 0 || ShowTrail[trailIndex] &&                  
                      <Droppable droppableId={(trailIndex+2).toString()} direction="horizontal" key={trailIndex+2}>
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
                                            id={`trail_${trailIndex}_course_${courseTrailIndex}`}                                                               
                                            index={`${courseTrailIndex}`}                                          
                                            isDisabled={trail.active === false ? false : el.course.active}
                                            title={el.course.title}
                                            variant={'default'}
                                            handleClickCourse={() => {
                                              props.handleEditCourse(el.course.id)
                                            }}
                                            showSwitch={true}
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