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
   handleSwitchAtivarIndividual, 
   title, 
   id, 
   index, 
   isDisabled, 
   txtButtonLabel, 
   txtAtivarCurso, 
   showSwitchIndividual,
   txtCriarNovoCurso,
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
        key={id.toString()}
        index={index}
        draggableId={id}
      >
        {(provided) => {
          return (
            <Thumbnails 
              src={src}
              isDisabled={isDisabled}
              handleClickCourse={handleClickCourse}
              handleSwitchAtivarIndividual={handleSwitchAtivarIndividual}
              handleClickNew={handleClickNew}
              handleClickContent={handleClickContent}
              variant={variant}
              title={title}
              id={id}
              showSwitchIndividual={showSwitchIndividual}
              index={index}    
              provided={provided}
              txtButtonLabel={txtButtonLabel}
              txtAtivarCurso={txtAtivarCurso}
              txtCriarNovoCurso={txtCriarNovoCurso}
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