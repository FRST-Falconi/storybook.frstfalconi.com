import '../../../shared/global.css'
import { IThumbnailsTranslate } from './thumbnails.d'
import Thumbnails from './thumbnails'
import { Draggable } from '@hello-pangea/dnd'
// import { Draggable } from 'react-beautiful-dnd'

export default function ThumbnailsDraggable({
   variant, 
   src, 
   handleClickCourse, 
   handleClickNew, 
   handleClickContent, 
   handleSwitchAtivar, 
   title, 
   id, 
   index, 
   isDisabled, 
   isLoading, 
   txtButtonLabel, 
   txtAtivarCurso, 
   showSwitch,
   txtCriarNovoCurso,
   txtCriarNovoCurso2,
   handleClickPopOverDelete,
   handleClickPopOverEdit,
   handleClickPopOverMove,
   txtPopOverDeleteContent,
   txtPopOverEditContent,
   isActive,
   txtPopOverMoveToTrails 
  }: IThumbnailsTranslate) {

  return (
    <>    
      <Draggable
        key={id}
        index={parseInt(index)}
        draggableId={id}
      >
        {(provided) => {
          return (
            <Thumbnails 
              src={src}
              isDisabled={isDisabled}
              handleClickCourse={handleClickCourse}
              handleSwitchAtivar={handleSwitchAtivar}
              handleClickNew={handleClickNew}
              handleClickContent={handleClickContent}
              variant={variant}
              title={title}
              id={id}
              isActive={isActive}
              isLoading={isLoading}
              showSwitch={showSwitch}
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