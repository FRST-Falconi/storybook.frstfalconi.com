import styled from "styled-components";
import {ICheckCircle, IComponente} from "./onboardingProgressMenu";

export const CardContainer = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    height: 680px;
    background:${({ theme }) => theme.colors.shadeWhite};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.colors.linkDisabled};
    border-radius: 16px;
    padding-right: 13px;
    padding-top: 27px;
    padding-bottom: 29px;
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

export const ImageTextGroup = styled.div`
    padding-left: 15px;
    display: flex;
    flex-direction:row;
    align-items:center;
    gap: 11.83px;
    padding-bottom:30.35px; 
`
export const ScroollableContent = styled.div`
    display: block;
    width: 100%;
    scroll-behavior: smooth;
    overflow-y:auto;
    max-height: 560px;
    padding-right: 17px;
    &::-webkit-scrollbar-button:vertical:increment {
        display: none !important;
    };
    &::-webkit-scrollbar-button:vertical:decrement {
        display: none !important;
    };
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
    color:${({isComplete, theme}) => isComplete ? theme.colors.primary1 : ' #344054'};
    ${({isComplete}) => !isComplete && 'font-weight: 500;'}
    margin-top:2px;
    cursor: pointer;
    text-decoration: none;
`
export const StepBoxDescription = styled.p`
    ${({ theme }) => theme.fonts.textMessageComponentsRegular};
    color:#475569;
    margin-bottom: 26px;
`
export const CheckCircle = styled.div<ICheckCircle>`
    box-sizing: border-box !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${({isComplete, theme}) => isComplete ? theme.colors.primary1 : theme.colors.primary1 };
    border: 4px solid ${({isChecked, theme}) => isChecked ? theme.colors.shadeWhite : theme.colors.shadeWhite};
`
