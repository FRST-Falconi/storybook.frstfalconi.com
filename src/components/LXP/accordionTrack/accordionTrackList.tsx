import '../../../shared/global.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { DragDropContext } from 'react-beautiful-dnd'
import { IAccordionTranslate } from './IAccordionTrack'
import AccordionTrack from './accordionTrack'
import { v4 } from 'uuid'

export default function AccordionTrackList({ 
  trailsData, 
  courseData,
  handleChange, 
  onNewTrail, 
  handleEditCourse,
  // handlePopOverDelete,
  handlePopOverMove,
  handlePopOverEdit,
  handlePopOverTrailEdit,
  handlePopOverTrailDelete,
  handleSwitchActiveTrail,
  onSetNameTrail,
  handleSwitchAtivarIndividual,
  handleDeleteCourse, 
  handleDeleteCourseTrail,
  handleMessageError,
  handleUpdateTrail,
  txtPopOverDeleteContent,
  txtPopOverEditContent,
  txtPopOverMoveToTrails,
  textMeusConteudos, 
  textTotalDe, 
  textRegistros, 
  textMinhasTrihas, 
  txtAtivarCurso, 
  txtButtonLabel, 
  txtCriarNovoCurso,
  txtAtivarTrilha,
}: IAccordionTranslate) {
  
  const [trails, setTrails] = useState(trailsData)  
  const [updateScrollSize, setUpdateScrollSize] = useState(0)

  useEffect(() => {
    if (handleChange) {
      handleChange({courses: courseData, trails: trails })
    } 
  }, [trails])

  useEffect(() => {
    setTrails(trailsData)
  }, [trailsData])

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    if (destination.droppableId === '0') {
      if (handleMessageError) {
        handleMessageError("ERROR_COPY_TO_CONTENTS")
      }
      return
    }


    if (destination.droppableId !== source.droppableId) {

      let idVerification = 0
      if (source.droppableId === '0') {
        idVerification = courseData[source.index].id
      }
      else {
        idVerification = trails[source.droppableId-1].trail_course[source.index].course.id
      }

      let filterCourses = trails[destination.droppableId-1].trail_course.find(element => element.course.id === idVerification ) 
      if (filterCourses !== undefined) {
        if (handleMessageError) {
          handleMessageError("ERROR_DUPLICATE_CONTENTS")
        }
        return
      }
    }

    var itemCopy
    if (source.droppableId === '0') {
      itemCopy = { ...courseData[source.index] }  
    }
    else {
      itemCopy = { ...trails[source.droppableId-1].trail_course[source.index].course }
    }    

    console.log(trails[destination.droppableId-1].id, v4())
    let trailId = trails[destination.droppableId-1].id
      
    itemCopy = {
      "id": v4(),
      "trail_id": trailId,
      "course": itemCopy,
      "course_id": itemCopy.id,
      "order":0
    }

    setTrails((prev) => {
      prev = { ...prev }
      
      /// Armazendo o dado da trilha que será deletada
      let deletedItem = null
      if ((source.droppableId !== '0') && (source.droppableId !== destination.droppableId)){
        deletedItem = prev[source.droppableId-1].trail_course[source.index]
      }

      /// Verificando se a movimentação vai ser do conteúdo ou das trilhas
      if (source.droppableId !== '0') {
        prev[source.droppableId-1].trail_course.splice(source.index, 1)
      }
      prev[destination.droppableId-1].trail_course.splice(destination.index, 0, itemCopy)

      /// Atualizando a saida
      handleUpdateTrail(deletedItem, itemCopy, prev[destination.droppableId-1])

      return prev
    })

    

    setUpdateScrollSize(updateScrollSize+1)
  }

  const setActiveTrail = (index, active) => {    
    setTrails((prev) => {
      prev = { ...prev }  
      prev[index].active = active!

      handleSwitchActiveTrail(prev[index].id, active!)

      return prev
    })
    
  }

  const setNameTrail = (name, id) => {
    const itemCopy = { ...trails[id]}
    setTrails((prev) => {
      prev = { ...prev }       
      prev[id].name = name      
      return prev
    })
    onSetNameTrail(name, trails[id].id)
  }  

  return (
    <ThemeProvider theme={FRSTTheme}>
      <DragDropContext onDragEnd={handleDragEnd}>
      {
        <>  
          {
          trails &&
            <AccordionTrack
              trailsData={trails}
              courseData={courseData}
              handleSwitchActiveTrail={(index, active) => {
                setActiveTrail(index, active)
              }}
              onSetNameTrail={(name, id) => {
                setNameTrail(name, id)
              }} 
              onNewTrail={() => {
                if (onNewTrail) {
                  onNewTrail()
                }
              }} 
              handleSwitchAtivarIndividual={handleSwitchAtivarIndividual}
              handleEditCourse={handleEditCourse}
              textMeusConteudos={textMeusConteudos}  
              textTotalDe={textTotalDe}      
              textRegistros={textRegistros}
              textMinhasTrihas={textMinhasTrihas}
              txtAtivarCurso={txtAtivarCurso}
              txtAtivarTrilha={txtAtivarTrilha}
              txtButtonLabel={txtButtonLabel}
              txtCriarNovoCurso={txtCriarNovoCurso}
              updateScrollSize={updateScrollSize}
              handleDeleteCourse={handleDeleteCourse}
              handleDeleteCourseTrail={handleDeleteCourseTrail}
              handlePopOverEdit={handlePopOverEdit}
              handlePopOverTrailDelete={handlePopOverTrailDelete}
              handlePopOverTrailEdit={handlePopOverTrailEdit}
              handlePopOverMove={handlePopOverMove}
              txtPopOverDeleteContent={txtPopOverDeleteContent} 
              txtPopOverEditContent={txtPopOverEditContent}
              txtPopOverMoveToTrails={txtPopOverMoveToTrails}                                                    
            />
          }                
        </>          
      }
      </DragDropContext>
    </ThemeProvider>
  );
}