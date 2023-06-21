import styled from "styled-components";

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
    height: 560px;
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
    border:1px solid blue;
`
export const StepBoxTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    border:1px solid red;
`
export const StepBoxIconBlock = styled.div`
    display: flex;
    flex-direction: column;
    border:1px solid green;
    width:66px;
    align-items: center;
`
export const StepBar = styled.div`
    width: 2px;
    flex:1;
    border-radius: 2px;
    background-color:${({ theme }) => theme.colors.primary1};
`
export const StepBoxTitle = styled.p`
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold};
    color: ${({ theme }) => theme.colors.primary1};  
`
export const StepBoxDescription = styled.p`
    ${({ theme }) => theme.fonts.textMessageComponentsRegular};
    color: ${({ theme }) => theme.colors.neutralGrey10};
`
export const CheckCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: orange;
    border: 4px solid white;
`