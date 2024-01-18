import React from 'react';
import { Toast } from './index'; // Certifique-se de ajustar o caminho conforme sua estrutura de diretórios

export default {
  title: 'Components/Toast',
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

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