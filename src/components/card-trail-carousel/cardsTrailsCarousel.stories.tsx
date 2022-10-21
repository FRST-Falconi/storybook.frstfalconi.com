import React from 'react'
import CardTrailCarousel from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Card Trail Carousel',
    component: CardTrailCarousel,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardTrailCarousel {...args} />

export const primary = Template.bind({})
primary.args = {
    marginsArrowButton: 50,
    sizeArrowButton: 80,
    horizontalMarginInternScroll: '50px',
    
    objectCards: [
        {
            variant: 'primary',
            name: 'Primeiros passos',
            start: '10/10/2022',
            description: 'Entenda como funciona o Agile Learning Experience FRST e comece sua jornada de aprendizado.',
            mentor: {
                name: 'Gabriela Duarte',
                linkedin: 'urlLinkedin'
            },
            progress: 30,
            action: () => alert('redirect to'),
            notStarted: false,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/25/Inovacao_Customer_Centric.jpg?AWSAccessKeyId=ASIAYR3BIRGASFQHZ4R3&Signature=wvaGy%2Bv5tRqx%2BdS4eu0uzBKmFZw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqz84mztgCLzY6IfrckAYVf3l%2FgLZSqM49QjlkFNeCqAiB2IbSdsnFi9JKsk0g%2Fg8eHPgBNALlrj5JEPn4y5%2FWEhCqLAwhfEAEaDDU4ODA3NzYzMTg3MyIMFS3FcLYdFnHvEr6ZKugCPtUlTfjVs%2B8sbXIyyv1lD0Db7EQuTGYDawHWouNxtwBf7PYIBzcY3upravUZftxsvHb9lGDzCQ3KAjU4R1x4KCERcHHw3UYq5hgFz4nzPQQbGxCcq8IcfalyXFaXnCSwzdFbealGANch%2B8fjmA6HycrYgaoNeIA86KWe%2B9SSgrHReZjIBUtQwUdSI8leapS1mmq5W1jASu%2BTjxKSTAfiOybZ%2FyKms%2B3vK8RJZGihGzPdTKCPhagzHeTd3PvfeUl4xzsVrJLnypq9hc1IqbvMak46AZ5VwO5Tx1XIpFI70GXNZPripwywwn5dy%2FvIYtrL1BPRSY8L9DvxDSbgMPYi0%2BrZHBztdcMbxuK6WSN4wX0en441p30F82PO0gIooCSvrc1GhrzW8FMz5JOLB1Ygk5eTkYcN7imtPvFP4tnG%2Fjo0h0PZ8MRg2khnQuAnfALa8kaDM1mvGRVlxBjb5zpNGeGlLckCwcahMIrTkJoGOp4BcKnXmAfb1x70b5GvEmVUONGx5wTRLlcszjj%2BUaJGGoLuSIMvTetUw9i%2BON8R0hLDlkzX8mn2Esmc%2Fr4PtLt8i%2BrKEA%2BhvNHAy%2FFX4dA87FIblfX79fwztjI1tgAWSfLz9VZFgF7i7fZjbksoVewtHN2NoM3gTMUIVZE6bNiY9Fmsk92DQzAxLvYoO8MkooDfKqRAaXB2B12y7wIt91I%3D&Expires=1665416214',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
        {
            variant: 'primary',
            name: 'Liderança que Inspira',
            start: '01/01/2021',
            description: 'Mais do que apenas bater metas, o líder inspirador...',
            mentor: {
                name: 'Maria Arrazi',
                linkedin: 'urlLinkedin'
            },
            action: () => alert('redirect to'),
            notStarted: true,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/25/Inovacao_Customer_Centric.jpg?AWSAccessKeyId=ASIAYR3BIRGASFQHZ4R3&Signature=wvaGy%2Bv5tRqx%2BdS4eu0uzBKmFZw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqz84mztgCLzY6IfrckAYVf3l%2FgLZSqM49QjlkFNeCqAiB2IbSdsnFi9JKsk0g%2Fg8eHPgBNALlrj5JEPn4y5%2FWEhCqLAwhfEAEaDDU4ODA3NzYzMTg3MyIMFS3FcLYdFnHvEr6ZKugCPtUlTfjVs%2B8sbXIyyv1lD0Db7EQuTGYDawHWouNxtwBf7PYIBzcY3upravUZftxsvHb9lGDzCQ3KAjU4R1x4KCERcHHw3UYq5hgFz4nzPQQbGxCcq8IcfalyXFaXnCSwzdFbealGANch%2B8fjmA6HycrYgaoNeIA86KWe%2B9SSgrHReZjIBUtQwUdSI8leapS1mmq5W1jASu%2BTjxKSTAfiOybZ%2FyKms%2B3vK8RJZGihGzPdTKCPhagzHeTd3PvfeUl4xzsVrJLnypq9hc1IqbvMak46AZ5VwO5Tx1XIpFI70GXNZPripwywwn5dy%2FvIYtrL1BPRSY8L9DvxDSbgMPYi0%2BrZHBztdcMbxuK6WSN4wX0en441p30F82PO0gIooCSvrc1GhrzW8FMz5JOLB1Ygk5eTkYcN7imtPvFP4tnG%2Fjo0h0PZ8MRg2khnQuAnfALa8kaDM1mvGRVlxBjb5zpNGeGlLckCwcahMIrTkJoGOp4BcKnXmAfb1x70b5GvEmVUONGx5wTRLlcszjj%2BUaJGGoLuSIMvTetUw9i%2BON8R0hLDlkzX8mn2Esmc%2Fr4PtLt8i%2BrKEA%2BhvNHAy%2FFX4dA87FIblfX79fwztjI1tgAWSfLz9VZFgF7i7fZjbksoVewtHN2NoM3gTMUIVZE6bNiY9Fmsk92DQzAxLvYoO8MkooDfKqRAaXB2B12y7wIt91I%3D&Expires=1665416214',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
    ]
}


export const primaryMultiple = Template.bind({})
primaryMultiple.args = {
    marginsArrowButton: 50,
    sizeArrowButton: 80,
    horizontalMarginInternScroll: '50px',
    objectCards: [
        {
            variant: 'primary',
            name: 'Primeiros passos',
            start: '10/10/2022',
            description: 'Entenda como funciona o Agile Learning Experience FRST e comece sua jornada de aprendizado.',
            mentor: {
                name: 'Gabriela Duarte',
                linkedin: 'urlLinkedin'
            },
            progress: 30,
            action: () => alert('redirect to'),
            notStarted: false,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/25/Inovacao_Customer_Centric.jpg?AWSAccessKeyId=ASIAYR3BIRGASFQHZ4R3&Signature=wvaGy%2Bv5tRqx%2BdS4eu0uzBKmFZw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqz84mztgCLzY6IfrckAYVf3l%2FgLZSqM49QjlkFNeCqAiB2IbSdsnFi9JKsk0g%2Fg8eHPgBNALlrj5JEPn4y5%2FWEhCqLAwhfEAEaDDU4ODA3NzYzMTg3MyIMFS3FcLYdFnHvEr6ZKugCPtUlTfjVs%2B8sbXIyyv1lD0Db7EQuTGYDawHWouNxtwBf7PYIBzcY3upravUZftxsvHb9lGDzCQ3KAjU4R1x4KCERcHHw3UYq5hgFz4nzPQQbGxCcq8IcfalyXFaXnCSwzdFbealGANch%2B8fjmA6HycrYgaoNeIA86KWe%2B9SSgrHReZjIBUtQwUdSI8leapS1mmq5W1jASu%2BTjxKSTAfiOybZ%2FyKms%2B3vK8RJZGihGzPdTKCPhagzHeTd3PvfeUl4xzsVrJLnypq9hc1IqbvMak46AZ5VwO5Tx1XIpFI70GXNZPripwywwn5dy%2FvIYtrL1BPRSY8L9DvxDSbgMPYi0%2BrZHBztdcMbxuK6WSN4wX0en441p30F82PO0gIooCSvrc1GhrzW8FMz5JOLB1Ygk5eTkYcN7imtPvFP4tnG%2Fjo0h0PZ8MRg2khnQuAnfALa8kaDM1mvGRVlxBjb5zpNGeGlLckCwcahMIrTkJoGOp4BcKnXmAfb1x70b5GvEmVUONGx5wTRLlcszjj%2BUaJGGoLuSIMvTetUw9i%2BON8R0hLDlkzX8mn2Esmc%2Fr4PtLt8i%2BrKEA%2BhvNHAy%2FFX4dA87FIblfX79fwztjI1tgAWSfLz9VZFgF7i7fZjbksoVewtHN2NoM3gTMUIVZE6bNiY9Fmsk92DQzAxLvYoO8MkooDfKqRAaXB2B12y7wIt91I%3D&Expires=1665416214',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
        {
            variant: 'primary',
            name: 'Liderança que Inspira',
            start: '01/01/2021',
            description: 'Mais do que apenas bater metas, o líder inspirador...',
            mentor: {
                name: 'Maria Arrazi',
                linkedin: 'urlLinkedin'
            },
            action: () => alert('redirect to'),
            notStarted: true,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/25/Inovacao_Customer_Centric.jpg?AWSAccessKeyId=ASIAYR3BIRGASFQHZ4R3&Signature=wvaGy%2Bv5tRqx%2BdS4eu0uzBKmFZw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqz84mztgCLzY6IfrckAYVf3l%2FgLZSqM49QjlkFNeCqAiB2IbSdsnFi9JKsk0g%2Fg8eHPgBNALlrj5JEPn4y5%2FWEhCqLAwhfEAEaDDU4ODA3NzYzMTg3MyIMFS3FcLYdFnHvEr6ZKugCPtUlTfjVs%2B8sbXIyyv1lD0Db7EQuTGYDawHWouNxtwBf7PYIBzcY3upravUZftxsvHb9lGDzCQ3KAjU4R1x4KCERcHHw3UYq5hgFz4nzPQQbGxCcq8IcfalyXFaXnCSwzdFbealGANch%2B8fjmA6HycrYgaoNeIA86KWe%2B9SSgrHReZjIBUtQwUdSI8leapS1mmq5W1jASu%2BTjxKSTAfiOybZ%2FyKms%2B3vK8RJZGihGzPdTKCPhagzHeTd3PvfeUl4xzsVrJLnypq9hc1IqbvMak46AZ5VwO5Tx1XIpFI70GXNZPripwywwn5dy%2FvIYtrL1BPRSY8L9DvxDSbgMPYi0%2BrZHBztdcMbxuK6WSN4wX0en441p30F82PO0gIooCSvrc1GhrzW8FMz5JOLB1Ygk5eTkYcN7imtPvFP4tnG%2Fjo0h0PZ8MRg2khnQuAnfALa8kaDM1mvGRVlxBjb5zpNGeGlLckCwcahMIrTkJoGOp4BcKnXmAfb1x70b5GvEmVUONGx5wTRLlcszjj%2BUaJGGoLuSIMvTetUw9i%2BON8R0hLDlkzX8mn2Esmc%2Fr4PtLt8i%2BrKEA%2BhvNHAy%2FFX4dA87FIblfX79fwztjI1tgAWSfLz9VZFgF7i7fZjbksoVewtHN2NoM3gTMUIVZE6bNiY9Fmsk92DQzAxLvYoO8MkooDfKqRAaXB2B12y7wIt91I%3D&Expires=1665416214',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
        {
            variant: 'primary',
            name: 'Design-Driven Innovation',
            start: '10/10/2022',
            description: 'Entenda como funciona o Agile Learning Experience FRST e comece sua jornada de aprendizado.',
            mentor: {
                name: 'Diego Silverio',
                linkedin: 'urlLinkedin'
            },
            action: () => alert('redirect to'),
            notStarted: true,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/14/DESIGN-DRIVEN_INNOVATION.jpg?AWSAccessKeyId=ASIAYR3BIRGA7XQ6PKZC&Signature=wWEmx%2BMM%2FubHeWPoUn0n%2FehafOA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHpIo4d7ZoyjzmqbBJSh%2Flsc5QMh6fxmzoyBaezwosiHAiEAw7Rf%2Fh%2Fk3iZEwd24lxhkHTPlhcRZIbJ4NxoMbn9KnMAqiwMIYhABGgw1ODgwNzc2MzE4NzMiDKjzDmspIQFnyTAX6yroAtX5iHwWKfrJLcJxjxcC6a%2BFT%2FBhqrnranep0jUbKQ8D06hlGH7%2BPZMVkSa%2BZf0%2FMZ3WZePjTy29M86MXeg%2BBSIAXaCpOcynItE%2BSS6EC%2BIzdatMgpsHc9EHjrrybVsbmX%2FF0RbJWCk2ge%2FpussLZQb3irIiMkfQZ1LAyXy50FcJHoHPfJVYnhWoOcZ%2FAUIbGAJ0u9DXOY0FVJcnB%2FgfnGzrCxLTkurgGfIZjnzKZx6x3U85zi0emHUaV7s%2FG5tjHltrHnElxChaYna2k%2FmNr5WgSLKo09dGGsott4SM03wc5AwQuIbaHyqd4yva10%2FEkA7dGhQZC2UGlcaCxxr83sRcsYmkDZASQWi1iuLIpwT8V5Gx8JmSTMKQSnVsTUDMCXisJfdcOW2s4UsXfxCMCSnokLd28vfZEdjb1%2Fb4uWiLAebFcR3LNevNFMxZB%2FLn2Fk0svMQoUiBMSjVgCmeabnkjv%2FUu3ZPczDvmpGaBjqdAUJCHxYq%2F%2BwWV9dy3pbLQS6P2Lz92QHxq6hdB5we4MuOPiMKaQR0uSPW0rC7xxBDVszlagalKqDiFTGhVGvT1rn5pjulZ7e0QQpF48%2BnIW89ZvFtXIPTtAsnKOl%2BAQ%2F3LnL0%2FB3AnL8AbKohr6yv4miRRj6WsKIwE8U1zY%2F5LjImSJ0E5dBjCFPoip6M%2BdIs1TGw8%2BYOgvq2M6N5fLs%3D&Expires=1665430971',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
        {
            variant: 'primary',
            name: 'Liderança que Inspira',
            start: '01/01/2021',
            description: 'Mais do que apenas bater metas, o líder inspirador...',
            mentor: {
                name: 'Maria Arrazi',
                linkedin: 'urlLinkedin'
            },
            action: () => alert('redirect to'),
            notStarted: true,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/25/Inovacao_Customer_Centric.jpg?AWSAccessKeyId=ASIAYR3BIRGASFQHZ4R3&Signature=wvaGy%2Bv5tRqx%2BdS4eu0uzBKmFZw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGqz84mztgCLzY6IfrckAYVf3l%2FgLZSqM49QjlkFNeCqAiB2IbSdsnFi9JKsk0g%2Fg8eHPgBNALlrj5JEPn4y5%2FWEhCqLAwhfEAEaDDU4ODA3NzYzMTg3MyIMFS3FcLYdFnHvEr6ZKugCPtUlTfjVs%2B8sbXIyyv1lD0Db7EQuTGYDawHWouNxtwBf7PYIBzcY3upravUZftxsvHb9lGDzCQ3KAjU4R1x4KCERcHHw3UYq5hgFz4nzPQQbGxCcq8IcfalyXFaXnCSwzdFbealGANch%2B8fjmA6HycrYgaoNeIA86KWe%2B9SSgrHReZjIBUtQwUdSI8leapS1mmq5W1jASu%2BTjxKSTAfiOybZ%2FyKms%2B3vK8RJZGihGzPdTKCPhagzHeTd3PvfeUl4xzsVrJLnypq9hc1IqbvMak46AZ5VwO5Tx1XIpFI70GXNZPripwywwn5dy%2FvIYtrL1BPRSY8L9DvxDSbgMPYi0%2BrZHBztdcMbxuK6WSN4wX0en441p30F82PO0gIooCSvrc1GhrzW8FMz5JOLB1Ygk5eTkYcN7imtPvFP4tnG%2Fjo0h0PZ8MRg2khnQuAnfALa8kaDM1mvGRVlxBjb5zpNGeGlLckCwcahMIrTkJoGOp4BcKnXmAfb1x70b5GvEmVUONGx5wTRLlcszjj%2BUaJGGoLuSIMvTetUw9i%2BON8R0hLDlkzX8mn2Esmc%2Fr4PtLt8i%2BrKEA%2BhvNHAy%2FFX4dA87FIblfX79fwztjI1tgAWSfLz9VZFgF7i7fZjbksoVewtHN2NoM3gTMUIVZE6bNiY9Fmsk92DQzAxLvYoO8MkooDfKqRAaXB2B12y7wIt91I%3D&Expires=1665416214',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
        {
            variant: 'primary',
            name: 'Design-Driven Innovation',
            start: '10/10/2022',
            description: 'Entenda como funciona o Agile Learning Experience FRST e comece sua jornada de aprendizado.',
            mentor: {
                name: 'Diego Silverio',
                linkedin: 'urlLinkedin'
            },
            action: () => alert('redirect to'),
            notStarted: true,
            bannerImage: 'https://frst-api-student-group-prod.s3.amazonaws.com/media/product/module/cover-image/14/DESIGN-DRIVEN_INNOVATION.jpg?AWSAccessKeyId=ASIAYR3BIRGA7XQ6PKZC&Signature=wWEmx%2BMM%2FubHeWPoUn0n%2FehafOA%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIHpIo4d7ZoyjzmqbBJSh%2Flsc5QMh6fxmzoyBaezwosiHAiEAw7Rf%2Fh%2Fk3iZEwd24lxhkHTPlhcRZIbJ4NxoMbn9KnMAqiwMIYhABGgw1ODgwNzc2MzE4NzMiDKjzDmspIQFnyTAX6yroAtX5iHwWKfrJLcJxjxcC6a%2BFT%2FBhqrnranep0jUbKQ8D06hlGH7%2BPZMVkSa%2BZf0%2FMZ3WZePjTy29M86MXeg%2BBSIAXaCpOcynItE%2BSS6EC%2BIzdatMgpsHc9EHjrrybVsbmX%2FF0RbJWCk2ge%2FpussLZQb3irIiMkfQZ1LAyXy50FcJHoHPfJVYnhWoOcZ%2FAUIbGAJ0u9DXOY0FVJcnB%2FgfnGzrCxLTkurgGfIZjnzKZx6x3U85zi0emHUaV7s%2FG5tjHltrHnElxChaYna2k%2FmNr5WgSLKo09dGGsott4SM03wc5AwQuIbaHyqd4yva10%2FEkA7dGhQZC2UGlcaCxxr83sRcsYmkDZASQWi1iuLIpwT8V5Gx8JmSTMKQSnVsTUDMCXisJfdcOW2s4UsXfxCMCSnokLd28vfZEdjb1%2Fb4uWiLAebFcR3LNevNFMxZB%2FLn2Fk0svMQoUiBMSjVgCmeabnkjv%2FUu3ZPczDvmpGaBjqdAUJCHxYq%2F%2BwWV9dy3pbLQS6P2Lz92QHxq6hdB5we4MuOPiMKaQR0uSPW0rC7xxBDVszlagalKqDiFTGhVGvT1rn5pjulZ7e0QQpF48%2BnIW89ZvFtXIPTtAsnKOl%2BAQ%2F3LnL0%2FB3AnL8AbKohr6yv4miRRj6WsKIwE8U1zY%2F5LjImSJ0E5dBjCFPoip6M%2BdIs1TGw8%2BYOgvq2M6N5fLs%3D&Expires=1665430971',
            labels: {
                mentor: 'Mentor(a)',
                dateStart: 'Data de Início'
            }
        },
    ]
}