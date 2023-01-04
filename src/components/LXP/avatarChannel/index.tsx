import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './avatarChannelStyles'
import { IAvatar } from './avatarChannel'
import * as Icons from '../../../shared/icons'
import { useState } from 'react'
import { PopOver } from 'frst-components'


export default function AvatarChannel({
  size,
  channel,
  className,
  disabled,
  color,
  // onChange,
  variantPopOver
}: IAvatar) {

  const onChange = () => {
    document.getElementById('fileSelector').click()
    console.log("click")
  }

  const handleFileSelected = (file) => {
    console.log(file)
    const reader = new FileReader();
    reader.onload = function (e) {
      setImage(e.target.result)
    };
    reader.readAsDataURL(file);
    return file;
  }

  const [image, setImage] = useState(null)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.ContainerGeral className="geral" variant={variantPopOver}>
        {variantPopOver === 'lowLeft' || variantPopOver === 'lowRight' || variantPopOver === 'sideRight' ? (
          <>
            <Styles.ContainerPopOver className="popOver" variant={variantPopOver}>
              <PopOver children={'Alterar avatar'} variant={variantPopOver} />
            </Styles.ContainerPopOver>
            <div style={{ display: "none" }}>
              <input type="file" id='fileSelector' accept='.jpg, .jpeg, .png'
                onChange={(e) => handleFileSelected(e.target.files[0])}
              />
            </div>
            {image ?
              <Styles.AvatarChannelImage
                size={size}
                onClick={onChange}
                className={className}
                disabled={disabled}
                variant={variantPopOver}
                image={image}

              >
                {/* <img src={image} style={{ borderRadius: "150px", width: "80px", height: "80px" }} /> */}
                <Styles.AvatarCircle className="hide">
                  <Styles.AvatarCam>
                    <Icons.Cam />
                  </Styles.AvatarCam>
                </Styles.AvatarCircle>
              </Styles.AvatarChannelImage>
              :
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
            }
          </>
        ) : (
          <>
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
            <Styles.ContainerPopOver className="popOver" variant={variantPopOver}>
              <PopOver children={'Alterar avatar'} variant={variantPopOver} />
            </Styles.ContainerPopOver>
          </>
        )}
      </Styles.ContainerGeral>
    </ThemeProvider>
  )
}
function selectedFile(arg0: any[]) {
  throw new Error('Function not implemented.')
}

