import '../../../shared/global.css'
import { IAccordionTranslate } from './IAccordionTrack'
import * as Styles from './accordionTrackStyle'
import { useState, useEffect } from 'react'
import ThumbnailsDraggable from '../thumbnails/thumbnailsDraggable'
import Thumbnails from '../thumbnails/thumbnails'
import ScrollContainer from '@components/scroll-container'
import { Droppable } from 'react-beautiful-dnd'
import AccordionTrackNormal from './accordionTrackNormal'
import AccordionTrackEmpty from './accordionTrackEmpty'

export default function AccordionTrack(props: IAccordionTranslate) {

  const [state, setState] = useState(props.trailsData)
  
  useEffect(()=>{
    if (Array.isArray(props.trailsData)) {
      setState(props.trailsData)
    }
  },[props.trailsData])

  return (
    <>
      {
        state && state.map((data, key) => {
          return (
            <>
              {
                key === 0 ?
                  <AccordionTrackEmpty
                    TrailName={data.TrailName}
                  >
                    <div>
                      <Styles.TypographyMyContents>
                        {props.textMeusConteudos ? props.textMeusConteudos : 'Meus Conteúdos'}
                      </Styles.TypographyMyContents>
                      <h2
                        style={{ fontFamily: 'PT Sans', fontWeight: 700, fontSize: 16, color: '#000000' }}
                      >
                        {props.textTotalDe ? props.textTotalDe : 'Total de'} {data.items.length} {props.textRegistros ? props.textRegistros : 'registros'}
                      </h2>
                    </div>

                    {
                      data.show &&
                      <Droppable droppableId={key.toString()} key={key} direction="horizontal">
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
                                  <div onClick={() => { props.onNewTrail && props.onNewTrail(key) }}>
                                    <Thumbnails variant='add' disabled={false} txtCriarNovoCurso={props.txtCriarNovoCurso}/>
                                  </div>
                                  {
                                    (data.ativo || data.ativo!) && data.items.map((el, index) => {
                                      return (
                                        <ThumbnailsDraggable
                                          disabled={el.disabled}
                                          key={index}
                                          id={el.id}
                                          index={index}
                                          title={el.name}
                                          variant={'default'}
                                          src={el.src}
                                          txtButtonLabel={props.txtButtonLabel}
                                          txtAtivarCurso={props.txtAtivarCurso}
                                          txtCriarNovoCurso={props.txtCriarNovoCurso}
                                          handleClickCourse={() => {props.handleEditCourse(el.id)}}
                                          handleChange={() => { }}
                                          handleClickContent={() => {}}
                                          handleClickPopOverEdit={() => {props.handlePopOverEdit(el.id)}}
                                          handleClickPopOverMove={() => {props.handlePopOverMove(el.id)}}
                                          handleClickPopOverDelete={() => {props.handlePopOverDelete(el.id)}}
                                          txtPopOverEditContent={props.txtPopOverEditContent}
                                          txtPopOverMoveToTrails={props.txtPopOverMoveToTrails}
                                          txtPopOverDeleteContent={props.txtPopOverDeleteContent}                                                                                  
                                        />
                                      )
                                    }
                                    )
                                  }

                                </Styles.ContainerCard>
                              </ScrollContainer>
                              {provided.placeholder}
                            </Styles.ContainerTrailsEmpty>
                          )
                        }}
                      </Droppable>
                    }
                  </AccordionTrackEmpty>

                  :
                  <>
                    {
                      key === 1 &&
                      <Styles.TypographyMyTrails>
                        {props.textMinhasTrihas ? props.textMinhasTrihas : 'Minhas Trilhas'}
                      </Styles.TypographyMyTrails>
                    }
                    <AccordionTrackNormal
                      id={data.id}
                      TrailName={data.TrailName}
                      ativo={data.ativo}
                      handleChangeCheck={(bActive: boolean) => {
                        if (props.onSetActiveTrail) {
                          props.onSetActiveTrail(bActive, key)
                        }
                      }}
                      handleChangeTrailName={(name: boolean) => {
                        if (props.onSetNameTrail) {
                          props.onSetNameTrail(name, key)
                        }
                      }}
                      handleChangeShow={(bShow) => {
                        if (props.onSetShowTrail) {
                          props.onSetShowTrail(bShow, key)
                        }
                      }}
                      handlePopOverTrailEdit={(id: string) => { props.handlePopOverTrailEdit(id) }}
                      handlePopOverTrailDelete={(id: string) => { props.handlePopOverTrailDelete(id) }}
                    >
                      {
                        data.show &&
                        <Droppable droppableId={key.toString()} key={key} direction="horizontal">
                          {(provided) => {
                            return (
                              <Styles.ContainerTrailsNormal>
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
                                    <div onClick={() => { props.onNewTrail && props.onNewTrail(key) }}>
                                      <Thumbnails variant='add' disabled={false} txtCriarNovoCurso={props.txtCriarNovoCurso}/>
                                    </div>
                                    {
                                      data.items && data.items.map((el, index) => {
                                        return (
                                          <>
                                            <ThumbnailsDraggable
                                              key={index}
                                              id={el.id}
                                              disabled={el.disabled}
                                              index={index}
                                              title={el.name}
                                              variant={'default'}
                                              handleChange={() => { }}
                                              handleClickCourse={() => {
                                                console.log(props.handleEditCourse)
                                                props.handleEditCourse(el.id)
                                              }}
                                              src={el.src}
                                              txtButtonLabel={props.txtButtonLabel}
                                              txtAtivarCurso={props.txtAtivarCurso}
                                              txtCriarNovoCurso={props.txtCriarNovoCurso}
                                              handleClickPopOverEdit={() => {props.handlePopOverEdit(el.id)}}
                                              handleClickPopOverMove={() => {props.handlePopOverMove(el.id)}}
                                              handleClickPopOverDelete={() => {props.handlePopOverDelete(el.id)}}
                                              txtPopOverEditContent={props.txtPopOverEditContent}
                                              txtPopOverMoveToTrails={props.txtPopOverMoveToTrails}
                                              txtPopOverDeleteContent={props.txtPopOverDeleteContent}
                                            />
                                          </>
                                        )
                                      }
                                      )
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
                    </AccordionTrackNormal>
                  </>
              }


            </>
          )
        })
      }

    </>
  )
}