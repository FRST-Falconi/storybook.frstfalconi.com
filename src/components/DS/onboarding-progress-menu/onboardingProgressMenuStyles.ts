import styled from "styled-components";
import {ICheckCircle, IComponente} from "./onboardingProgressMenu";

export const Progress = styled.div`
    ${({ theme }) => theme.fonts.textMessageComponentsCardTitle};
    color: ${({ theme }) => theme.colors.primary1};
    height: 18px;
    width: 279px;
    margin-bottom:15px;
    `

export const CardContainer = styled.div`
    box-sizing: border-box;
    max-width: 288px;
    height: auto;
    background:${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 25px 18px -20px rgba(34, 34, 34, 0.2);
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 8px;
    padding: 22px 36px 17px;
`
export const TextLevel = styled.p`
    ${({ theme }) => theme.fonts.textMessageComponentsBold};
    color: ${({ theme }) => theme.colors.neutralsGrey1};
    display: block;
`
export const Challenge = styled.p`
    ${({ theme }) => theme.fonts.textMessageRegular};
    color: ${({ theme }) => theme.colors.neutralsGrey1};
`
export const Line = styled.div`
    border-bottom: 1.5px solid #BDBDBD;
    width: 100%;
    height: 1px;
    margin-top: 14px;
    margin-bottom: 30px;
`
export const ImageTextGroup = styled.div`
    display: flex;
    flex-direction:row;
    align-items:center;
    gap: 19px;
    margin-left: 32px;
`
export const StepBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 12px;
`
export const StepBoxTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`
export const StepBoxIconBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 66px;
    align-items: center;
`
export const StepBar = styled.div<IComponente>`
    width: 2px;
    flex:1;
    border-radius: 2px;
    background-color: ${({isComplete, theme}) => isComplete ? theme.colors.primary1 : theme.colors.incompleteGrey};
`
export const StepBoxTitle = styled.a<IComponente>`
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
    color:${({isComplete, theme}) => isComplete ? theme.colors.primary1 : 'rgba(51, 65, 85, 1)'};
    ${({isComplete}) => !isComplete && 'font-weight: 400;'}
    margin-top:2px;
    cursor: pointer;
    text-decoration: none;
`
export const StepBoxDescription = styled.p`
    ${({ theme }) => theme.fonts.textMessageComponentsRegular};
    color: ${({ theme }) => theme.colors.neutralGrey10};
    margin-bottom: 24px;
`
export const CheckCircle = styled.div<ICheckCircle>`
    box-sizing: border-box !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${({isComplete, theme}) => isComplete ? theme.colors.primary1 : theme.colors.incompleteGrey};
    border: 4px solid ${({isChecked, theme}) => isChecked ? theme.colors.shadeWhite : '#F2F4F7'};
`
