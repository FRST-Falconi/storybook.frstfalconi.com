import React from 'react'

import InputComment from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Input Comment',
    component: InputComment,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputComment {...args} />

export const mentionUserList = [
    {
        "user_uuid": "8735edca-e00c-11ec-8e40-0a3879a705c9",
        "user_email": "abadia.ribeiro@eletronorte.gov.br",
        "slug": "abadiaribeiroeletronortegovbr",
        "name": "Abadia Aparecida Ribeiro De Souza",
        "profile": {
            "uuid": "8735edca-e00c-11ec-8e40-0a3879a705c9",
            "first_name": "Abadia",
            "last_name": "Aparecida Ribeiro De Souza",
            "email": "abadia.ribeiro@eletronorte.gov.br",
            "phone": "",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "78da5040-e393-4ae7-b6f7-c8aafbe045a0",
            "area_name": "Outro",
            "role_uuid": "1aa1ef3b-c9d1-4bf6-af34-d531f312fb07",
            "role_name": "Outro(a)",
            "company_uuid": "a61db098-0956-458c-9306-db8d3ccfc889",
            "company_name": "Centrais Eletricas Brasileiras SA | Eletrobras"
        }
    },
    {
        "user_uuid": "6078b457-94b6-4fd8-ad17-27bcdfdbf73a",
        "user_email": "pedroaquadros+abb@gmail.com",
        "slug": "pedroaquadrosabbgmailcom",
        "name": "Abb",
        "profile": {
            "uuid": "6078b457-94b6-4fd8-ad17-27bcdfdbf73a",
            "first_name": "Abb",
            "last_name": "",
            "email": "pedroaquadros+abb@gmail.com",
            "phone": "(55) 55555-5555",
            "language": "en-us",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "7e65c274-e8e5-424d-b961-ddbe3bbb6324",
            "area_name": "Alta Direção",
            "role_uuid": "721d5c4b-b4d2-417a-8127-fcb4b3a3d5d0",
            "role_name": "Gerente",
            "company_uuid": "4c63d713-8e01-4f93-a3ff-67ffb1397f04",
            "company_name": "HITACHI ENERGY BRASIL LTDA."
        }
    },
    {
        "user_uuid": "d908a926-782f-4598-b9a7-84c062b1cc47",
        "user_email": "abel.filho@protege.com.br",
        "slug": "abelfilhoprotegecombr",
        "name": "Abel Correia Lima Filho",
        "profile": {
            "uuid": "d908a926-782f-4598-b9a7-84c062b1cc47",
            "first_name": "Abel",
            "last_name": "Correia Lima Filho",
            "email": "abel.filho@protege.com.br",
            "phone": "(99) 99999-9999",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "89c099cb-a082-42c2-94db-8dd10a3b0154",
            "area_name": "Operações",
            "role_uuid": "721d5c4b-b4d2-417a-8127-fcb4b3a3d5d0",
            "role_name": "Gerente",
            "company_uuid": "2928d29b-0d2a-4529-a4d6-be16402ac389",
            "company_name": "PROTEGE S/A PROTECAO E TRANSPORTE DE VALORES"
        }
    },
    {
        "user_uuid": "aa5b3040-606f-4a9d-86e2-da5fa35a9c31",
        "user_email": "abel.espinoza@mx.abb.com",
        "slug": "abelespinozamxabbcom",
        "name": "Abel Espinoza",
        "profile": {
            "uuid": "aa5b3040-606f-4a9d-86e2-da5fa35a9c31",
            "first_name": "Abel",
            "last_name": "Espinoza",
            "email": "abel.espinoza@mx.abb.com",
            "phone": "393386186021",
            "language": "en-us",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "535e8afc-1f15-46a9-af53-9673ac41c69f",
            "area_name": "Atendimento",
            "role_uuid": "721d5c4b-b4d2-417a-8127-fcb4b3a3d5d0",
            "role_name": "Gerente",
            "company_uuid": "4c63d713-8e01-4f93-a3ff-67ffb1397f04",
            "company_name": "HITACHI ENERGY BRASIL LTDA."
        }
    },
    {
        "user_uuid": "873695aa-e00c-11ec-8e40-0a3879a705c9",
        "user_email": "abel.santana@eletronorte.gov.br",
        "slug": "abelsantanaeletronortegovbr",
        "name": "Abel Joaquim De Santana",
        "profile": {
            "uuid": "873695aa-e00c-11ec-8e40-0a3879a705c9",
            "first_name": "Abel",
            "last_name": "Joaquim De Santana",
            "email": "abel.santana@eletronorte.gov.br",
            "phone": "",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "78da5040-e393-4ae7-b6f7-c8aafbe045a0",
            "area_name": "Outro",
            "role_uuid": "1aa1ef3b-c9d1-4bf6-af34-d531f312fb07",
            "role_name": "Outro(a)",
            "company_uuid": "a61db098-0956-458c-9306-db8d3ccfc889",
            "company_name": "Centrais Eletricas Brasileiras SA | Eletrobras"
        }
    },
    {
        "user_uuid": "8737658c-e00c-11ec-8e40-0a3879a705c9",
        "user_email": "abel.costa@eletronorte.gov.br",
        "slug": "abelcostaeletronortegovbr",
        "name": "Abel Monteiro Costa",
        "profile": {
            "uuid": "8737658c-e00c-11ec-8e40-0a3879a705c9",
            "first_name": "Abel",
            "last_name": "Monteiro Costa",
            "email": "abel.costa@eletronorte.gov.br",
            "phone": "(91) 98327-7015",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "619a0e96-2281-43b6-a150-f25305ad8b72",
            "area_name": "Administrativo",
            "role_uuid": "c265667f-1aa8-4c3d-b315-933b74478c36",
            "role_name": "Analista",
            "company_uuid": "a61db098-0956-458c-9306-db8d3ccfc889",
            "company_name": "Centrais Eletricas Brasileiras SA | Eletrobras"
        }
    },
    {
        "user_uuid": "ad26383c-3072-4647-8b8e-c4f8d8714ffe",
        "user_email": "denisfl157@gmail.com",
        "slug": "denisfl157gmailcom",
        "name": "Abenildo Prestes Leite",
        "profile": {
            "uuid": "ad26383c-3072-4647-8b8e-c4f8d8714ffe",
            "first_name": "Abenildo",
            "last_name": "Prestes Leite",
            "email": "denisfl157@gmail.com",
            "phone": "69999412019",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "0ddbba56-0182-4365-abb2-44a0d3873869",
            "area_name": "Vendas/Comercial",
            "role_uuid": "721d5c4b-b4d2-417a-8127-fcb4b3a3d5d0",
            "role_name": "Gerente",
            "company_uuid": "0bef3c38-6984-44e7-853a-9ae1b2e4cbb0",
            "company_name": "GAZIN INDUSTRIA E COMERCIO DE MOVEIS E ELETRODOMESTICOS LTDA"
        }
    },
    {
        "user_uuid": "d812a326-4b17-4495-8d7f-8f6e35d2cb5b",
        "user_email": "abneredwinperico@gmail.com",
        "slug": "abneredwinpericogmailcom",
        "name": "Abner Edwin Perico",
        "profile": {
            "uuid": "d812a326-4b17-4495-8d7f-8f6e35d2cb5b",
            "first_name": "Abner",
            "last_name": "Edwin Perico",
            "email": "abneredwinperico@gmail.com",
            "phone": "(99) 99999-9999",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "78da5040-e393-4ae7-b6f7-c8aafbe045a0",
            "area_name": "Outro",
            "role_uuid": "1aa1ef3b-c9d1-4bf6-af34-d531f312fb07",
            "role_name": "Outro(a)",
            "company_uuid": "a31895fe-a1bb-46d4-8916-c9673ba8f156",
            "company_name": "Acelera Job"
        }
    },
    {
        "user_uuid": "87342845-e00c-11ec-8e40-0a3879a705c9",
        "user_email": "abner.fernandes@eletronorte.gov.br",
        "slug": "abnerfernandeseletronortegovbr",
        "name": "Abner Fernandes De Souza",
        "profile": {
            "uuid": "87342845-e00c-11ec-8e40-0a3879a705c9",
            "first_name": "Abner",
            "last_name": "Fernandes De Souza",
            "email": "abner.fernandes@eletronorte.gov.br",
            "phone": "",
            "language": "pt-br",
            "avatar": "",
            "profession": "",
            "linkedin": "",
            "theme_color": "",
            "theme_type": "",
            "bio": "",
            "area_uuid": "78da5040-e393-4ae7-b6f7-c8aafbe045a0",
            "area_name": "Outro",
            "role_uuid": "1aa1ef3b-c9d1-4bf6-af34-d531f312fb07",
            "role_name": "Outro(a)",
            "company_uuid": "a61db098-0956-458c-9306-db8d3ccfc889",
            "company_name": "Centrais Eletricas Brasileiras SA | Eletrobras"
        }
    }
]

export const normal = Template.bind({})
normal.args = {
    placeholder: 'Enter text here...',
    disabled: false,
    remain: 20,
    limit: 1000,
    onChange: (e: any) => { console.log(e) },
    className: null,
    hasEmoji: true,
    showCharacterCounter: true,
    styles: { margin: '0 0 0 0' },
    emojiWindowlanguage: 'pt',
    users: mentionUserList
}
