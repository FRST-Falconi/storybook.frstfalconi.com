import * as Styles from './quantidadeDesafios'

interface ObjItemDesafio {
  title: string
  count: number
  percentage: string
}

interface ObjQuantidadeDesafio {
  definicao: ObjItemDesafio
  hipoteses: ObjItemDesafio
  testes: ObjItemDesafio
  resultados: ObjItemDesafio
  proximosPassos: ObjItemDesafio
  finalizados: ObjItemDesafio
}

export default function QuantidadeDesafios({
  definicao,
  hipoteses,
  testes,
  resultados,
  proximosPassos,
  finalizados
}: ObjQuantidadeDesafio) {
  return (
    <Styles.ContainerDesafios>
      <Styles.ContainerItemDesafio>
        <Styles.ItemDesafio>
          <Styles.QuantidadeDesafio>
            <h1>{definicao.count}</h1>
            <p>{definicao.percentage}</p>
          </Styles.QuantidadeDesafio>
        </Styles.ItemDesafio>
        <Styles.ItemDesafio>
          <Styles.QuantidadeDesafio>
            <h1>{hipoteses.count}</h1>
            <p>{hipoteses.percentage}</p>
          </Styles.QuantidadeDesafio>
        </Styles.ItemDesafio>
        <Styles.ItemDesafio>
          <Styles.QuantidadeDesafio>
            <h1>{testes.count}</h1>
            <p>{testes.percentage}</p>
          </Styles.QuantidadeDesafio>
        </Styles.ItemDesafio>
        <Styles.ItemDesafio>
          <Styles.QuantidadeDesafio>
            <h1>{resultados.count}</h1>
            <p>{resultados.percentage}</p>
          </Styles.QuantidadeDesafio>
        </Styles.ItemDesafio>
        <Styles.ItemDesafio>
          <Styles.QuantidadeDesafio>
            <h1>{proximosPassos.count}</h1>
            <p>{proximosPassos.percentage}</p>
          </Styles.QuantidadeDesafio>
        </Styles.ItemDesafio>
        <Styles.ItemDesafio>
          <Styles.QuantidadeDesafio>
            <h1>{finalizados.count}</h1>
            <p>{finalizados.percentage}</p>
          </Styles.QuantidadeDesafio>
        </Styles.ItemDesafio>
      </Styles.ContainerItemDesafio>
      <Styles.containerTitleDesafio>
        <Styles.TitleDesafiosWhite>{definicao.title}</Styles.TitleDesafiosWhite>
        <Styles.TitleDesafiosGrey>{hipoteses.title}</Styles.TitleDesafiosGrey>
        <Styles.TitleDesafiosWhite>{testes.title}</Styles.TitleDesafiosWhite>
        <Styles.TitleDesafiosGrey>{resultados.title}</Styles.TitleDesafiosGrey>
        <Styles.TitleDesafiosWhite>{proximosPassos.title}</Styles.TitleDesafiosWhite>
        <Styles.TitleDesafiosGrey>{finalizados.title}</Styles.TitleDesafiosGrey>
      </Styles.containerTitleDesafio>
    </Styles.ContainerDesafios>
  )
}
