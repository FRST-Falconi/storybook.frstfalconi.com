import React from 'react'

import Pagination from './index'
import ThumbListContent from '../thumbListContent'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'IJ/Pagination',
    component: Pagination,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pagination {...args} />

export const normal = Template.bind({})
normal.args = {
    totalRegistry: 100,
    registryPerPage: 10,
    qtdNumberShowPagination: 5,
    showFirstLastButton: false,

    onLoadPage: (page) => console.log(`Página ${page}`),

    children: 
        <>
            
        </>
}
export const lastFirst = Template.bind({})
lastFirst.args = {
    totalRegistry: 100,
    registryPerPage: 10,
    qtdNumberShowPagination: 5,
    showFirstLastButton: true,

    textFirstButton: 'First',
    textLastButton: 'Last',

    onLoadPage: (page) => console.log(`Página ${page}`),

    children: 
        <>
            
        </>
}
export const withChildren = Template.bind({})
withChildren.args = {
    totalRegistry: 100,
    registryPerPage: 10,
    qtdNumberShowPagination: 5,
    showFirstLastButton: false,

    onLoadPage: (page) => console.log(`Página ${page}`),

    children: 
        <>
            <ThumbListContent 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' 
                imageSrc='https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png'
                textViewLessButton='Ver menos'
                textViewMoreButton='Ver mais'
                typeThumbContent='video'
                onClickThumb={() => alert('clicado!')}
            />
            <ThumbListContent 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' 
                imageSrc='https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png'
                textViewLessButton='Ver menos'
                textViewMoreButton='Ver mais'
                typeThumbContent='video'
                onClickThumb={() => alert('clicado!')}
            />
            <ThumbListContent 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' 
                imageSrc='https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png'
                textViewLessButton='Ver menos'
                textViewMoreButton='Ver mais'
                typeThumbContent='video'
                onClickThumb={() => alert('clicado!')}
            />
            <ThumbListContent 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' 
                imageSrc='https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png'
                textViewLessButton='Ver menos'
                textViewMoreButton='Ver mais'
                typeThumbContent='video'
                onClickThumb={() => alert('clicado!')}
            />
            <ThumbListContent 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' 
                imageSrc='https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png'
                textViewLessButton='Ver menos'
                textViewMoreButton='Ver mais'
                typeThumbContent='video'
                onClickThumb={() => alert('clicado!')}
            />
            <ThumbListContent 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' 
                imageSrc='https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png'
                textViewLessButton='Ver menos'
                textViewMoreButton='Ver mais'
                typeThumbContent='video'
                onClickThumb={() => alert('clicado!')}
            />
        </>
}