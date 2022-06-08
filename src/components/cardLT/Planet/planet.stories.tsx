

import Planet from '../Planet/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/Missão',
    component: Planet,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Planet {...args} />

export const Step1 = Template.bind({})
Step1.args = {
    step: 1,
    status: "A",  
}
export const Step2 = Template.bind({})
Step2.args = {
    step: 2,
    status: "A",  
}
export const Step3 = Template.bind({})
Step3.args = {
    step: 3,
    status: "A",  
}
export const Step4 = Template.bind({})
Step4.args = {
    step: 4,
    status: "A",  
}
export const Step5 = Template.bind({})
Step5.args = {
    step: 5,
    status: "A",  
}
export const StepInativo = Template.bind({})
StepInativo.args = {
    step: 1,
    status: "I",  
}
export const StepBloqueado = Template.bind({})
StepBloqueado.args = {
    step: 1,
    status: "B",  
}
