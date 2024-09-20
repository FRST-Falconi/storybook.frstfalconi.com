import React from 'react'
import TableActions from './index'
import AdmButton from './../../DS/admButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Form Elements/TableActions',
    component: TableActions
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TableActions {...args} />

export const Normal = Template.bind({})
Normal.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: '', width: '0%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [
        {
            id: '1',
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1',
                    isResponsible: true,
                    name: 'Nome'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '12/04/24',
                'not_completed'
            ],
            showButtonExpanded: false,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '25/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [
                { src: null, id: 'id-avatar-4' },
                'Implementar gamificação na plataforma',
                '30/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [
                { src: null, id: 'id-avatar-5' },
                'Fazer teste de usabilidade com 5 usuários',
                '30/07/24',
                'deprioritized'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 05</div>
        },
        {
            id: 6,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 06</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    labelTextVisitProfile: 'Label Ver Perfil Com Nome Grande',
    showButtonInbox: false,
    expandItemId: '',
    hiddeExpandItemId: ''
}

export const NormalOldVersion = Template.bind({})
NormalOldVersion.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: ['Colaborador', 'Ação', 'Data Limite', 'Status', ''],
    data: [
        {
            id: '1',
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '12/04/24',
                'not_completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '25/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [
                { src: null, id: 'id-avatar-4' },
                'Implementar gamificação na plataforma',
                '30/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [
                { src: null, id: 'id-avatar-5' },
                'Fazer teste de usabilidade com 5 usuários',
                '30/07/24',
                'deprioritized'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 05</div>
        },
        {
            id: 6,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 06</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    showButtonInbox: false,
    expandItemId: '',
    hiddeExpandItemId: ''
}

export const NormalResume = Template.bind({})
NormalResume.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '25%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '50%', alignHeader: 'center', alignContent: 'left' },
        { title: '', width: '0%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '25%', alignHeader: 'center', alignContent: 'left' },
        { title: '', width: '0%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [
        {
            id: '1',
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '',
                'completed'
            ],
            showButtonExpanded: false,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '',
                'not_completed'
            ],
            showButtonExpanded: false,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '',
                'in_progress'
            ],
            showButtonExpanded: false,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [{ src: null, id: 'id-avatar-4' }, 'Implementar gamificação na plataforma', '', 'in_progress'],
            showButtonExpanded: false,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [{ src: null, id: 'id-avatar-5' }, 'Fazer teste de usabilidade com 5 usuários', '', 'deprioritized'],
            showButtonExpanded: false,
            children: <div style={{ height: '150px' }}>Children 05</div>
        },
        {
            id: 6,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
                'Fazer teste de usabilidade com 5 usuários',
                '',
                'completed'
            ],
            showButtonExpanded: false,
            children: <div style={{ height: '300px' }}>Children 06</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    showButtonInbox: false,
    expandItemId: '',
    hiddeExpandItemId: ''
}

export const NormalEmptyState = Template.bind({})
NormalEmptyState.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: '', width: '0%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    emptyState: {
        labels: ['Nenhuma ação foi adicionada até o momento.', 'Que tal adicionar uma agora?'],
        labelButtonCreate: 'Adicionar ação',
        handleClickButtonCreate: (e: any) => alert('Empty State criar ação')
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    showButtonInbox: false
}

