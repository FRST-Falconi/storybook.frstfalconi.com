import * as Styles from './quantidadeDesafios'
import { Stats } from './stats'
import { StatsWithResult } from './statsWithResult'
interface ObjItemDesafio {
  title: string
  count: number
  percentage: string
  title_en?: string
  title_es?: string
}

interface ObjQuantidadeDesafio {
  definicao: ObjItemDesafio
  hipoteses: ObjItemDesafio
  testes: ObjItemDesafio
  resultados: ObjItemDesafio
  proximosPassos: ObjItemDesafio
  finalizados?: ObjItemDesafio
  languagem?: string
}

export default function QuantidadeDesafios({
  definicao,
  hipoteses,
  testes,
  resultados,
  proximosPassos,
  finalizados,
  languagem
}: ObjQuantidadeDesafio) {
  return (
    <Styles.ContainerDesafios>
      <Styles.ContainerItemDesafio>
        {!finalizados ? 
          <Stats
            definicao={definicao}
            hipoteses={hipoteses}
            testes={testes}
            resultados={resultados}
            proximosPassos={proximosPassos}
          />
        :
          <StatsWithResult
            definicao={definicao}
            hipoteses={hipoteses}
            testes={testes}
            resultados={resultados}
            proximosPassos={proximosPassos}
            finalizados={finalizados}
          /> 
        }
      </Styles.ContainerItemDesafio>
      <Styles.containerTitleDesafio hasFish={!!finalizados}>
        <Styles.TitleDesafiosWhite>
          {languagem
            ? languagem === 'en-US'
              ? definicao.title_en
                ? definicao.title_en
                : definicao.title
              : languagem === 'es'
              ? definicao.title_es
                ? definicao.title_es
                : definicao.title
              : definicao.title
            : definicao.title}
        </Styles.TitleDesafiosWhite>
        <Styles.TitleDesafiosGrey>
          {languagem
            ? languagem === 'en-US'
              ? hipoteses.title_en
                ? hipoteses.title_en
                : hipoteses.title
              : languagem === 'es'
              ? hipoteses.title_es
                ? hipoteses.title_es
                : hipoteses.title
              : hipoteses.title
            : hipoteses.title}
        </Styles.TitleDesafiosGrey>
        <Styles.TitleDesafiosWhite>
          {languagem
            ? languagem === 'en-US'
              ? testes.title_en
                ? testes.title_en
                : testes.title
              : languagem === 'es'
              ? testes.title_es
                ? testes.title_es
                : testes.title
              : testes.title
            : testes.title}
        </Styles.TitleDesafiosWhite>
        <Styles.TitleDesafiosGrey>
          {languagem
            ? languagem === 'en-US'
              ? resultados.title_en
                ? resultados.title_en
                : resultados.title
              : languagem === 'es'
              ? resultados.title_es
                ? resultados.title_es
                : resultados.title
              : resultados.title
            : resultados.title}
        </Styles.TitleDesafiosGrey>
        <Styles.TitleDesafiosWhite>
          {languagem
            ? languagem === 'en-US'
              ? proximosPassos.title_en
                ? proximosPassos.title_en
                : proximosPassos.title
              : languagem === 'es'
              ? proximosPassos.title_es
                ? proximosPassos.title_es
                : proximosPassos.title
              : proximosPassos.title
            : proximosPassos.title}
        </Styles.TitleDesafiosWhite>
        {finalizados && <Styles.TitleDesafiosGrey>
          {languagem
            ? languagem === 'en-US'
              ? finalizados.title_en
                ? finalizados.title_en
                : finalizados.title
              : languagem === 'es'
              ? finalizados.title_es
                ? finalizados.title_es
                : finalizados.title
              : finalizados.title
            : finalizados.title}
        </Styles.TitleDesafiosGrey>}
      </Styles.containerTitleDesafio>
    </Styles.ContainerDesafios>
  )
}
