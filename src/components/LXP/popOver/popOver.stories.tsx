import React from 'react'
import PopOver from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LXP/PopOver',
  component: PopOver
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PopOver {...args} />

export const upLeft = Template.bind({})
upLeft.args = {
  variant: 'upLeft',
  disabled: false,
  children: (
    <>
      <h2 style={{ fontSize: 24 }}>Missão 1: Marte - Definição do Problema</h2>

      <h2>Indicador:</h2>
      <h3>Tempo de uso da plataforma</h3>

      <h2>Situação atual do indicador:</h2>
      <h3>No último quarter (Q1 - 2022) os alunos usaram a plataforma em média 8 horas.</h3>

      <h2>Qual é a sua meta e o prazo final para alcançá-la?</h2>
      <h3>No próximo quarter (Q2 - 2022) os alunos usarão a plataforma em média 12 horas.</h3>

      <h2>CERTEZAS: O que eu já sei sobre esse problema?</h2>
      <h3>
        A presença, comprometimento e engajamento dos alunos na plataforma é algo fundamental para que os mesmos tenham
        um bom aproveitamento da trilha e assim, incrementando suas skills.
      </h3>

      <h2>DÚVIDAS: O que eu preciso descobrir sobre esse problema?</h2>
      <h3>
        O tempo ideal de engajamento é de 12 horas. É necessário investigar quais fatores influenciaram negativamente
        essa questão e como podemos reverter e alcançar um melhor resultado.
      </h3>
    </>
  )
}

export const upRight = Template.bind({})
upRight.args = {
  variant: 'upRight',
  children: (
    <>
      <h2 style={{ fontSize: 24 }}>Missão 1: Marte - Definição do Problema</h2>

      <h2>Indicador:</h2>
      <h3>Tempo de uso da plataforma</h3>

      <h2>Situação atual do indicador:</h2>
      <h3>No último quarter (Q1 - 2022) os alunos usaram a plataforma em média 8 horas.</h3>

      <h2>Qual é a sua meta e o prazo final para alcançá-la?</h2>
      <h3>No próximo quarter (Q2 - 2022) os alunos usarão a plataforma em média 12 horas.</h3>

      <h2>CERTEZAS: O que eu já sei sobre esse problema?</h2>
      <h3>
        A presença, comprometimento e engajamento dos alunos na plataforma é algo fundamental para que os mesmos tenham
        um bom aproveitamento da trilha e assim, incrementando suas skills.
      </h3>

      <h2>DÚVIDAS: O que eu preciso descobrir sobre esse problema?</h2>
      <h3>
        O tempo ideal de engajamento é de 12 horas. É necessário investigar quais fatores influenciaram negativamente
        essa questão e como podemos reverter e alcançar um melhor resultado.
      </h3>
    </>
  )
}

export const lowRight = Template.bind({})
lowRight.args = {
  variant: 'lowRight',
  children: (
    <>
      {' '}
      <span>Teste de children </span>{' '}
    </>
  )
}

export const lowLeft = Template.bind({})
lowLeft.args = {
  variant: 'lowLeft',
  children: (
    <>
      {' '}
      <span>Teste de children </span>{' '}
    </>
  )
}

export const sideLeft = Template.bind({})
sideLeft.args = {
  variant: 'sideLeft',
  children: (
    <>
      <h2 style={{ fontSize: 24 }}>Missão 1: Marte - Definição do Problema</h2>

      <h2>Indicador:</h2>
      <h3>Tempo de uso da plataforma</h3>

      <h2>Situação atual do indicador:</h2>
      <h3>No último quarter (Q1 - 2022) os alunos usaram a plataforma em média 8 horas.</h3>

      <h2>Qual é a sua meta e o prazo final para alcançá-la?</h2>
      <h3>No próximo quarter (Q2 - 2022) os alunos usarão a plataforma em média 12 horas.</h3>

      <h2>CERTEZAS: O que eu já sei sobre esse problema?</h2>
      <h3>
        A presença, comprometimento e engajamento dos alunos na plataforma é algo fundamental para que os mesmos tenham
        um bom aproveitamento da trilha e assim, incrementando suas skills.
      </h3>

      <h2>DÚVIDAS: O que eu preciso descobrir sobre esse problema?</h2>
      <h3>
        O tempo ideal de engajamento é de 12 horas. É necessário investigar quais fatores influenciaram negativamente
        essa questão e como podemos reverter e alcançar um melhor resultado.
      </h3>
    </>
  )
}

export const sideRight = Template.bind({})
sideRight.args = {
  variant: 'sideRight',
  children: (
    <>
      {' '}
      <span>Teste de children </span>{' '}
    </>
  )
}

export const list = Template.bind({})
list.args = {
  variant: 'list',
  disabled: false,
  children: ( 
    <>
      <div style={{ marginTop: 8, cursor: 'pointer' , fontStyle: 'Bold' , color: '#0645AD' , fontFamily: 'PT Sans' ,  fontWeight: 700 ,  fontSize: 16, display: 'flex', alignItems: 'center' , gap: 8 }} onClick={() => {alert('adicionar lista')}}>
        <Icons.Noun height="24px" width="24px" fill= '#0645AD'/>
        List Entry
      </div>

    </>
  )
}
