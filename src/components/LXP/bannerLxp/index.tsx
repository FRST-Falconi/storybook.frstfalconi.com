import Button from '@components/buttons'
import TextField from '@components/form-elements/textfield'
import { Modal, Box, Switch, Dialog, Popover } from '@mui/material'
import { UploadIcon } from '@shared/icons'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SketchPicker } from 'react-color'
import PopOverLXP from '../popOverLXP-antigo'
import * as Styles from './bannerLxp'

interface BannerLxpParams {
  title: string
  titleColor?: string
  bgSrc?: string
  bgColor?: string
  isDisabledTitle?: boolean
  style?: React.CSSProperties
  showBannerConfigs?: boolean
  isLoading?: boolean
  buttonSavingLabel?: string
  /**
   * @prop {object} selectedFile: função de callback que retorna o arquivo selecionado pelo componente
   */
  //   selectedFile?: ([]) => void
  /**
   *
   * /**
   * @prop {object} handleChangeBanner: função de callback que pega o arquivo selecionado
   */
  handleChangeBanner?: (file) => void
  /**
   * @prop {object} onSaveInfo: função de callback que retorna todos as informações do banner no final das alterações. (nesta ordem[Title, isTitledisabled, colorTitle, backgroundColor, fixImage])
   */
  onSaveInfo?: ([]) => void
  /**
   * @prop {object} onCancell: função de callback que adciona métodos auxiliares no botão cancelar
   */
  onCancell?: () => void
}

