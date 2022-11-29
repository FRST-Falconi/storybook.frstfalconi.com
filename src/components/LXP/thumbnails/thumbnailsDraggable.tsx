import '../../../shared/global.css'
import { IThumbnails } from './thumbnails.d'
import Thumbnails from './thumbnails'
import React, { useState, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function ThumbnailsDraggable({ variant, src, handleClickCourse, handleClickNew, handleClickContent, handleChange, title, id, index, disabled }: IThumbnails) {

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
              disabled={disabled}
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