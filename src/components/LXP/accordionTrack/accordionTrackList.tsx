import '../../../shared/global.css'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import { DragDropContext } from 'react-beautiful-dnd'
import { IAccordionTrack } from './accordionTrack'
import AccordionTrack from './accordionTrack'
import { v4 } from 'uuid'

export default function AccordionTrackList({ ObjectsCard, variant, TrailName, handleClickContent, handleClickSelect, handleChangeCheck }: IAccordionTrack) {

  const item = {
    id: v4(),
    name: 'Curso de Bitcoin',
  }
  
  const item2 = {
    id: v4(),
    name: 'Curso de Liderança',
  }
  
  const item3 = {
    id: v4(),
    name: 'Curso de Negociação',
  }
  
  const item4 = {
    id: v4(),
    name: 'Curso de Vendas',
  }
  
  const item5 = {
    id: v4(),
    name: 'Curso de Letras',
  }
    
  const item6 = {
    id: v4(),
    name: 'Curso de Teste',
  }
  
  

  const [trails, setTrails] = useState(
    [
      {  
        id: v4(),
        TrailName: 'Trilha 1',
        items: [item, item2, item3, item4, item5, ],
        ativo: true,
        show: true,
      },
      {
        id: v4(),
        TrailName: 'Trilha 2',
        items: [],
        ativo: true,
        show: true,
      },
      {
        id: v4(),
        TrailName: 'Trilha 3',
        items: [],
        ativo: false,
        show: true,
      },   
    ]
  )  

  useEffect(() => {
    console.log('state', trails)    
  }, [trails])

  const handleDragEnd = ({ destination, source }) => {
    console.log(destination, source)

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
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <DragDropContext onDragEnd={handleDragEnd}>
      {
        
        <AccordionTrack
          ObjectsCard={trails}
          variant={"opened"}
        />          
      }
      </DragDropContext>
    </ThemeProvider>
  );
}