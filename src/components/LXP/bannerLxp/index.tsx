import Button from '@components/buttons'
import TextField from '@components/form-elements/textfield'
import { Modal, Box, Switch, Dialog, Popover } from '@mui/material'
import { UploadIcon } from '@shared/icons'
import React, { useRef, useState } from 'react'
import style from './bannerLxp.module.css'
import { ChromePicker } from 'react-color'
import PopOverLXP from '../popOverLXP-antigo'

interface BannerLxpParams {
  title: string
  titleColor?: string
  bgSrc?: string
  bgColor?: string
  isDisabledTitle?: boolean
  style?: React.CSSProperties
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
}

export default function BannerLxp(props: BannerLxpParams) {
  const [openConfig, setOpenConfig] = useState(false)
  const [disableText, setDisableText] = useState(props.isDisabledTitle)
  const [titleText, setTitleText] = useState(props.title ? props.title : '')
  const [colorTitle, setColorTitle] = useState(props.titleColor ? props.titleColor : '#FFF')
  const [backgroundColor, setBackgroundColor] = useState(props.bgColor ? props.bgColor : '')
  const [backgroundImage, setBackgroundImage] = useState(props.bgSrc || '')
  const [fixImage, setFixImage] = useState(false)
  const [selectedFile, setSelectedFile] = useState({})
  const [displayTitleColorPicker, setDisplayTitleColorPicker] = useState(false)
  const [displayBackgroundColorPicker, setDisplayBackgroundColorPicker] = useState(false)
  const [anchor, setAnchor] = useState(null)

  const handleOpenConfig = () => setOpenConfig(true)
  const handleCloseConfig = () => {
    setOpenConfig(false)
    props.onSaveInfo([titleText, disableText, colorTitle, backgroundColor, fixImage])
  }
  const idBg = displayBackgroundColorPicker ? 'simple-popover' : undefined
  const idTitle = displayTitleColorPicker ? 'simple-popover' : undefined

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
  const handleChangeBackgroundColor = (color, event) => {
    setBackgroundColor(color.hex)
    setBackgroundImage('')
  }

  const handleFileSelected = (file) => {
    const reader = new FileReader()
    reader.onload = function (e) {
      setSelectedFile(e.target.result)
    }
    reader.readAsDataURL(file)
    props.handleChangeBanner(file)
    setBackgroundImage(props.bgSrc)
    return file
  }

  return (
    <div
      className={style.bannerContainer}
      style={{
        ...props.style,
        objectFit: fixImage ? 'fill' : 'none',
        backgroundImage: props.bgSrc && `url(${props.bgSrc})`,
        backgroundColor: backgroundImage === '' ? backgroundColor : ''
      }}
    >
      {!disableText ? <span style={{ color: colorTitle, fontSize: 40, fontWeight: 700 }}>{titleText}</span> : ''}
      <div className={style.configButton}>
        <Button variant="primary" label="Configuração de capa" handleClick={handleOpenConfig} />
      </div>

      <Modal open={openConfig} onClose={handleCloseConfig}>
        <Box className={style.configContainer} style={{ ...props.style }}>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#000000', marginBottom: 24 }}>Título</span>

          <TextField
            label="Alterar título do KnowHub"
            placeholder="Digite seu título aqui"
            style={{ width: '100%' }}
            onChange={(e) => setTitleText(e.target.value)}
          />
          <div className={style.enableText}>
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
          </div>

          <div className={style.inputTextColor}>
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
                <ChromePicker color={colorTitle} disableAlpha={true} onChangeComplete={handleChangeTitleColor} />
              </PopOverLXP>
            </Popover>
          </div>

          <span style={{ marginTop: 24, fontWeight: 700, fontSize: 16, color: '#000000' }}>Background</span>

          <div className={style.inputBgColor}>
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
                <ChromePicker
                  color={backgroundColor}
                  disableAlpha={true}
                  onChangeComplete={handleChangeBackgroundColor}
                />
              </PopOverLXP>
            </Popover>
          </div>

          <div className={style.bgInput}>
            <span>Imagem de fundo</span>
            <label htmlFor="backgroundSelector">
              {' '}
              <UploadIcon /> &nbsp; Selecionar{' '}
            </label>
            <input
              type="file"
              id="backgroundSelector"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleFileSelected(e.target.files[0])}
            />
          </div>

          <div className={style.fixImage}>
            <span> Ajustar a imagem </span>
            <Switch
              checked={fixImage}
              onChange={() => setFixImage(!fixImage)}
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
          </div>
        </Box>
      </Modal>
    </div>
  )
}
