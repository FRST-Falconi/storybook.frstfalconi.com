import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './thumbnailsStyle'
import { IThumbnails, IThumbnailsTranslate } from './thumbnails.d'
import VectorEllipse from './vectorEllipse'
import HeaderVectorElipses from './headerVectorElipses'
import { LoadingThumbnails } from './loadingThumbnails'

import VectorCross from './vectorCross'
import React, { useState, useEffect } from 'react'
import * as Icons from '../../../shared/icons'
import Switch from 'react-switch'
import Button from '../../buttons'
import { styled } from '@mui/material/styles'
// import Tooltip from '@components/LXP/tooltip'
import PopOver, { PopOverItem } from '../popOver'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

export default function Thumbnails({
  variant,
  src,
  showSwitch,
  handleClickCourse,
  handleClickNew,
  handleSwitchAtivar,
  handleClickPopOverDelete,
  handleClickPopOverEdit,
  handleClickPopOverEditActivity,
  handleClickPopOverMoveToTrail,
  handleClickPopOverDeleteTrail,
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
  isActive,
  isTrail,
  txtPopOverDeleteTrail,
  txtPopOverEditContentActivity,
  txtHideContent,
  txtShowContent
}: IThumbnailsTranslate) {
  const defaultImg = 'https://i.gyazo.com/35d9c18bbdc6a48d843b0aa24ab2499e.png'
  const [ativo, setAtivo] = useState<boolean>(isDisabled)
  const [showModules, setShowModules] = useState<boolean>(false)
  const [ElementPopover, setElementPopover] = useState(null)
  const [Loading, setLoading] = useState(isLoading)

  const optionShowContent = txtShowContent ? txtShowContent : 'Desocultar módulo'
  const optionHideContent = txtHideContent ? txtHideContent : 'Ocultar módulo'
  const [textShowOrHiddenContent, settextShowOrHiddenContent] = useState(ativo ? optionHideContent : optionShowContent)

  useEffect(() => {
    setAtivo(isDisabled)
  }, [isDisabled])

  useEffect(() => {
    settextShowOrHiddenContent(ativo ? optionHideContent : optionShowContent)
  }, [ativo])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  //ATIVAR E DESATIVAR CONTEUDO
  const handleChangeCheck = (checkedValue: boolean) => {
    setAtivo(checkedValue)
    handleSwitchAtivar(checkedValue)
  }

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
      fontSize: 11
    }
  }))

  return (
    <>
      <ThemeProvider theme={FRSTTheme}>
        {variant === 'default' ? (
          <>
            {Loading ? (
              <LoadingThumbnails provided={provided} />
            ) : (
              <Styles.CardDragAndDrop
                active={ativo}
                className={(variant = 'default')}
                ref={provided ? provided.innerRef : null}
                {...(provided ? provided.draggableProps : null)}
              >
                <HeaderVectorElipses provided={provided} />
                <img
                  className="thumbnails_img"
                  ref={provided ? provided.innerRef : null}
                  {...(provided ? provided.dragHandleProps : null)}
                  onMouseEnter={handleHoverImage}
                  // className="imageHover"
                  src={src || defaultImg}
                />

                <Styles.ContainerMain>
                  <LightTooltip title={title}>
                    <Styles.Typography style={{ color: ativo ? '#000000' : '#bdbdbd', textAlign: 'start' }}>
                      {title && title?.length > 17 ? `${title.substring(0, 17)}...` : title}
                    </Styles.Typography>
                  </LightTooltip>
                  <Styles.IconVertical
                    onClick={(element: any) => {
                      setElementPopover(element.currentTarget)
                    }}
                  >
                    <Icons.MoreVertical fill={ativo ? '#000000' : '#bdbdbd'} />
                  </Styles.IconVertical>
                </Styles.ContainerMain>

                <Button
                  label={txtButtonLabel ? txtButtonLabel : 'Publicar'}
                  variant="expandedSecondary"
                  style={{ marginTop: '16px', height: '32px' }}
                />
              </Styles.CardDragAndDrop>
            )}
          </>
        ) : variant === 'add' ? (
          <>
            {Loading ? (
              <LoadingThumbnails provided={provided} />
            ) : (
              <Styles.CardDragAndDrop className="add">
                <Styles.ContainerEllipse onClick={handleClickNew}>
                  <VectorCross />
                </Styles.ContainerEllipse>
                <Styles.TypographyAdd>
                  {txtCriarNovoCurso ? txtCriarNovoCurso : 'Criar novo conteúdo'}
                </Styles.TypographyAdd>
              </Styles.CardDragAndDrop>
            )}
          </>
        ) : null}
        <PopOver
          element={ElementPopover}
          onClosePopover={() => {
            setElementPopover(null)
          }}
          variant={'upRight'}
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            <PopOverItem
              label={txtPopOverEditContent ? txtPopOverEditContent : 'Editar módulo'}
              onClick={() => {
                setElementPopover(null)
                handleClickPopOverEdit()
              }}
              style={{
                borderBottom: '1px black solid'
              }}
            />
            <PopOverItem
              label={txtPopOverEditContentActivity ? txtPopOverEditContentActivity : 'Editar conteúdo'}
              onClick={() => {
                setElementPopover(null)
                handleClickPopOverEditActivity()
              }}
              style={{
                borderBottom: '1px black solid'
              }}
            />

            <PopOverItem
              label={textShowOrHiddenContent}
              onClick={() => {
                setElementPopover(null)
                handleChangeCheck(!ativo)
              }}
              style={{
                borderBottom: '1px black solid'
              }}
            />

            {isTrail ? (
              <>
                <PopOverItem
                  label={txtPopOverDeleteTrail ? txtPopOverDeleteTrail : 'Excluir da trilha'}
                  onClick={() => {
                    setElementPopover(null)
                    /// timeout para corrigir o bug de scroll na tela
                    setTimeout(() => {
                      handleClickPopOverDelete()
                    }, 500)
                  }}
                  isFontBold={true}
                  noBorder={true}
                  color={'#C00F00'}
                  icon={<Icons.Trash fill="#C00F00" />}
                  style={{
                    borderBottom: '1px black solid',
                    width: 100
                  }}
                />
              </>
            ) : (
              <>
                <PopOverItem
                  label={txtPopOverMoveToTrails ? txtPopOverMoveToTrails : 'Mover para tilha'}
                  onClick={() => {
                    setElementPopover(null)
                    handleClickPopOverMoveToTrail()
                  }}
                  style={{
                    borderBottom: '1px black solid'
                  }}
                />
                <PopOverItem
                  label={txtPopOverDeleteContent ? txtPopOverDeleteContent : 'Excluir módulo'}
                  onClick={() => {
                    setElementPopover(null)
                    /// timeout para corrigir o bug de scroll na tela
                    setTimeout(() => {
                      handleClickPopOverDelete()
                    }, 500)
                  }}
                  icon={<Icons.Trash fill="#C00F00" />}
                  noBorder={true}
                  isFontBold={true}
                  color={'#C00F00'}
                />
              </>
            )}
          </div>
        </PopOver>
      </ThemeProvider>
    </>
  )
}