export default function BannerLxp(props: BannerLxpParams) {
  const [openConfig, setOpenConfig] = useState(false)
  const [disableText, setDisableText] = useState(false)
  const [titleText, setTitleText] = useState('')
  const [colorTitle, setColorTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  const [oldBgColor, setOldBgColor] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')
  const [fixImage, setFixImage] = useState(false)
  const [selectedFile, setSelectedFile] = useState({})
  const [displayTitleColorPicker, setDisplayTitleColorPicker] = useState(false)
  const [displayBackgroundColorPicker, setDisplayBackgroundColorPicker] = useState(false)
  const [anchor, setAnchor] = useState(null)

  const handleOpenConfig = () => setOpenConfig(true)

  const idBg = displayBackgroundColorPicker ? 'simple-popover' : undefined
  const idTitle = displayTitleColorPicker ? 'simple-popover' : undefined

  const onSave = () => {
    setOpenConfig(false)
    props.onSaveInfo([titleText, disableText, colorTitle, backgroundColor, fixImage])
  }

  const onCancell = () => {
    props.bgColor && setBackgroundColor(props.bgColor ?? '')
    props.bgSrc && setBackgroundImage(props.bgSrc ?? '')
    props.title && setTitleText(props.title ?? '')
    setColorTitle(props.titleColor ?? '')
    setDisableText(props.isDisabledTitle)

    setOpenConfig(false)
    props?.onCancell()
  }

  const handleOpenTitleColorPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisplayTitleColorPicker(!displayTitleColorPicker)
    setAnchor(event.currentTarget)
  }
  const handleCloseTitleColorPicker = () => setDisplayTitleColorPicker(false)

  const handleOpenBackgroundColorPicker = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisplayBackgroundColorPicker(!displayBackgroundColorPicker)
    setAnchor(event.currentTarget)
  }
  const handleCloseBackgroundColorPicker = () => setDisplayBackgroundColorPicker(false)
  const handleChangeTitleColor = (color, event) => {
    setColorTitle(color.hex)
  }
  const handleChangeBackgroundColor = (color) => {
    setBackgroundColor(color.hex)
    setBackgroundImage('')
  }

  const handleFileSelected = (file) => {
    const reader = new FileReader()
    reader.onload = function (e) {
      setSelectedFile(e.target.result)
    }
    reader.readAsDataURL(file)
    setBackgroundColor('')

    props.handleChangeBanner(file)

    return file
  }

  useEffect(() => {
    props?.isDisabledTitle && setDisableText(props?.isDisabledTitle)
    props?.bgColor && setBackgroundColor(props?.bgColor)
    props?.bgColor && setOldBgColor(props?.bgColor)
    props?.bgSrc && setBackgroundImage(props?.bgSrc)
    props.isDisabledTitle && setDisableText(props.isDisabledTitle)
  }, [props])

  useEffect(() => {
    if (props?.bgSrc) setBackgroundImage(props?.bgSrc)
  }, [props?.bgSrc])

  useMemo(() => {
    if (props?.title) {
      setTitleText(props?.title)
    }
  }, [props?.title])

  return (
    <>
      {props?.isLoading ? (
        <Styles.LoadingBanner />
      ) : (
        <Styles.BannerContainer
          backgroundBanner={props?.bgColor || `url(${props?.bgSrc})`}
          style={{
            ...props.style,
            objectFit: 'fill'
          }}
        >
          {!props?.isDisabledTitle && (
            <span
              style={{
                color: props?.titleColor,
                fontSize: 40,
                fontWeight: 700
              }}
            >
              {props?.title}
            </span>
          )}

          {props?.showBannerConfigs && (
            <Styles.ConfigButton className="configButton">
              <Button variant="primary" label="Configuração de capa" handleClick={handleOpenConfig} />
            </Styles.ConfigButton>
          )}
        </Styles.BannerContainer>
      )}
      <Modal open={openConfig} onClose={onCancell}>
        <Styles.ConfigContainer style={{ ...props.style }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: '#000000',
              marginBottom: 24
            }}
          >
            Título
          </span>

          <TextField
            label="Alterar título do KnowHub"
            placeholder="Digite seu título aqui"
            style={{ width: '100%' }}
            value={titleText ?? props?.title}
            onChange={(e) => setTitleText(e.target.value)}
          />
          <Styles.EnableText>
            <span>Mostrar texto</span>
            <Switch
              checked={!disableText}
              onChange={() => setDisableText(!disableText)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#FFF'
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#FF4D0D !important',
                  opacity: 1
                }
              }}
            />
          </Styles.EnableText>

          <Styles.InputTextColor>
            <span>Cor do título</span>
            <button
              aria-describedby={idTitle}
              style={{
                cursor: 'pointer',
                width: 23,
                height: 23,
                borderRadius: 8,
                border: '1px solid #BDBDBD',
                backgroundColor: colorTitle
              }}
              onClick={handleOpenTitleColorPicker}
            />

            <Popover
              id={idTitle}
              open={displayTitleColorPicker}
              onClose={handleCloseTitleColorPicker}
              anchorEl={anchor}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <PopOverLXP variant="upRight">
                <SketchPicker color={props?.titleColor} onChangeComplete={handleChangeTitleColor} />
              </PopOverLXP>
            </Popover>
          </Styles.InputTextColor>

          <span
            style={{
              marginTop: 24,
              fontWeight: 700,
              fontSize: 16,
              color: '#000000'
            }}
          >
            Background
          </span>

          <Styles.InputBgColor className="inputBgColor">
            <span>Cor de fundo</span>
            <button
              aria-describedby={idBg}
              style={{
                cursor: 'pointer',
                width: 23,
                height: 23,
                borderRadius: 8,
                border: '1px solid #BDBDBD',
                backgroundColor: backgroundColor
              }}
              onClick={handleOpenBackgroundColorPicker}
            />
            <Popover
              id={idBg}
              open={displayBackgroundColorPicker}
              onClose={handleCloseBackgroundColorPicker}
              anchorEl={anchor}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <PopOverLXP variant="upRight">
                <SketchPicker color={props?.bgColor} onChangeComplete={handleChangeBackgroundColor} />
              </PopOverLXP>
            </Popover>
          </Styles.InputBgColor>

          <Styles.BgInput>
            <span>Imagem de fundo</span>
            <label htmlFor="backgroundSelector">
              {' '}
              {/* <UploadIcon /> &nbsp; Selecionar{" "} */}
              &nbsp; Selecionar
            </label>
            <input
              type="file"
              id="backgroundSelector"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleFileSelected(e.target.files[0])}
            />
          </Styles.BgInput>

          <Styles.ActionButtons isLoading={props?.isLoading}>
            <button onClick={onCancell}>Cancelar</button>
            <span>ou</span>
            <button onClick={onSave} disabled={props?.isLoading}>
              {props?.isLoading ? props?.buttonSavingLabel || 'Carregando...' : 'Salvar'}
            </button>
          </Styles.ActionButtons>
        </Styles.ConfigContainer>
      </Modal>
    </>
  )
}
