import '../../../shared/global.css'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { DragDropContext } from 'react-beautiful-dnd'
import { IAccordionTranslate } from './IAccordionTrack'
import AccordionTrack from './accordionTrack'

export default function AccordionTrackList(
  { trailsData, handleChange, onNewTrail, 
  textMeusConteudos, textTotalDe, textRegistros, textMinhasTrihas, txtAtivarCurso, txtButtonLabel, txtCriarNovoCurso
}: IAccordionTranslate) {
  
  const [trails, setTrails] = useState(trailsData)  
  const [updateScrollSize, setUpdateScrollSize] = useState(0)

  useEffect(() => {
    if (handleChange) {
      handleChange(trails)
    } 
  }, [trails])

  useEffect(() => {
    setTrails(trailsData)
  }, [trailsData])

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return
    }

    const itemCopy = { ...trails[source.droppableId].items[source.index] }
    setTrails((prev) => {
      prev = { ...prev }
      prev[source.droppableId].items.splice(source.index, 1)
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
      return prev
    })

    setUpdateScrollSize(updateScrollSize+1)
  }

  const setActiveTrail = (active, id) => {
    
    const itemCopy = { ...trails[id]}
    setTrails((prev) => {
      prev = { ...prev }  
      for (let i=0; i<prev[id].items.length; i++) {
        prev[id].items[i].disabled = !active
      }
      prev[id].ativo = active
      return prev
    })
  }

  const setShowTrail = (active, id) => {
    
    const itemCopy = { ...trails[id]}
    setTrails((prev) => {      
      prev = { ...prev }
      
      prev[id].show = active      
      return prev
    })
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
              variant={"opened"}
              onSetActiveTrail={(active, id) => {
                setActiveTrail(active, id)
              }}
              onSetShowTrail={(active, id) => {
                setShowTrail(active, id)
              }}    
              onNewTrail={(id) => {
                if (onNewTrail) {
                  onNewTrail(id)
                }
              }} 
              textMeusConteudos={textMeusConteudos}  
              textTotalDe={textTotalDe}      
              textRegistros={textRegistros}
              textMinhasTrihas={textMinhasTrihas}
              txtAtivarCurso={txtAtivarCurso}
              txtButtonLabel={txtButtonLabel}
              txtCriarNovoCurso={txtCriarNovoCurso}
              updateScrollSize={updateScrollSize}              
            />
          }                
        </>          
      }
      </DragDropContext>
    </ThemeProvider>
  );
}