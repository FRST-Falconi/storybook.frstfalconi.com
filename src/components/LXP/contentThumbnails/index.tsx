import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './contentThumbnailsStyle'
import { IContentThumbnails } from './contentThumbnails'
import VectorDown from './vectorDown'
import VectorUp from './vectorUp'
import VectorEllipse from './vectorEllipse'
import { useEffect, useState } from 'react'
import * as Icons from '../../../shared/icons'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export enum typeContent {
  Content,
  Video,
  PodCast,
  QuizSucessError,
  Quiz,
  Certificate
}

export default function ContentThumbnails({
  label,
  contentList,
  variant,
  src,
  disabled,
  icon,
  onChange,
  handleClick,
  handleReloadItens,
  title,
  removeContentList,
  onChangeOrder,
  isOpen
}: IContentThumbnails) {
  const defaultImg =
    'https://i.gyazo.com/35d9c18bbdc6a48d843b0aa24ab2499e.png'

  const iconList = [
    <Icons.Content fill={'#EE4C15'} />,
    <Icons.Video fill={'#EE4C15'} />,
    <Icons.PodCast fill={'#EE4C15'} />,
    <Icons.QuizSucessError fill={'#EE4C15'} />,
    <Icons.Quiz fill={'#EE4C15'} />,
    <Icons.Certificate fill={'#EE4C15'} />
  ]

  const [contentListData, setContentListData] = useState(contentList ? contentList : [])
  const [up, setUp] = useState(isOpen)

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }
  const change = () => {
    {
      up ? setUp(false) : setUp(true)
      return handleReloadItens()
    }
  }

  useEffect(() => {
    setContentListData(contentList ? contentList : [])
  }, [contentList])

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }
    const reorderedItems = reorder(contentListData, result.source.index, result.destination.index)
    setContentListData(reorderedItems)
    onChangeOrder(reorderedItems)
  }

  function Exibir() {

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="contentListData">
          {(provided: any) => (
            <div style={{backgroundColor: '#D1D5DB', height: contentListData.length > 0 ? 'auto' : '462px', width: 270}} ref={provided.innerRef}>
              {contentListData?.map((item, index) => {
                return (
                  <Draggable draggableId={item.title} index={index} key={index}>
                    {(provided: any) => (
                      <Styles.ContainerCard ref={provided.innerRef} {...provided.draggableProps}>
                        <Styles.Thumbnails
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                        </Styles.Thumbnails>
                        <Styles.Thumbnails
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                        </Styles.Thumbnails>
                        <Styles.Thumbnails
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                          <VectorEllipse />
                        </Styles.Thumbnails>
                        <div onClick={handleClick} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', cursor: 'pointer'}}>
                          {iconList[item.type]}
                          <Styles.Title >{item.title}</Styles.Title>
                        </div>
                        <Styles.IconTrash className="trash" onClick={removeContentList}>
                          <Icons.TrashIcon fill={'#C00F00'} />
                        </Styles.IconTrash>
                      </Styles.ContainerCard>
                    )}
                  </Draggable>
                )
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      {variant === 'individualCourse' ? (
        <div>
          <Styles.Container className={(variant = 'individualCourse')}>
            <Styles.Image src={src || defaultImg} />
            <Styles.Content>
              <Styles.Typography>{title}</Styles.Typography>
              <Styles.Select onClick={change}>{up ? <VectorUp /> : <VectorDown />}</Styles.Select>
            </Styles.Content>
          </Styles.Container>

          <div >
          {up ? (
            <Exibir />
          ) : null}
          </div>
        </div>
      ) : variant === 'trilha' ? (
        <div>
          <Styles.ContainerTrilha className={(variant = 'trilha')}>
            <Styles.ContainerChoice>
              <Styles.TypographyChoice>Escolha o curso que deseja editar</Styles.TypographyChoice>
              <Styles.SelectChoice placeholder={title} value={title} onChange={onChange}>
                <Styles.OptionChoice value={title}>{title}</Styles.OptionChoice>
              </Styles.SelectChoice>
            </Styles.ContainerChoice>
            <Styles.ImageChoice src={src || defaultImg} />
            <Styles.ContentChoice>
              <Styles.Typography>{title}</Styles.Typography>
              <Styles.Select onClick={change}>{up ? <VectorUp /> : <VectorDown />}</Styles.Select>
            </Styles.ContentChoice>
          </Styles.ContainerTrilha>

          {up ? (
            <div style={{backgroundColor: '#D1D5DB', width: 270}}>
              <Exibir />
            </div>
          ) : null}
        </div>
      ) : null}
    </ThemeProvider>
  )
}
