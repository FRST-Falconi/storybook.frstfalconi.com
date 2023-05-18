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
import { styled } from '@mui/material/styles';
// import Tooltip from '@components/LXP/tooltip'
import  PopOver,{ PopOverItem } from '../popOver'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export default function Thumbnails({ 
  variant, 
  src, 
  showSwitch,
  handleClickCourse, 
  handleClickNew, 
  handleSwitchAtivar,
  handleClickPopOverDelete,
  handleClickPopOverEdit,
  title, 
  provided, 
  isDisabled,
  isLoading,
  txtButtonLabel, 
  txtCriarNovoCurso,
  txtCriarNovoCurso2, 
  txtAtivarCurso,
  txtPopOverDeleteContent,
  txtPopOverMoveToTrails,
  txtPopOverEditContent,
  isActive
}: IThumbnailsTranslate) {

  const defaultImg = "https://i.gyazo.com/35d9c18bbdc6a48d843b0aa24ab2499e.png"
  const [ativo, setAtivo] = useState<boolean>(isDisabled)
  const [showModules, setShowModules] = useState<boolean>(false)
  const [ElementPopover, setElementPopover] = useState(null);
  const [Loading, setLoading] = useState(isLoading);

  useEffect (() => {
    setAtivo(isDisabled)
  }, [isDisabled])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading]);

  const handleChangeCheck = (checkedValue: boolean) => {
    setAtivo(checkedValue)
    handleSwitchAtivar(checkedValue)
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

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <>    
      <ThemeProvider theme={FRSTTheme}>
        {variant === 'default' ?
          <>
            {Loading ?
              <Styles.LoadingContainer>
                <Styles.LoadingImage/>
                <Styles.LoadingContent/>
                <Styles.LoadingContent style={{width: '50%'}} />
              </Styles.LoadingContainer>
              :
              <Styles.ContainerThumbnails showSwitchIndividual={showSwitch} className={variant = 'default'} ref={provided ? provided.innerRef : null} {...provided ? provided.draggableProps : null}>
                <Styles.ContainerButton onMouseOut={handleHoverImageOut} className='buttonVisible' active={showModules}>
                  <Button label={txtButtonLabel ? txtButtonLabel : 'Ver conteúdo'} variant='primary' handleClick={handleClickCourse} />
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
                <Styles.Image onMouseEnter={handleHoverImage} className='imageHover' src={src || defaultImg} active={ativo} />
                <Styles.ContainerMain>                  
                  <LightTooltip title={title}>
                    <Styles.Typography style={{ color: ativo ? '#000000' : '#bdbdbd' }}>{title && title?.length > 17 ? `${title.substring(0, 17)}...` : title}</Styles.Typography>
                  </LightTooltip> 
                  <Styles.IconVertical onClick={(element: any) => {
                    setElementPopover(element.currentTarget)
                  }}>
                    <Icons.MoreVertical fill={ativo ? '#000000' : '#bdbdbd'} />
                  </Styles.IconVertical>
                </Styles.ContainerMain>
                {
                  showSwitch &&
                  <Styles.ContainerAtivar>
                    <Styles.TypographyAtivar active={ativo} style={{ fontWeight: ativo ? 700 : 400 }}>
                      {txtAtivarCurso ? txtAtivarCurso : 'Ativar Curso'}
                    </Styles.TypographyAtivar>
                  </Styles.ContainerAtivar>                
                }              
              </Styles.ContainerThumbnails>
            }
          </>
          : variant === 'add' ?
            <>
            {Loading ?
              <Styles.LoadingContainer>
                <Styles.LoadingImage/>
                <Styles.LoadingContent />
                <Styles.LoadingContent style={{width: '50%'}} />
              </Styles.LoadingContainer>
              :
              <Styles.ContainerThumbnailsAdd>
                <Styles.ContainerEllipse onClick={handleClickNew}>
                  <VectorCross />
                </Styles.ContainerEllipse>
                <Styles.TypographyAdd >
                  {txtCriarNovoCurso ? txtCriarNovoCurso : 'Criar novo conteúdo'}
                </Styles.TypographyAdd>
              </Styles.ContainerThumbnailsAdd>
            }
            </>
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
              onClick={() => {
                handleClickPopOverEdit()
                setElementPopover(null)
              }}
              style={{
                borderBottom: '1px black solid'
              }}
            />
            {/* <PopOverItem 
              label={txtPopOverMoveToTrails ? txtPopOverMoveToTrails : "Mover para Trilhas"}
              onClick={handleClickPopOverMove}
            /> */}
            <PopOverItem 
              label={txtPopOverDeleteContent ? txtPopOverDeleteContent : "Excluir Conteúdo"}
              onClick={() => {
                handleClickPopOverDelete()
                setElementPopover(null)
              }}
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