export const Message = Template.bind({})
Message.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Mensagem', width: '10%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [
        {
            id: 1,
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            actionButtonInbox: (id) => alert(`inbox: ${id}`),
            enableButtonInbox: false,
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '12/04/24',
                'not_completed'
            ],
            actionButtonInbox: (id) => alert(`inbox: ${id}`),
            enableButtonInbox: true,
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '25/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [
                { src: null, id: 'id-avatar-4' },
                'Implementar gamificação na plataforma',
                '30/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [
                { src: null, id: 'id-avatar-5' },
                'Fazer teste de usabilidade com 5 usuários',
                '30/07/24',
                'deprioritized'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 05</div>
        },
        {
            id: 6,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 06</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    buttonBottomCreateAction: {
        mode: 'hidden', // 'button' | 'children'
        labelButtonAddAction: 'Adicionar ação'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    labelTextMessage: 'Mensagem',
    showButtonInbox: true
}

export const MessageEmpty = Template.bind({})
MessageEmpty.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Mensagem', width: '10%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    buttonBottomCreateAction: {
        mode: 'hidden', // 'button' | 'children'
        labelButtonAddAction: 'Adicionar ação'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    labelTextMessage: 'Mensagem',
    showButtonInbox: true,
    emptyState: {
        labels: ['Nenhuma ação foi adicionada até o momento.', 'Que tal adicionar uma agora?'],
        labelButtonCreate: 'Adicionar ação',
        handleClickButtonCreate: (e: any) => alert('Empty State criar ação')
    },
    customImageEmptyState: null
}

export const MessageEmptyWithoutButton = Template.bind({})
MessageEmptyWithoutButton.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Mensagem', width: '10%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    buttonBottomCreateAction: {
        mode: 'hidden', // 'button' | 'children'
        labelButtonAddAction: 'Adicionar ação'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    labelTextMessage: 'Mensagem',
    showButtonInbox: true,
    emptyState: {
        labels: ['Nenhuma ação foi adicionada até o momento.']
    },
    customImageEmptyState: null
}

export const FotterAddAction = Template.bind({})
FotterAddAction.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Mensagem', width: '10%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [
        {
            id: 1,
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            actionButtonInbox: (id) => alert(`inbox: ${id}`),
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '12/04/24',
                'not_completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '25/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [
                { src: null, id: 'id-avatar-4' },
                'Implementar gamificação na plataforma',
                '30/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [
                { src: null, id: 'id-avatar-5' },
                'Fazer teste de usabilidade com 5 usuários',
                '30/07/24',
                'deprioritized'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 05</div>
        },
        {
            id: 6,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 06</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    buttonBottomCreateAction: {
        mode: 'button', // 'button' | 'children',
        handleClickButtonCreate: (e) => alert('Click Button Create'),
        children: <div style={{ height: '300px' }}>Children Create Action</div>,
        labelButtonAddAction: 'Adicionar ação'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    labelTextMessage: 'Mensagem',
    expandItemId: '',
    hiddeExpandItemId: '',
    showButtonInbox: false
}

export const HiddeFotterAddActionExpandId = Template.bind({})
HiddeFotterAddActionExpandId.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Mensagem', width: '10%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [
        {
            id: 1,
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            actionButtonInbox: (id) => alert(`inbox: ${id}`),
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '12/04/24',
                'not_completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '25/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [
                { src: null, id: 'id-avatar-4' },
                'Implementar gamificação na plataforma',
                '30/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [
                { src: null, id: 'id-avatar-5' },
                'Fazer teste de usabilidade com 5 usuários',
                '30/07/24',
                'deprioritized'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 05</div>
        },
        {
            id: '6',
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 06</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    buttonBottomCreateAction: {
        mode: 'hidden', // 'button' | 'children',
        handleClickButtonCreate: (e) => alert('Click Button Create'),
        children: <div style={{ height: '300px' }}>Children Create Action</div>,
        labelButtonAddAction: 'Adicionar ação'
    },
    labelTextVisitProfile: 'Label Ver Perfil',
    labelTextMessage: 'Mensagem',
    expandItemId: '6',
    hiddeExpandItemId: ''
}

export const EmptyStateChildren = Template.bind({})
EmptyStateChildren.args = {
    isLoading: false,
    lengthElSkeleton: 5,
    columns: [
        { title: 'Colaborador', width: '15%', alignHeader: 'center', alignContent: 'center' },
        { title: 'Ação', width: '45%', alignHeader: 'left', alignContent: 'left' },
        { title: 'Data Limite', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Status', width: '15%', alignHeader: 'center', alignContent: 'left' },
        { title: 'Mensagem', width: '10%', alignHeader: 'center', alignContent: 'center' }
    ],
    data: [
        {
            id: 1,
            value: [
                {
                    src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                    id: 'id-avatar-1'
                },
                'Fazer teste de usabilidade com 5 usuários',
                '08/07/24',
                'not_started'
            ],
            actionButtonInbox: (id) => alert(`inbox: ${id}`),
            showButtonExpanded: true,
            children: <div style={{ height: '300px' }}>Children 01</div>
        },
        {
            id: 2,
            value: [
                { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
                'Implementar gamificação na plataforma',
                '12/04/24',
                'completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 02</div>
        },
        {
            id: 3,
            value: [
                'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
                'Mapear processos de UX',
                '25/07/24',
                'not_completed'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 03</div>
        },
        {
            id: 4,
            value: [
                { src: null, id: 'id-avatar-4' },
                'Implementar gamificação na plataforma',
                '30/07/24',
                'in_progress'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 04</div>
        },
        {
            id: 5,
            value: [
                { src: null, id: 'id-avatar-5' },
                'Fazer teste de usabilidade com 5 usuários',
                '30/07/24',
                'deprioritized'
            ],
            showButtonExpanded: true,
            children: <div style={{ height: '150px' }}>Children 05</div>
        }
    ],
    onPressAvatar: (e: string) => alert(e),
    labelStatus: {
        not_started: 'Não iniciada',
        completed: 'Concluído',
        not_completed: 'Não concluído',
        in_progress: 'Em andamento',
        deprioritized: 'Despriorizado'
    },
    buttonBottomCreateAction: {
        mode: 'children', // 'button' | 'children',
        handleClickButtonCreate: (e) => alert('Click Button Create'),
        children: <div style={{ height: '300px' }}>Children Create Action</div>,
        labelButtonAddAction: 'Adicionar ação',
        labelEmpty: ['Nenhuma ação foi adicionada até o momento.', 'Que tal adicionar uma agora?']
    },
    labelTextVisitProfile: 'Label Ver Perfil'
}
