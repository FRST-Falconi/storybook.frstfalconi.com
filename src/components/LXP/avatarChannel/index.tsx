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
  sourceImage
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

  const [image, setImage] = useState(null)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.ContainerGeral className="geral" variant={variantPopOver}>
        {sourceImage ? (
          <>
            <Styles.ContainerPopOver className="popOver" variant={variantPopOver}>
              <PopOverLXP children={'Alterar avatar'} variant={variantPopOver} element={undefined} />
            </Styles.ContainerPopOver>
            <Styles.ContainerSelectedImage onClick={onChange}>
              <div style={{ display: 'none' }}>
                <input
                  type="file"
                  id="fileSelector"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => handleFileSelected(e.target.files[0])}
                />
              </div>
              <img src={sourceImage} style={{ borderRadius: '150px', width: '80px', height: '80px' }} />
            </Styles.ContainerSelectedImage>
          </>
        ) : (
          <>
            {variantPopOver === 'lowLeft' || variantPopOver === 'lowRight' || variantPopOver === 'sideRight' ? (
              <>
                <Styles.ContainerPopOver className="popOver" variant={variantPopOver}>
                  <PopOverLXP children={'Alterar avatar'} variant={variantPopOver} element={undefined} />
                </Styles.ContainerPopOver>
                <div style={{ display: 'none' }}>
                  <input
                    type="file"
                    id="fileSelector"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => handleFileSelected(e.target.files[0])}
                  />
                </div>
                {image ? (
                  <Styles.AvatarChannelImage
                    size={size}
                    onClick={onChange}
                    className={className}
                    disabled={disabled}
                    variant={variantPopOver}
                    image={image}
                  >
                    <img src={sourceImage} style={{ borderRadius: '150px', width: '80px', height: '80px' }} />
                    <Styles.AvatarCircle className="hide">
                      <Styles.AvatarCam>
                        <Icons.Cam />
                      </Styles.AvatarCam>
                    </Styles.AvatarCircle>
                  </Styles.AvatarChannelImage>
                ) : (
                  <Styles.AvatarChannel
                    size={size}
                    onClick={onChange}
                    className={className}
                    disabled={disabled}
                    variant={variantPopOver}
                    color={color ? color : '#6a3f86'}
                  >
                    <Styles.Channel>{channel}</Styles.Channel>

                    <Styles.AvatarCircle className="hide">
                      <Styles.AvatarCam>
                        <Icons.Cam />
                      </Styles.AvatarCam>
                    </Styles.AvatarCircle>
                  </Styles.AvatarChannel>
                )}
              </>
            ) : null}
          </>
        )}
      </Styles.ContainerGeral>
    </ThemeProvider>
  )
}
