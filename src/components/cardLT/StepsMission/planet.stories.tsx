import Steps from './Steps'
import StepMission from './StepMission'
import React from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/Missão',
    component: Steps,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Steps {...args} />
const Template2 = (args) => <StepMission {...args} />

export const MissionStepsMars= Template2.bind({})
MissionStepsMars.args = {
    stepProblem: 1,
    stepActive: 1,  
    onSelected: (step: number)=> {
        alert(`Step Selecionado ${step}`)
    }
}
export const MissionStepsSaturno = Template2.bind({})
MissionStepsSaturno.args = {
    stepProblem: 3,
    stepActive: 3,  
    onSelected: (step: number)=> {
        alert(`Step Selecionado ${step}`)
    }
}
export const MissionStepsNetuno = Template2.bind({})
MissionStepsNetuno.args = {
    stepProblem: 5,
    stepActive: 5,  
    onSelected: (step: number)=> {
        alert(`Step Selecionado ${step}`)
    }
}
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
