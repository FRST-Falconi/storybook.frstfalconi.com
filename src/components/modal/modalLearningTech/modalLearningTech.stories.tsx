import React from 'react'

import ModalLearningTech from './index'
import ComentaryBox from '../../commentary-box/index'
import Avatar from '../../avatar/index'
import { textAlign } from '@mui/system'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modal/ModalLearningTech',
    component: ModalLearningTech,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ModalLearningTech {...args} />

export const ModalTornarComentarioPrivado = Template.bind({})
ModalTornarComentarioPrivado.args = {
    open: true,
    title: 'Tem certeza de que quer tornar privado o comentário?',
    cancelButton: 'Cancelar',
    confirmationButton: 'Tornar privado',
    children: 'Dessa forma, só o criador do comentário e o autor do problema (você) poderão visualizar e interagir com o comentário.',
    style: {textAlign:'center', padding: 20},
    typeButtonConfirmation: 'third'
    
}

export const ModalExcluirComentario = Template.bind({})
ModalExcluirComentario.args = {
    open: true,
    title: 'Tem certeza de que quer excluir comentário?',
    cancelButton: 'Cancelar',
    confirmationButton: 'Excluir',
    typeButtonConfirmation: 'third',
    children: 
    <>
        <div style={{borderTop: '1px solid #BDBDBD', borderBottom: '1px solid #BDBDBD', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flexStart', padding: 20}}> 
            <Avatar size='40px' src={'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'}/>
            <ComentaryBox 
                name='Rayana Gama' 
                date='8 horas atrás' 
                position='Estudante/Universitário(a) de Designer'
                value="Olá, Roberto! Tudo bem?
                Estou iniciando a trilha Digital Business Mindest e achei que o desenvolvimento do seu projeto foi muito bem estruturado. Parabéns!"
                className='Comentario Rayana'
                styles={{}}
                textLiked='Curtir'
                textAnswer='Responder'
                hasAnswer={true}
                
            />
        </div>
        <span style={{fontSize: 16, fontWeight: 600, paddingTop: 20}}> Todas as interações com o comentário também serão removidas</span>
    </>
      
}