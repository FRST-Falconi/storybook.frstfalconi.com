import React from 'react'

import URLAddress from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/URLAddress',
    component: URLAddress,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <URLAddress {...args} />

export const URLAdress = Template.bind({})
URLAdress.args = {
    variant: 'default',
    url: 'https://www.frstfalconi.com/nomedocanal',        
    onClickEncurta: () => { alert('Encurta Link') },
    onClickCopia: () => { alert('Copia') }
}

