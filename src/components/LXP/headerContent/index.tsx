import Button from '@components/buttons'
import ProgressBar from '@components/LXP/progressBar'
import style from './headerContent.module.css'
import CountCircle from './countCircle'
import SelectedCountCircle from './selectedCountCircle'
import { useEffect, useState } from 'react'

type typeHeader = 'inProgress' | 'recomendation'
interface HeaderContentParams {
  title?: string
  description?: string
  /**
   * @prop {string} bgImg: imagem de background do header
   */
  bgImg?: string
  /**
   * @prop {typeHeader} typeOfHeader: Tipo de header para exibição ( inProgress: Para alunos que estão fazendo algum conteúdo. recomendation: Para alunos que não estão fazendo algum conteúdo ou para aqueles que atingiram de 85% a 100% do conteúdo assistido)
   */
  typeOfHeader: typeHeader
  progresso?: number
  channel?: string
  listaRecomendacao?: any[]

  onClick: () => void
}

export default function HeaderContent(props: HeaderContentParams) {
  const [selectedContent, setSelectedContent] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setSelectedContent(selectedContent < 4 ? selectedContent + 1 : 0), 10000)
    return () => clearTimeout(timer)
  }, [selectedContent])

  function RecomendationHeader(item) {
    return (
      <div>
        <div className={style.title}>{item.title}</div>
        <div className={style.description}>{item.description}</div>
        <div style={{ marginTop: 48 }} onClick={props.onClick}>
          <Button label="Começar curso" variant="primary" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${
          props.typeOfHeader === 'inProgress' ? props.bgImg : props.listaRecomendacao[selectedContent].bg
        })`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: '120rem 40rem'
      }}
    >
      {props.typeOfHeader === 'inProgress' ? (
        <div className={style.content}>
          <div className={style.title}>{props.title}</div>
          <div className={style.description}>{props.description}</div>
          <div style={{ marginTop: 68, display: 'flex' }}>
            <div>
              <ProgressBar value={props.progresso} label={props.channel} />
            </div>
            <div style={{ marginLeft: 24 }} onClick={props.onClick}>
              <Button label="Continuar curso" variant="primary" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={style.content}>{RecomendationHeader(props.listaRecomendacao[selectedContent])}</div>
          <div className={style.contadorConteudo}>
            <div
              style={{ marginRight: 8 }}
              onClick={() => {
                setSelectedContent(0)
              }}
            >
              {selectedContent === 0 ? <SelectedCountCircle /> : <CountCircle />}
            </div>
            <div
              style={{ marginRight: 8 }}
              onClick={() => {
                setSelectedContent(1)
              }}
            >
              {selectedContent === 1 ? <SelectedCountCircle /> : <CountCircle />}
            </div>
            <div
              style={{ marginRight: 8 }}
              onClick={() => {
                setSelectedContent(2)
              }}
            >
              {selectedContent === 2 ? <SelectedCountCircle /> : <CountCircle />}
            </div>
            <div
              style={{ marginRight: 8 }}
              onClick={() => {
                setSelectedContent(3)
              }}
            >
              {selectedContent === 3 ? <SelectedCountCircle /> : <CountCircle />}
            </div>
            <div
              style={{ marginRight: 8 }}
              onClick={() => {
                setSelectedContent(4)
              }}
            >
              {selectedContent === 4 ? <SelectedCountCircle /> : <CountCircle />}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
