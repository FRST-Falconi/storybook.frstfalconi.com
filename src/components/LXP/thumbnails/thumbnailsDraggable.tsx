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
   isLoading, 
   txtButtonLabel, 
   txtAtivarCurso, 
   showSwitchIndividual,
   txtCriarNovoCurso,
   txtCriarNovoCurso2,
   handleClickPopOverDelete,
   handleClickPopOverEdit,
   handleClickPopOverMove,
   txtPopOverDeleteContent,
   txtPopOverEditContent,
   isIndividual,
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
              isIndividual={isIndividual}
              isLoading={isLoading}
              showSwitchIndividual={showSwitchIndividual}
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