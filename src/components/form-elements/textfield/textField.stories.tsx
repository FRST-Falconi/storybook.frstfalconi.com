import React from 'react'

import TextField from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form Elements/TextField',
  component: TextField
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextField {...args} />

export const NormalWithHelpertext = Template.bind({})
NormalWithHelpertext.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  helperText: 'Helper text',
  required: false,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  },
  defaultValue: null,
  maxLength: 255
}

export const NormalWithoutHelpertext = Template.bind({})
NormalWithoutHelpertext.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  required: false,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  }
}

export const WithIconAndHelpertext = Template.bind({})
WithIconAndHelpertext.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  helperText: 'Helper text',
  required: false,
  endIcon: <Icons.EditIcon />,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  },
  handleClickEndIcon: () => alert('CickEndIcon')
}

export const WithoutIconAndHelpertext = Template.bind({})
WithoutIconAndHelpertext.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  required: false,
  endIcon: <Icons.EditIcon />,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  },
  handleClickEndIcon: () => alert('CickEndIcon')
}

export const PasswordWithIconAndHelperText = Template.bind({})
PasswordWithIconAndHelperText.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  required: false,
  endIcon: <Icons.EditIcon />,
  type: 'password',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  },
  handleClickEndIcon: () => alert('CickEndIcon')
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  required: false,
  startIcon: <Icons.EditIcon />,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  }
}

export const WithStartIconAndHelpertext = Template.bind({})
WithStartIconAndHelpertext.args = {
  label: 'Label',
  placeholder: 'Enter text here...',
  helperText: 'Helper text',
  required: false,
  startIcon: <Icons.EditIcon />,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  }
}

export const WithStartIconAndHelpertextBox = Template.bind({})
WithStartIconAndHelpertextBox.args = {
  label: '',
  placeholder: 'Enter text here...',
  helperTextBox: (
    <div>
      <p>
        Formule um objetivo que considere o aumento ou a diminuição do indicador. <strong>Exemplo: “Diminuir o custo com fornecedores”.</strong>
      </p>
      <p>
        <strong>
          Caso não consiga enxergar agora qual indicador será impactado com o seu desafio, escreva um objetivo e edite
          esse campo depois.
        </strong>
      </p>
    </div>
  ),
  required: false,
  startIcon: null,
  type: 'text',
  error: false,
  disabled: false,
  id: 'MyTextField',
  name: '',
  className: '',
  onChange: (e: any) => {
    console.log(e.target.value)
  },
  isHelperTextBox: true
}
