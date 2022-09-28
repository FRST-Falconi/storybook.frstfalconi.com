import React from 'react'

import ExtraContent from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/ExtraContent',
    component: ExtraContent,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ExtraContent {...args} />

export const Student = Template.bind({})
Student.args = {
    typeExhibition: 2,
    bookList: [{
        id: 'abcd',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        title: 'Gerenciamento de projetos',
        autor: 'Guilherme Caloba'
    },
    {
        id: 'abcde',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        title: 'O poder do hábito',
        autor: 'Charles Duhigg'
    },
    {
        id: 'abcdef',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        title: 'pense de novo: O poder de saber o que você não sabe',
        autor: 'Adam Grant'
    },
    {
        id: 'abca',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        title: 'O desafio do impossível',
        autor: 'Neuza Chaves'
    },
    {
        id: 'abcc',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        title: 'Entendendo o pensamento A3',
        autor: 'Durward K. Sobek II'
    },
    ],
    transcription: `Bacon ipsum dolor amet swine strip steak drumstick pork belly bresaola capicola, picanha pork kielbasa flank pig. Ball tip tri-tip ribeye ground round. Capicola pork pork chop, burgdoggen boudin t-bone landjaeger alcatra pig spare ribs shank prosciutto pancetta. Doner leberkas flank prosciutto biltong kevin tri-tip swine buffalo burgdoggen pork chop short ribs pork loin pork. Cow kevin tri-tip fatback biltong salami boudin frankfurter pork loin strip steak turducken doner alcatra ham. Spare ribs buffalo kevin sausage, tongue frankfurter tail capicola chuck biltong chislic bacon filet mignon hamburger pastrami.

    Ball tip picanha drumstick hamburger cow strip steak spare ribs bresaola pig brisket porchetta landjaeger burgdoggen turducken beef ribs. Andouille chislic pork belly jowl shankle. Jerky landjaeger strip steak pork chop, meatloaf swine buffalo pork loin. Sausage turkey kevin, flank drumstick ham beef ribs turducken. Spare ribs short ribs bresaola tongue ham hock chislic, beef ribs brisket doner. Ham biltong turkey leberkas, sirloin shank filet mignon.
    
    Frankfurter porchetta ball tip tenderloin pork loin, turkey buffalo strip steak rump beef ribs ham hock. Andouille kielbasa pork chop picanha prosciutto chicken. Shank jerky pork loin swine venison fatback kevin. Beef fatback brisket ball tip, turkey pancetta short loin frankfurter shoulder pork loin prosciutto swine jerky. Kevin pork chop porchetta, shoulder leberkas salami pancetta doner drumstick sausage flank buffalo cow.
    
    Beef tail ham hock prosciutto andouille capicola jerky t-bone frankfurter. Alcatra bresaola salami pork chop, burgdoggen ribeye short ribs ball tip beef picanha kielbasa venison. T-bone capicola biltong tail fatback. Meatloaf ball tip sirloin leberkas, burgdoggen pig boudin tenderloin short loin shoulder buffalo short ribs spare ribs.
    
    Ground round biltong venison boudin beef ribs, swine buffalo brisket jerky drumstick rump corned beef kevin turducken spare ribs. Shankle fatback jerky buffalo, ham hock ribeye short ribs meatball filet mignon kielbasa venison shank rump landjaeger. Alcatra hamburger ham landjaeger. Brisket pork chop leberkas chicken.`,
    commentList:[{
        userName : 'Roberto Lima',
        userAvatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg',
        userPosition: 'Estudante/Universitário de TI',
        comments: 'Olá, pessoal! Tudo bem? Estou iniciando a trilha Digital Business Mindest essa semana. Este conteúdo é muito bom. recomendo',
        isLiked : false,
        date : '25/09/2022',
    },
    {
        userName : 'Roberto Lima',
        userAvatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg',
        userPosition: 'Estudante/Universitário de TI',
        comments: 'Estou iniciando a trilha Digital Business Mindest e queria saber mais sobre as atitudes que o líder deve contruir pra criar uma relação de confiança',
        isLiked : false,
        date : '25/09/2022',
    },
    ],
    suportMaterial:[{
        id : 'abc',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        description: 'Gerenciamento de projetos com PDCA'
    },
    {
        id : 'cba',
        img: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1570815813/itpro/2018/01/shutterstock_712558591.jpg',
        description: 'Gerenciamento de projetos com PDCA 2'
    },
    ],

    onClickBook: (id) => alert(id) ,
    onClickSuportMaterial: (id) => alert(id),

}

export const Admin = Template.bind({})
Admin.args = {
    typeExhibition: 1,

    onSaveTranscription: (text) => console.log(text)
}