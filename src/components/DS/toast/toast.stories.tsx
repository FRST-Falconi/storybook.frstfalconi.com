import React, { useState } from 'react';
import { Toast } from './index';
import MiniButton from '../../mini-button'

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
        {isToastOpen && (<Toast  {...args} onClose={() => setIsToastOpen(false)}/>)}

        <MiniButton label={'Mostrar toast'} variant="primary" onClick={()=> setIsToastOpen(true)}/>
    </div>
  )
}

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  type: 'success',
  message: 'Operação concluída com sucesso!',
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  type: 'error',
  message: 'Erro ao excluir. Tente novamente!',
};

export const AlertToast = Template.bind({});
AlertToast.args = {
  type: 'alert',
  message: 'Notificação de alerta.',
};