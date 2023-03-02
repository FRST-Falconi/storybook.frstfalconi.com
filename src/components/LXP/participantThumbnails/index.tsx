import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import * as styleThumbnails from './participantThumbnails'
import { Button } from 'frst-components'
import { PlayLineIcon } from 'frst-components'

export default function ParticipantThumbnails({ imgThumbnails }) {
  return (
    <>
      <styleThumbnails.Container>
        <styleThumbnails.HeaderImage img={imgThumbnails} />
        <styleThumbnails.ContainerDescriptionVideo>
          <styleThumbnails.ButtonsVideo>
            <Button variant="link" label={`${(<PlayLineIcon fill="#ffff" width="36" height="36" />)}`}></Button>
            <Button label="Link" variant="link" />
            <Button label="Link" variant="link" />
          </styleThumbnails.ButtonsVideo>
        </styleThumbnails.ContainerDescriptionVideo>
      </styleThumbnails.Container>
    </>
  )
}
