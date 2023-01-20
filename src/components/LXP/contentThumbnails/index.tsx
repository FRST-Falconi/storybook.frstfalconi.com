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
  removeContentList
}: IContentThumbnails) {
  const defaultImg =
    'https://media.itpro.co.uk/image/upload/f_auto,t_primary-image-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg'

  const iconList = [
    <Icons.Content fill={'#FF4D0D'} />,
    <Icons.Video />,
    <Icons.PodCast fill={'#FF4D0D'} />,
    <Icons.QuizSucessError fill={'#FF4D0D'} />,
    <Icons.Quiz fill={'#FF4D0D'} />,
    <Icons.Certificate fill={'#FF4D0D'} />
  ]

  const [contentListData, setContentListData] = useState(contentList)
  const [down, setDown] = useState(true)
  const [up, setUp] = useState(false)

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }
  const change = () => {
    {
      up ? setUp(false) : setUp(true)
      setDown(false)
      return handleReloadItens()
    }
  }

  function Exibir() {
    const onDragEnd = (result) => {
      if (!result.destination) {
        return
      }
      const reorderedItems = reorder(contentListData, result.source.index, result.destination.index)
      setContentListData(reorderedItems)
    }

    useEffect(() => {
      setContentListData(contentList)
    }, [contentList])

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="contentListData">
          {(provided: any) => (
            <div ref={provided.innerRef}>
              {contentListData.map((item, index) => {
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
                        {iconList[item.type]}
                        <Styles.Title onClick={handleClick}>{item.title}</Styles.Title>
                        <Styles.IconTrash className="trash" onClick={removeContentList}>
                          <Icons.TrashIcon fill={'#FF4D0D'} />
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

          {up ? (
            <div>
              <Exibir />
            </div>
          ) : null}
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
            <div>
              <Exibir />
            </div>
          ) : null}
        </div>
      ) : null}
    </ThemeProvider>
  )
}
