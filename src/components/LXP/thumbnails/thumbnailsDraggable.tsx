import '../../../shared/global.css'
import { IThumbnails } from './thumbnails'
import Thumbnails from './thumbnails'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function ThumbnailsDraggable({ variant, src, handleClickCourse, handleClickNew, handleClickContent, handleChange, title, id, index }: IThumbnails) {

  return (
    <>    
      <Draggable
        key={id}
        index={index}
        draggableId={id}
      >
        {(provided) => {
          return (
            <Thumbnails 
              src={src}
              handleClickCourse={handleClickCourse}
              handleChange={handleChange}
              handleClickNew={handleClickNew}
              handleClickContent={handleClickContent}
              variant={variant}
              title={title}
              id={id}
              index={index}    
              provided={provided}
            />
          )}
        }
      </Draggable>
    </>
  )
}