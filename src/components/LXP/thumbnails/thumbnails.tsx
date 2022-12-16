import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './thumbnailsStyle'
import { IThumbnails, IThumbnailsTranslate } from './thumbnails.d'
import VectorEllipse from './vectorEllipse'
import VectorCross from './vectorCross'
import React, { useState, useEffect } from 'react'
import * as Icons from '../../../shared/icons'
import Switch from 'react-switch'
import Button from '../../buttons'
import  PopOver,{ PopOverItem } from '../popOver'

export default function Thumbnails({ 
  variant, 
  src, 
  handleClickCourse, 
  handleClickNew, 
  handleClickContent, 
  handleChange,
  handleClickPopOverDelete,
  handleClickPopOverMove,
  handleClickPopOverEdit,
  title, 
  provided, 
  disabled, 
  txtButtonLabel, 
  txtCriarNovoCurso, 
  txtAtivarCurso,
  txtPopOverDeleteContent,
  txtPopOverMoveToTrails,
  txtPopOverEditContent 
}: IThumbnailsTranslate) {

  const defaultImg = "https://media.itpro.co.uk/image/upload/f_auto,t_primary-image-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg"
  const [checked, setChecked] = useState<boolean>(!disabled)
  const [showModules, setShowModules] = useState<boolean>(false)
  const [ElementPopover, setElementPopover] = useState(null);

  useEffect (() => {
    setChecked(!disabled)
  }, [disabled])

  const handleChangeCheck = (checkedValue: boolean) => {
    setChecked(checkedValue)
    handleChange(checkedValue)
  };

  const handleHoverImage = () => {
    if (!showModules) {
      setShowModules(true)
    }
  }

  const handleHoverImageOut = () => {
    if (showModules) {
      setShowModules(false)
    }
  }

  return (
    <>    
      <ThemeProvider theme={FRSTTheme}>
        {variant === 'default' ?
          <>
            <Styles.ContainerThumbnails className={variant = 'default'} ref={provided ? provided.innerRef : null} {...provided ? provided.draggableProps : null}>
              <Styles.ContainerButton onMouseOut={handleHoverImageOut} className='buttonVisible' active={showModules}>
                <Button label={txtButtonLabel ? txtButtonLabel : 'Ir para o curso'} variant='primary' handleClick={handleClickCourse} />
              </Styles.ContainerButton>
              <Styles.GeralThumbnails ref={provided ? provided.innerRef : null} {...provided ? provided.dragHandleProps : null}>
                <Styles.Thumbnails>
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
                <Styles.Thumbnails >
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
                <Styles.Thumbnails >
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
              </Styles.GeralThumbnails>
              <Styles.Image onMouseEnter={handleHoverImage} className='imageHover' src={src || defaultImg} active={checked} />
              <Styles.ContainerMain>
                <Styles.Typography style={{ color: checked ? '#000000' : '#bdbdbd' }}>{title && title?.length > 17 ? `${title.substring(0, 17)}...` : title}</Styles.Typography>
                <Styles.IconVertical onClick={(element: any) => {
                    setElementPopover(element.currentTarget)
                }}>
                  <Icons.MoreVertical fill={checked ? '#000000' : '#bdbdbd'} />
                </Styles.IconVertical>
              </Styles.ContainerMain >
              <Styles.ContainerAtivar>
                <Styles.TypographyAtivar active={checked} style={{ fontWeight: checked ? 700 : 400 }}>
                  {txtAtivarCurso ? txtAtivarCurso : 'Ativar curso'}
                </Styles.TypographyAtivar>
                <Switch
                  onChange={handleChangeCheck}
                  checked={checked}
                  height={16}
                  width={40}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  handleDiameter={24}
                  onHandleColor='#ffffff'
                  offHandleColor='#ffffff'
                  onColor='#FF4D0D'
                  offColor='#ebebeb'
                  activeBoxShadow={checked ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                  boxShadow={checked ? '0 0 2px 2px #FF4D0D' : '0 0 2px 2px #757575'}
                />
              </Styles.ContainerAtivar>
            </Styles.ContainerThumbnails>
          </>
          : variant === 'add' ?
            <Styles.ContainerThumbnailsAdd>
              <Styles.ContainerEllipse onClick={handleClickNew}>
                <VectorCross />
              </Styles.ContainerEllipse>
              <Styles.TypographyAdd >
                {txtCriarNovoCurso ? txtCriarNovoCurso : 'Criar novo curso'}
              </Styles.TypographyAdd>
            </Styles.ContainerThumbnailsAdd>

            : null
        }
        <PopOver
          element={ElementPopover}
          onClosePopover={() => {
            setElementPopover(null)
          }}
          variant={'upRight'}
        >
          <div style={{display: 'flex', flexDirection: 'column', padding: 0}}>            
            <PopOverItem 
              label={txtPopOverEditContent ? txtPopOverEditContent : "Editar Conteúdo"}
              onClick={handleClickPopOverEdit}
              style={{
                borderBottom: '1px black solid'
              }}
            />
            <PopOverItem 
              label={txtPopOverMoveToTrails ? txtPopOverMoveToTrails : "Mover para Trilhas"}
              onClick={handleClickPopOverMove}
            />
            <PopOverItem 
              label={txtPopOverDeleteContent ? txtPopOverDeleteContent : "Excluir Conteúdo"}
              onClick={handleClickPopOverDelete}
              icon={<Icons.Trash fill='#C00F00'/>}
              noBorder={true}
              isFontBold={true}
              color={'#C00F00'}
            />
          </div>
        </PopOver>       
      </ThemeProvider>
    </>
  )
}