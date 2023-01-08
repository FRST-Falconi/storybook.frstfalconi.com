import '../../../shared/global.css'
import { IThumbnailsTranslate } from './thumbnails.d'
import Thumbnails from './thumbnails'
import { Draggable } from 'react-beautiful-dnd'

export default function ThumbnailsDraggable({
   variant, 
   src, 
   handleClickCourse, 
   handleClickNew, 
   handleClickContent, 
   handleChange, 
   title, 
   id, 
   index, 
   disabled, 
   txtButtonLabel, 
   txtAtivarCurso, 
   txtCriarNovoCurso,
   txtCriarNovoCurso2,
   handleClickPopOverDelete,
   handleClickPopOverEdit,
   handleClickPopOverMove,
   txtPopOverDeleteContent,
   txtPopOverEditContent,
   txtPopOverMoveToTrails 
  }: IThumbnailsTranslate) {

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
              txtButtonLabel={txtButtonLabel}
              txtAtivarCurso={txtAtivarCurso}
              txtCriarNovoCurso={txtCriarNovoCurso}
              txtCriarNovoCurso2={txtCriarNovoCurso2}
              handleClickPopOverDelete={handleClickPopOverDelete}
              handleClickPopOverEdit={handleClickPopOverEdit}
              handleClickPopOverMove={handleClickPopOverMove}
              txtPopOverDeleteContent={txtPopOverDeleteContent}
              txtPopOverEditContent={txtPopOverEditContent}
              txtPopOverMoveToTrails={txtPopOverMoveToTrails}              
            />
          )}
        }
      </Draggable>
    </>
  )
}