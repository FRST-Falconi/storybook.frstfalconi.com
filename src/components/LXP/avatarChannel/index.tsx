import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './avatarChannelStyles'
import { IAvatar } from './avatarChannel'
import * as Icons from '../../../shared/icons'
import { useState } from 'react'
import PopOverLXP from '../popOverLXP-antigo'

export default function AvatarChannel({
  size,
  channel,
  className,
  disabled,
  color,
  handleValueAvatar,
  variantPopOver,
  sourceImage,
  isEdit = false
}: IAvatar) {
  const onChange = () => {
    document.getElementById('fileSelector').click()
  }

  const handleFileSelected = (file) => {
    const reader = new FileReader()
    reader.onload = function (e) {
      setImage(e.target.result)
    }
    reader.readAsDataURL(file)
    handleValueAvatar(file)
    return file
  }

  const nameChannel = channel
    .split(' ')
    .filter((name, i) => i == 0 || i == channel.split(' ').length - 1)
    .map((name, i) => name[0])
    .join('')

  const [image, setImage] = useState<string | ArrayBuffer>(sourceImage)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.ContainerGeral className="geral" isEdit={isEdit} variant={variantPopOver}>
        <>
          <Styles.ContainerPopOver className="popOver" variant={variantPopOver}>
            <PopOverLXP children={'Alterar avatar'} variant={variantPopOver} element={undefined} />
          </Styles.ContainerPopOver>
          <div style={{ display: 'none' }}>
            {isEdit && (
              <input
                type="file"
                id="fileSelector"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => handleFileSelected(e.target.files[0])}
              />
            )}
          </div>
          <Styles.AvatarChannel
            size={size}
            onClick={onChange}
            className={className}
            disabled={disabled}
            variant={variantPopOver}
            color={color ? color : '#6a3f86'}
            image={image}
            isEdit={isEdit}
          >
            {!image && <Styles.Channel size={size}>{nameChannel}</Styles.Channel>}

            {isEdit && (
              <Styles.AvatarCircle className="hide">
                <Styles.AvatarCam>
                  <Icons.Cam />
                </Styles.AvatarCam>
              </Styles.AvatarCircle>
            )}
          </Styles.AvatarChannel>
        </>
      </Styles.ContainerGeral>
    </ThemeProvider>
  )
}
