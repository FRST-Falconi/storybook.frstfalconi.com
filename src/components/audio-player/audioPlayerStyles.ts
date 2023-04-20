import styled from "styled-components";


export const container = styled.div`
    display: flex;
    position: relative;
    gap: 20px;
    height: 234px;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid ${({theme}) => theme.colors.borderPrimary};
    background-color: #E2E8F0;
    z-index: 1;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const containerMask = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 16px;
    z-index: 1;
`

export const thumb = styled.div`
    border-radius: 8px;
    width: 194px;
    max-width: 194px;
    height: 194px;
    z-index: 2;
    /* background-color: red; */

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 2;
`

export const title = styled.p`
    font-family: 'Work Sans';
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    color: #222222;

    margin-top: 12px;
`

export const description = styled.p`
    font-family: 'PT Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #222222;   
`

export const date = styled.p`
    font-family: 'PT Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #222222;
`

export const controls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 24px;
    width: 100%;
    margin-top: 24px;
`

export const navigationButton = styled.button`
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.neutralsGrey1};

    &:hover{
        color: ${({theme}) => theme.colors.primary1};
    }

    &:active{
        color: ${({theme}) => theme.colors.primary3};
    }
`

export const playButton = styled.button`
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.primary2};
    &:hover{
        color: ${({theme}) => theme.colors.primary1};
    }

    &:active{
        color: ${({theme}) => theme.colors.primary3};
    }
`

export const volumeControl = styled.div`
    position: absolute;
    right: 0;
`

export const volume = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

export const volumeBar = styled.input<{currentInputValue: number}>`
    appearance: none;
    -webkit-appearance: none;
    display: block;
    border-radius: 1px;
    box-sizing: border-box;
    width: 32px;
    height: 2px;
    margin: 0px;
    background: ${({theme}) => theme.colors.neutralsGrey1};
    background-image: linear-gradient(#ee4c15, #ee4c15);
    background-size: ${({currentInputValue}) => currentInputValue}% 100%;
    background-repeat: no-repeat;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &:hover::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border: none;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.primary2};
    }

    &:hover::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border: none;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.primary2};
    }

    &:hover::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 5px;
        height: 5px;
        border: none;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.primary2};
    }

    &::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-moz-range-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-ms-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

`

export const audioTimeline = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
`

export const timeText = styled.p`
    font-family: 'PT Sans';
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    color: #222222;

`

export const timeline = styled.input<{currentInputValue: number}>`
    appearance: none;
    -webkit-appearance: none;
    display: block;
    border-radius: 2px;
    box-sizing: border-box;
    width: 100%;
    height: 4px;
    margin: 0px;
    background: ${({theme}) => theme.colors.neutralsGrey1};
    background-image: linear-gradient(#ee4c15, #ee4c15);
    background-size: ${({currentInputValue}) => currentInputValue}% 100%;
    background-repeat: no-repeat;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
    }

    &:hover::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.primary2};
    }

    &:hover::-moz-range-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.primary2};
    }

    &:hover::-ms-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border: none;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.primary2};
    }

    &::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-moz-range-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

    &::-ms-track{
        -webkit-appearance: none;
        appearance: none;
        border: none;
        box-shadow: none;
        background: transparent;
    }

`