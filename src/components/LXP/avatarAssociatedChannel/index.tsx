import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './avatarAssociatedChannelStyles'
import { IAvatar } from './avatarAssociatedChannel'

export default function AvatarAssociatedChannel({
  descriptionChannel,
  nameChannel,
  channel,
  color,
  sourceImage,
  image
}: IAvatar) {
  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.ContainerGeral>
        <>
          {image ? (
            <Styles.AvatarChannelImage image={image}>
              <img src={sourceImage} />
            </Styles.AvatarChannelImage>
          ) : (
            <Styles.AvatarChannel color={color ? color : '#6a3f86'}>
              <Styles.Channel>{channel}</Styles.Channel>
            </Styles.AvatarChannel>
          )}
          <Styles.CardInformation className="cardInformation">
            {image ? (
              <Styles.AvatarChannelImage image={image}>
                <img src={sourceImage} />
              </Styles.AvatarChannelImage>
            ) : (
              <Styles.AvatarChannel color={color ? color : '#6a3f86'}>
                <Styles.Channel>{channel}</Styles.Channel>
              </Styles.AvatarChannel>
            )}
            <div>
              <h2>{nameChannel}</h2>
              <h3>{descriptionChannel}</h3>
            </div>
          </Styles.CardInformation>
        </>
      </Styles.ContainerGeral>
    </ThemeProvider>
  )
}
