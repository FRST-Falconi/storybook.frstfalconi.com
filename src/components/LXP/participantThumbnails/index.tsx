import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import * as styleThumbnails from './participantThumbnails'
import { Button } from 'frst-components'
import { PlayLineIcon } from 'frst-components'

export default function ParticipantThumbnails({ imgThumbnails }) {
  return (
    <>
      <styleThumbnails.ContainerThumbnails>
        <styleThumbnails.ThumbnailHeaderImage img={imgThumbnails} />
        <h1>Intro a Blockchain</h1>
      </styleThumbnails.ContainerThumbnails>
      <styleThumbnails.Container>
        <styleThumbnails.HeaderImage img={imgThumbnails} />
        <h1>Life Long Learning</h1>
        <p>Entenda como funciona o Agile Learning Experience FRST e comece sua jornada de aprendizado. </p>
      </styleThumbnails.Container>
    </>
  )
}
