
import RocketButton from './index'

import TextIcon from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/TextIcon',
    component: TextIcon,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextIcon {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    description: "Teste"
}

