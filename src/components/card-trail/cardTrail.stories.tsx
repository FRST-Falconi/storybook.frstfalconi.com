import React from 'react'

import CardTrail from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Card Trail',
    component: CardTrail,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardTrail {...args} />

export const primaryNotStarted = Template.bind({})
primaryNotStarted.args = {
    variant: 'primary',
    name: 'Inovação Customer Centric',
    start: '10/10/2022',
    description: 'Aprenda como preparar os seus times, processos e mindset para que toda a empresa funcione agindo de acordo com a necessidade do cliente.',
    mentor: {
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000',
        name: 'Gabriela Duarte',
        linkedin: 'urlLinkedin'
    },
    action: () => alert('opa'),
    notStarted: true,
    bannerImage: 'https://www.sydle.com/api/1/blog/com.sydle.site/blogFacade/images/e-business-612541b6b060f57604938af9/e-business.jpg',
    labels: {
        mentor: 'Mentor(a)',
        dateStart: 'Data de Início'
    }
}

export const primaryNotStartedWithoutMentor = Template.bind({})
primaryNotStartedWithoutMentor.args = {
    variant: 'primary',
    name: 'Inovação Customer Centric',
    start: '10/10/2022',
    description: 'Aprenda como preparar os seus times, processos e mindset para que toda a empresa funcione agindo de acordo com a necessidade do cliente.',
    action: () => alert('opa'),
    notStarted: true,
    bannerImage: 'https://www.sydle.com/api/1/blog/com.sydle.site/blogFacade/images/e-business-612541b6b060f57604938af9/e-business.jpg',
    labels: {
        mentor: 'Mentor(a)',
        dateStart: 'Data de Início'
    }
}

export const primaryNotStartedWithoutMentorDate = Template.bind({})
primaryNotStartedWithoutMentorDate.args = {
    variant: 'primary',
    name: 'Inovação Customer Centric',
    description: 'Aprenda como preparar os seus times, processos e mindset para que toda a empresa funcione agindo de acordo com a necessidade do cliente.',
    action: () => alert('opa'),
    notStarted: true,
    bannerImage: 'https://www.sydle.com/api/1/blog/com.sydle.site/blogFacade/images/e-business-612541b6b060f57604938af9/e-business.jpg',
    labels: {
        mentor: 'Mentor(a)',
        dateStart: 'Data de Início'
    }
}

export const primaryStarted = Template.bind({})
primaryStarted.args = {
    variant: 'primary',
    name: 'Inspiring leadership',
    start: '10/10/2022',
    description: 'More than just hitting goals, the inspiring leader.',
    progress: 80,
    mentor: {
        avatar: 'https://st.depositphotos.com/1743476/2267/i/600/depositphotos_22675279-stock-photo-businesswoman.jpg',
        name: 'Gabriela Duarte',
        linkedin: 'urlLinkedin'
    },
    action: () => alert('redirect'),
    notStarted: false,
    bannerImage: 'https://www.sydle.com/api/1/blog/com.sydle.site/blogFacade/images/e-business-612541b6b060f57604938af9/e-business.jpg',
    labels: {
        mentor: 'Mentor',
        dateStart: 'Start date'
    }
}


export const secondary = Template.bind({})
secondary.args = {
    variant: 'secondary',
    name: 'Open Talks | O futuro na perspectiva das Plataformas',
    start: '10/10/2022',
    description: 'Clique aqui para asssistir a mais um episódio do Open Talks com especialistas renomados sobre O futuro na perspectiva das Plataformas.',
    progress: 80,
    mentor: {
        name: 'Gabriela Duarte',
        linkedin: 'url'
    },
    action: () => alert('opa'),
    bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/7/CAPA_7_-_Open_Talks_-_O_futuro_na_perspectvia_das_plataformas.png?AWSAccessKeyId=ASIAYR3BIRGASFQHZ4R3&Signature=GQk5PUXBIPsM%2Fepjv9uMZi9N23g%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqz84mztgCLzY6IfrckAYVf3l%2FgLZSqM49QjlkFNeCqAiB2IbSdsnFi9JKsk0g%2Fg8eHPgBNALlrj5JEPn4y5%2FWEhCqLAwhfEAEaDDU4ODA3NzYzMTg3MyIMFS3FcLYdFnHvEr6ZKugCPtUlTfjVs%2B8sbXIyyv1lD0Db7EQuTGYDawHWouNxtwBf7PYIBzcY3upravUZftxsvHb9lGDzCQ3KAjU4R1x4KCERcHHw3UYq5hgFz4nzPQQbGxCcq8IcfalyXFaXnCSwzdFbealGANch%2B8fjmA6HycrYgaoNeIA86KWe%2B9SSgrHReZjIBUtQwUdSI8leapS1mmq5W1jASu%2BTjxKSTAfiOybZ%2FyKms%2B3vK8RJZGihGzPdTKCPhagzHeTd3PvfeUl4xzsVrJLnypq9hc1IqbvMak46AZ5VwO5Tx1XIpFI70GXNZPripwywwn5dy%2FvIYtrL1BPRSY8L9DvxDSbgMPYi0%2BrZHBztdcMbxuK6WSN4wX0en441p30F82PO0gIooCSvrc1GhrzW8FMz5JOLB1Ygk5eTkYcN7imtPvFP4tnG%2Fjo0h0PZ8MRg2khnQuAnfALa8kaDM1mvGRVlxBjb5zpNGeGlLckCwcahMIrTkJoGOp4BcKnXmAfb1x70b5GvEmVUONGx5wTRLlcszjj%2BUaJGGoLuSIMvTetUw9i%2BON8R0hLDlkzX8mn2Esmc%2Fr4PtLt8i%2BrKEA%2BhvNHAy%2FFX4dA87FIblfX79fwztjI1tgAWSfLz9VZFgF7i7fZjbksoVewtHN2NoM3gTMUIVZE6bNiY9Fmsk92DQzAxLvYoO8MkooDfKqRAaXB2B12y7wIt91I%3D&Expires=1665416213'
}
