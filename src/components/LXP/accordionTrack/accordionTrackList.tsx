import '../../../shared/global.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { DragDropContext } from '@hello-pangea/dnd'
// import { DragDropContext } from 'react-beautiful-dnd'
import { IAccordionTranslate } from './IAccordionTrack'
import AccordionTrack from './accordionTrack'
import { Course } from '@shared/icons'
import ModalLXP from '../../modal/modalLXP/Modal'

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
  handleSwitchAtivar,
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
  isLoading,
  handlePublicarTrilha,
  changeCourses,
  handlePublicarCheck,
  handleClickPopOverEditActivity,
  handleSwitchPrivateTrail
}: IAccordionTranslate) {

  const [trails, setTrails] = useState([])
  const [courses, setCourses] = useState([])
  const [ConteudoIndividual, setConteudoIndividual] = useState([])
  const [MeusConteudosData, setMeusConteudosData] = useState([])
  const [updateScrollSize, setUpdateScrollSize] = useState(0)

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

  useEffect(() => {
    console.log("Atualizou em accordionTrackList", courses)
    setMeusConteudosData(courses ? courses.filter(item => !item.active_individual) : [])
    setConteudoIndividual(courses ? courses.filter(item => item.active_individual) : [])
  }, [courses])

  useEffect(() => {
    console.log("Atualizou props em accordionTrackList", courseData)
    if (JSON.stringify(courseData) !== JSON.stringify(courses)) {
      console.log("Acessando os registros de Cursos")
      setCourses(courseData)
    }
  }, [courseData])

  useEffect(() => {   
    if (JSON.stringify(trailsData) !== JSON.stringify(trails)) {
      console.log("Acessando os registros de trilhas")
      setTrails(trailsData)
    }
  }, [trailsData])

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    if ((destination.droppableId === MEUS_CONTEUDOS_CONTENT) && (source.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT)) {
      if (handleMessageError) {
        handleMessageError('ERROR_COPY_TO_CONTENTS')
      }
      return
    }

    if (
      (destination.droppableId !== source.droppableId) && 
      ((destination.droppableId !== MEUS_CONTEUDOS_CONTENT) && (destination.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT))
    ){
      let idVerification = 0
      if ((source.droppableId === MEUS_CONTEUDOS_CONTENT) || (source.droppableId === CONTEUDO_INDIVIDUAL_CONTENT)) {
        let uuidConteudo = source.droppableId === MEUS_CONTEUDOS_CONTENT ? MeusConteudosData[source.index].uuid : ConteudoIndividual[source.index].uuid
        let indexTrail = courses.findIndex(item => item.uuid === uuidConteudo)
        
        idVerification = courseData[indexTrail].id

      } else {
        idVerification = trails[source.droppableId-2].trail_course[source.index].course.id
      }

      let filterCourses = trails[destination.droppableId-2].trail_course.find(
        (element) => element.course.id === idVerification
      )

      if (filterCourses !== undefined) {
        if (handleMessageError) {
          handleMessageError('ERROR_DUPLICATE_CONTENTS')
        }
        return
      }
    }

    /// Copiando do Meus conteúdos para Individual ou Individual para conteúdos
    if (
        ((source.droppableId === MEUS_CONTEUDOS_CONTENT) && (destination.droppableId === CONTEUDO_INDIVIDUAL_CONTENT)) ||
        ((source.droppableId === CONTEUDO_INDIVIDUAL_CONTENT) && (destination.droppableId === MEUS_CONTEUDOS_CONTENT))
      ) {

      /// Selecionando o UUID do conteúdo (se é individual ou não)
      let uuidConteudo = source.droppableId === MEUS_CONTEUDOS_CONTENT ? MeusConteudosData[source.index].uuid : ConteudoIndividual[source.index].uuid
      let indexTrail = courses.findIndex(item => item.uuid === uuidConteudo)
      
      if (indexTrail >= 0) {

        let changedCourse = courses[indexTrail]
        changedCourse.active_individual = destination.droppableId === CONTEUDO_INDIVIDUAL_CONTENT
        changeCourses(changedCourse)

        setCourses((prev) => {
          prev = [ ...prev ]
          prev[indexTrail].active_individual = destination.droppableId === CONTEUDO_INDIVIDUAL_CONTENT
          return prev
        })
      }      
    }
    else {
      var itemCopy
      if (source.droppableId === MEUS_CONTEUDOS_CONTENT) {
        itemCopy = { ...MeusConteudosData[source.index] }
      } else if (source.droppableId === CONTEUDO_INDIVIDUAL_CONTENT) {
        itemCopy = { ...ConteudoIndividual[source.index] }
      } else {
        itemCopy = { ...trails[source.droppableId-2].trail_course[source.index].course }
      }
  
      let trailId = trails[destination.droppableId - 2].id
  
      itemCopy = {
        id: create_UUID(),
        trail_id: trailId,
        course: itemCopy,
        course_id: itemCopy.id,
        order: 0
      }

      setTrails((prev) => {
        prev = [ ...prev ]
  
        /// Armazendo o dado da trilha que será deletada
        let deletedItem = null
        if (source.droppableId !== MEUS_CONTEUDOS_CONTENT && source.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT && source.droppableId !== destination.droppableId) {
          deletedItem = prev[source.droppableId - 2].trail_course[source.index]
        }
  
        /// Verificando se a movimentação vai ser do conteúdo ou das trilhas
        if (source.droppableId !== MEUS_CONTEUDOS_CONTENT && source.droppableId !== CONTEUDO_INDIVIDUAL_CONTENT) {
          prev[source.droppableId - 2].trail_course.splice(source.index, 1)
        }
        prev[destination.droppableId - 2].trail_course.splice(destination.index, 0, itemCopy)

        /// Atualizando a saida
        handleUpdateTrail(deletedItem, itemCopy, prev[destination.droppableId - 2])
        return prev
      })
    }

    setUpdateScrollSize(updateScrollSize + 1)
  }

  const setActiveTrail = (index, active) => {
    setTrails((prev) => {
      prev = { ...prev }
      prev[index].active = active!
      handleSwitchActiveTrail(prev[index].id, active!)
      return prev
    })
  }

  const setPrivateTrail = (index, bPrivate) => {
    setTrails((prev) => {
      prev = { ...prev }
      prev[index].private = bPrivate!
      handleSwitchPrivateTrail(prev[index].id, bPrivate!)
      return prev
    })
  }

  const setActiveContent = (id, active) => {
    let indexTrail = courses.findIndex(item => item.id === id)      
    setCourses((prev) => {
      prev = [ ...prev ]
      prev[indexTrail].active = active!
      handleSwitchAtivar(id, active!)
      return prev
    })
  }

  const setNameTrail = (name, id) => {
    const itemCopy = { ...trails[id] }
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
          <AccordionTrack
            trailsData={trails}
            courseData={MeusConteudosData}
            courseIndividualData={ConteudoIndividual}
            handleSwitchActiveTrail={(index, active) => {
              setActiveTrail(index, active)
            }}            
            handleSwitchPrivateTrail={(index, active) => {
              setPrivateTrail(index, active)
            }}
            onSetNameTrail={(name, id) => {
              setNameTrail(name, id)
            }}
            onNewTrail={() => {
              if (onNewTrail) {
                onNewTrail()
              }
            }}
            handleSwitchAtivarConteudo={setActiveContent}
            handleSwitchAtivar={handleSwitchAtivar}
            handleEditCourse={handleEditCourse}
            handlePublicarTrilha={handlePublicarTrilha}
            handlePublicarCheck={handlePublicarCheck}
            textMeusConteudos={textMeusConteudos}
            textTotalDe={textTotalDe}
            textRegistros={textRegistros}
            textMinhasTrihas={textMinhasTrihas}
            txtAtivarCurso={txtAtivarCurso}
            txtAtivarTrilha={txtAtivarTrilha}
            txtButtonLabel={txtButtonLabel}
            txtCriarNovoCurso={txtCriarNovoCurso}
            isLoading={isLoading}
            updateScrollSize={updateScrollSize}
            handleDeleteCourse={handleDeleteCourse}            
            handleDeleteCourseTrail={handleDeleteCourseTrail}            
            handlePopOverTrailDelete={handlePopOverTrailDelete}  
            handlePopOverEdit={handlePopOverEdit}
            handlePopOverTrailEdit={handlePopOverTrailEdit}
            handlePopOverMove={handlePopOverMove}
            txtPopOverDeleteContent={txtPopOverDeleteContent}
            txtPopOverMoveToTrails={txtPopOverMoveToTrails}
            txtPopOverEditContent={txtPopOverEditContent}
            handleClickPopOverEditActivity={handleClickPopOverEditActivity}
          />
        }        
      </DragDropContext>
    </ThemeProvider>
  )
}
