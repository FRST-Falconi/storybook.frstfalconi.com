import styled from 'styled-components'

export const Wrapper = styled.div<{mobileVersion: boolean}>`
    display: flex;
    flex-direction: column;
    max-width:  ${({mobileVersion})=> mobileVersion ? '343px': '400px'};
`

export const Title = styled.p<{mobileVersion: boolean}>`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    display: flex;
    align-items: ${({mobileVersion})=> mobileVersion ? 'start': 'center'};
    letter-spacing: 0.01em;
    color:  #222;
`

export const AvatarImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`

export const WrapperSpecialist = styled.div<{mobileVersion: boolean}>`
    display: flex;
    margin-top: ${({mobileVersion})=> mobileVersion ? '32px': '48px'};
    flex-direction:${({mobileVersion})=> mobileVersion ? 'column': 'row'};
    align-items: ${({mobileVersion})=> mobileVersion ? 'center': 'start'};
`

export const TextSpecialist = styled.div<{mobileVersion: boolean}>`
    margin-left: ${({mobileVersion})=> mobileVersion ? '0px': '24px'};
`
    export const Phone = styled.p<{mobileVersion: boolean}>`        
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        display: flex;
        align-items: center;
        justify-content:${({mobileVersion}) => mobileVersion ? 'center': 'start'};
        text-align: center;
        letter-spacing: 0.25px;

        color: #222222;
        margin-bottom: 8px;
    `
    export const Email = styled.p<{mobileVersion: boolean}>`
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        
        display: flex;
        align-items: center;
        text-align: start;
        justify-content:${({mobileVersion}) => mobileVersion ? 'center': 'start'};
        
        letter-spacing: 0.25px;

        color: #222222;
        margin-bottom: 8px;
    `
    export const Name = styled.p<{mobileVersion: boolean}>`
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content:${({mobileVersion}) => mobileVersion ? 'center': 'start'};
        text-align: center;
        letter-spacing: 0.25px;
        color:  #222;
        margin-bottom: 8px;
        margin-top:${({mobileVersion}) => mobileVersion ? '24px': '0px'};
    `
export const WrapperButtons = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 45px;
    gap: 16px;
`